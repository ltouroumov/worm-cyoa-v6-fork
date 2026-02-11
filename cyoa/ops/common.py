import random
import string


def is_empty(value):
  return value is None or value == ""


def find_first(values, f):
  for value in values:
    if f(value):
      return value
  return None


def find_first_index(values, f):
  for index, value in enumerate(values):
    if f(value):
      return index
  return None


def gen_id(length=6):
  return str.join("", random.choices(string.ascii_lowercase + string.digits, k=length))
