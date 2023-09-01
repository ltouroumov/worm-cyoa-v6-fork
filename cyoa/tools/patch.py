import inspect
import abc
from collections import defaultdict
from dataclasses import dataclass
from typing import Any, Optional

from cyoa.tools.lib import console


def patch(*, target: str, context: Optional[str] = None):
    def __curry__(fn):
        fn._patch = {'target': target, 'context': context}
        return fn

    return __curry__


@dataclass
class PatchContext:
    point_types: dict[str, Any]
    groups: dict[str, Any]
    rows: dict[str, Any]
    objects: dict[str, Any]


class PatchBase(abc.ABC):
    handlers: dict[str, list[str]]

    def __init_subclass__(cls, **kwargs):
        super().__init_subclass__(**kwargs)
        cls.handlers: dict[str, list[str]] = defaultdict(list)
        for name, method in inspect.getmembers(cls, lambda m: inspect.isfunction(m) and hasattr(m, '_patch')):
            target_name = getattr(method, '_patch')['target']
            cls.handlers[target_name].append(name)

    def visit(self, node_type: str, node_data: Any, parents: dict[str, Any] = None, context: PatchContext = None):
        if type_handlers := self.handlers.get(node_type, None):
            for handler_name in type_handlers:
                self._dispatch(handler_name, node_data, parents, context)

    def _dispatch(self, handler_name, node_data, parents, context):
        handler = getattr(self, handler_name)
        signature = inspect.signature(handler)
        call_params = {}
        for idx, (name, param) in enumerate(signature.parameters.items()):
            if idx == 0:
                call_params[name] = node_data
            elif name in parents:
                call_params[name] = parents[name]
            elif name in ('context', 'ctx'):
                call_params[name] = context
            else:
                console.log(f"Skipped argument [b]{name}[/] of [b]{type(self).__name__}.{handler_name}[/]")
                call_params[name] = None

        try:
            handler(**call_params)
        except:
            console.print_exception()
