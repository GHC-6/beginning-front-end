Python Style Standard 
=========================

---------------------------------------------------------------------------------------------
## Overview
- Encoding
- Code Formatting
- Comments and Docstrings
- Naming


## 1 Encoding

Use UTF-8 encoding.

## 2 Code Formatting

### 2.1 Indentation

- Never use `tab`, indent your code blocks with `4 spaces`.

```Python 
# 4-space hanging indent; nothing on first line
foo = long_function_name(
    var_one, var_two, var_three,
    var_four)

# Aligned with opening delimiter
foo = long_function_name(var_one, var_two,
                         var_three, var_four)
```

### 2.2 Line length

- Maximum line length is `80 characters`(In special cases, it may be more than 80, but less than 120).

- Exceptions:

  - Long import statements.
  - URLs in comments.

- Make use of Python’s [implicit line joining inside parentheses, brackets and braces](http://docs.python.org/reference/lexical_analysis.html#implicit-line-joining).
If necessary, you can add an extra pair of parentheses around an expression.

```python
foo_bar(self, width, height, color='black', design=None, x='foo',
        emphasis=None, highlight=0)
```

- When a literal string won’t fit on a single line, use parentheses for implicit line joining.

``` python
x = ('This will build a very long long '
     'long long long long long long string')
```

### 2.3 Semicolons

- Do not terminate your lines with semicolons, and do not use semicolons to put two statements on the same line.

```python
Yes:
do_first()
do_second()
do_third()

No:
do_first();do_second();do_third();
```

### 2.4 Blank Lines

- Two blank lines between top-level definitions, be they function or class definitions. 
- One blank line between method definitions and between the `class` line and the first method. 

``` python
class A:

    def __init__(self):
        pass

    def hello(self):
        pass


def main():
    pass  
``` 

- Use single blank lines as you judge appropriate within functions or methods.

### 2.5 Whitespace

- Follow standard typographic rules for the use of spaces around punctuation.

- Use a single space on either side for binary operators`[=,-,+=,==,>,in,is not, and]`

```python
Yes:
i = i + 1
submitted += 1
x = x * 2 - 1
hypot2 = x * x + y * y
c = (a + b) * (a - b)

No:
i=i+1
submitted +=1
x = x*2 - 1
hypot2 = x*x + y*y
c = (a+b) * (a-b)
```

- Use a single space after `,` in arguments list.

```python
Yes: 
def complex(real, imag):
    pass

No: 
def complex(real,imag):
    pass
```

- Never use spaces around `=` when passing keyword arguments or defining a default parameter value,

```python
Yes:
def complex(real, imag=0.0):
    pass

No:
def complex(real, imag = 0.0):
    pass
```

- No space inside parentheses, brackets or braces.

```python
Yes: spam(ham[1], {eggs: 2}, [])

No: spam( ham[ 1 ], { eggs: 2 }, [ ] )
```

- No space before the open paren/bracket that starts an argument list, indexing or slicing.

```python
Yes:
spam(1)
dict['key'] = list[index]

No:
spam (1)
dict ['key'] = list [index]
```

- Don’t use spaces to vertically align tokens on consecutive lines.

``` python
Yes:
foo = 1000  # comment
long_name = 2  # comment that should not be aligned

dictionary = {
    'foo': 1,
    'long_name': 2,
}

No:
foo       = 1000  # comment
long_name = 2     # comment that should not be aligned

dictionary = {
    'foo'      : 1,
    'long_name': 2,
}
```

### 2.6 Wrap

- Use wrap for `if/for/while`

```python
Yes:
if foo == 'blah':
    do_blah_thing()
No:
if foo == 'blah': do_blah_thing()
```

## 2.7 Import

- Imports are always put at the top of the file, just after any module comments and docstrings and before module globals and constants. Imports should be grouped from most generic to least generic:

1. Python standard library imports.
2. [third-party](https://pypi.org/) module or package imports.
3. Code repository sub-package imports

```python
import os
import sys

import msgpack
import zmq

import foo
```

- Imports should be on separate lines.

``` python
Yes:
import os
import sys

No:
import sys,os

Yes:
from subprocess import Popen, PIPE
```

## 3 Comments and Docstrings

- Be sure to use the right style for module, function, method docstrings and inline comments.

### 3.1 Comments

#### 3.1.1 Block

- Use a single space after `#`, use blank line to separate sections()

```python
# Block Comment
# Block Comment
#
# Block Comment
# Block Comment
```

#### 3.1.2 Inline

- Use at least two spaces before `#` to separate from the statements, do not use meaningless comments

```python
No:
x = x + 1 # x plus 1
```

### 3.2 Docstrings

- A docstring is a string that is the first statement in a package, module, class or function. These strings can be extracted automatically through the `__doc__` member of the object and are used by `pydoc`.

- A docstring should be descriptive, don’t copy the defintion.

```python
Yes: 
def function(a, b):
    """Calculate and return the average of the data in the range a to b"""

No:
def function(a, b):
    """function(a, b) -> list"""
```

- The end of the docstring `"""` should be on a separate line, unless there is only one line for the docstring.

```python
"""Return a foobar
Optional plotz says to frobnicate the bizbaz first.
"""

"""Oneline docstring"""
```

#### 3.2.1 Functions and Methods

- A function must have a docstring, unless it meets all of the following criteria:

-   not externally visible
-   very short
-   obvious

- Certain aspects of a function should be documented in special sections, listed below. Each section begins with a heading line, which ends with a colon. Sections should be indented two spaces, except for the heading.

```python
def fetch_bigtable_rows(big_table, keys, other_silly_variable=None):
    """Fetches rows from a Bigtable.

    Retrieves rows pertaining to the given keys from the Table instance
    represented by big_table.  Silly things may happen if
    other_silly_variable is not None.

    Args:
        big_table: An open Bigtable Table instance.
        keys: A sequence of strings representing the key of each table row
            to fetch.
        other_silly_variable: Another optional variable, that has a much
            longer name than the other args, and which does nothing.

    Returns:
        A dict mapping keys to the corresponding table row data
        fetched. Each row is represented as a tuple of strings. For
        example:

        {'Serak': ('Rigel VII', 'Preparer'),
         'Zim': ('Irk', 'Invader'),
         'Lrrr': ('Omicron Persei 8', 'Emperor')}

        If a key from the keys argument is missing from the dictionary,
        then that row was not found in the table.

    Raises:
        IOError: An error occurred accessing the bigtable.Table object.
    """
```

#### 3.2.2 Classes

- Classes should have a docstring below the class definition describing the class. If your class has public attributes, they should be documented here in an Attributes section and follow the same formatting as a function’s Args section.

```python
class SampleClass(object):
    """Summary of class here.

    Longer class information....
    Longer class information....

    Attributes:
        likes_spam: A boolean indicating if we like SPAM or not.
        eggs: An integer count of the eggs we have laid.
    """

    def __init__(self, likes_spam=False):
        """Inits SampleClass with blah."""
        self.likes_spam = likes_spam
        self.eggs = 0

    def public_method(self):
        """Performs operation blah."""
```

## 4 Naming

- module_name, package_name, ClassName, method_name, ExceptionName, function_name, GLOBAL_CONSTANT_NAME, global_var_name, instance_var_name, function_parameter_name, local_var_name.

- Function names, variable names, and filenames should be descriptive; eschew abbreviation. In particular, do not use abbreviations that are ambiguous or unfamiliar to readers outside your project, and do not abbreviate by deleting letters within a word.

- Attention
  - Do not use single character name, except counters and iterators.
  - Filename and moudle name must not contain dashes (-). 
  - Avoid double underscore surround

- Guidelines derived from Guido’s Recommendations

| Type | Public | Internal|
| :------| : ------| :------|
| Packages | lower_with_under | 
| Modules | lower_with_under | _lower_with_under |
| Classes | CapWords | _CapWords |
| Exceptions | CapWords | 
| Functions | lower_with_under() | _lower_with_under() |
| Global/Class Constants | CAPS_WITH_UNDER | _CAPS_WITH_UNDER |
| Global/Class Variables | lower_with_under | _lower_with_under |
| Instance Variables | lower_with_under | _lower_with_under (protected) |
| Method Names | lower_with_under() | _lower_with_under() (protected) |
| Function/Method Parameters | lower_with_under |
| Local Variables | lower_with_under | 