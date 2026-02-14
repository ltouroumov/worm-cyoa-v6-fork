"""Built-in build step handlers."""

from cyoa.build.registry import registry
from cyoa.build.steps.check import CheckStep
from cyoa.build.steps.export import ExportStep
from cyoa.build.steps.format import FormatStep
from cyoa.build.steps.media import MediaCleanStep, MediaExtractStep, MediaOptimizeStep
from cyoa.build.steps.patch import PatchStep
from cyoa.build.steps.powers import PowersStep
from cyoa.build.steps.rows import RowsBalanceStep, RowsSortStep
from cyoa.build.steps.md_export import MarkdownExportStep
from cyoa.build.steps.save import SaveStep

registry.register(SaveStep)
registry.register(MarkdownExportStep)
registry.register(ExportStep)
registry.register(FormatStep)
registry.register(CheckStep)
registry.register(PatchStep)
registry.register(MediaExtractStep)
registry.register(MediaOptimizeStep)
registry.register(MediaCleanStep)
registry.register(PowersStep)
registry.register(RowsBalanceStep)
registry.register(RowsSortStep)
