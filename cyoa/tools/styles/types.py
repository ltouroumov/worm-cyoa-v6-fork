import abc
import re
from typing import Type


class StyleProperty:
    type: Type

    def __init__(self, prop_type: Type):
        self.type = prop_type

    def parse(self, value, variables: dict[str, str] = None):
        if isinstance(value, str) and variables is not None:
            for k, v in variables.items():
                value = value.replace(k, v)
            return self.type(value)
        else:
            return self.type(value)

    def is_valid(self, value):
        return isinstance(value, self.type)


class StringProperty(StyleProperty):
    format_rx: re.Pattern

    def __init__(self, format_rx: re.Pattern):
        super().__init__(str)
        self.format_rx = format_rx

class NumberProperty(StyleProperty):
    def __init__(self):
        super().__init__(float)

    def is_valid(self, value):
        if isinstance(value, float):
            return True
        elif isinstance(value, int):
            return True
        elif isinstance(value, str):
            return re.fullmatch(r"^-?\d+(?:\.\d+)?$", value) is not None
        else:
            return False

class EnumProperty(StyleProperty):
    allowed_values: set[str]

    def __init__(self, allowed_values: set[str]):
        super().__init__(str)
        self.allowed_values = allowed_values


# Generic types
String = StyleProperty(str)
Number = NumberProperty()
Boolean = StyleProperty(bool)

# RGB color with an alpha channel
Color = StringProperty(re.compile(r"^#[0-9a-fA-F]{8}$"))
Align = EnumProperty({"left", "right", "center"})
