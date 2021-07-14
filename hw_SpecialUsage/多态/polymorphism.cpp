/**
 * @file polymorphism.cpp
 * @author kdjlyy
 * @brief 多态：通过基类的指针或引用对象调用子类实现的方法
 * @version 0.1
 * @date 2021-05-30
 * 
 * @copyright Copyright (c) 2021
 * 
 */

#include <iostream>
using namespace std;

class A {
public:
    A() {}
    virtual void foo() {
        cout << "This is A." << endl;
    }
};

class B : public A {
public:
    B() {}
    void foo() {
        cout << "This is B." << endl;
    }
};

class C: public A {
public:
    C(){}
    void foo() {
        cout<<"This is C."<<endl;
    }
};

int main(int argc, char *argv[])
{
    A *a = new B();
    a->foo();  // This is B.

    a = new C();
    a->foo();  // This is C.

    return 0;
}
