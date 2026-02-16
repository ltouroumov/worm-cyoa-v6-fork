"""Step handler registry and base types."""

from __future__ import annotations

from abc import ABC, abstractmethod
from dataclasses import dataclass, field

from cyoa.build.context import BuildContext
from cyoa.build.errors import BuildError


@dataclass
class StepResult:
  """Result of executing a build step.

  Attributes:
    success: Whether the step completed successfully
    message: Optional status or error message
    warnings: List of warning messages generated during execution
  """

  success: bool
  message: str = ""
  warnings: list[str] = field(default_factory=list)


class StepHandler(ABC):
  """Abstract base class for build step handlers.

  Each concrete handler must:
  - Define a unique `step_type` class variable
  - Implement the `execute` method to perform the step's operation
  """

  step_type: str

  @abstractmethod
  def execute(self, context: BuildContext, params: dict) -> StepResult:
    """Execute the build step.

    Args:
      context: Build context containing project data and environment
      params: Step-specific parameters from the build file

    Returns:
      StepResult indicating success/failure and any warnings
    """
    ...


class StepRegistry:
  """Registry for build step handlers.

  Maps step type names (e.g., "patch", "write") to their handler classes.
  """

  def __init__(self):
    self._handlers: dict[str, type[StepHandler]] = {}

  def register(self, handler_cls: type[StepHandler]) -> None:
    """Register a step handler class.

    Args:
      handler_cls: Handler class to register (must have `step_type` defined)

    Raises:
      BuildError: If step_type is not defined or already registered
    """
    if not hasattr(handler_cls, "step_type"):
      raise BuildError(f"Handler {handler_cls.__name__} does not define step_type")

    step_type = handler_cls.step_type
    if step_type in self._handlers:
      raise BuildError(f"Step type '{step_type}' is already registered")

    self._handlers[step_type] = handler_cls

  def get(self, step_type: str) -> type[StepHandler]:
    """Retrieve a handler class by step type.

    Args:
      step_type: The step type name to look up

    Returns:
      The registered handler class

    Raises:
      BuildError: If step type is not registered
    """
    if step_type not in self._handlers:
      raise BuildError(f"Unknown step type: '{step_type}'")

    return self._handlers[step_type]


# Module-level registry instance
registry = StepRegistry()
