"""
函数内部定义的函数，称为内部函数。

如果这个内部函数使用了它外部函数的局部变量，即使外部函数返回了，
这个内部函数还可以访问到外部函数的局部变量，这种现象就叫做闭包（closure）。
"""

def foo():
    name = "Peppa Orange"
    def bar():
        print(name)
    return bar

func = foo()  # func <- foo
func()  # bar()
