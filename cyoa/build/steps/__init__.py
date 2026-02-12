"""Built-in build step handlers."""

from cyoa.build.registry import registry
from cyoa.build.steps.export import ExportStep
from cyoa.build.steps.format import FormatStep
from cyoa.build.steps.save import SaveStep

registry.register(SaveStep)
registry.register(ExportStep)
registry.register(FormatStep)
