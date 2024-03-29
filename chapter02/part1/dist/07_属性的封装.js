"use strict";
(function () {
    // 定义一个表示人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /**
         *  getter方法用来读取属性
         *  setter方法用来设置属性
         *      - 它们被称为属性的存取器
         */
        // 定义方法，用来获取name属性
        // getName() {
        //     return this._name;
        // }
        // // 定义方法，用来设置name属性
        // setName(value: string) {
        //     this._name = value;
        // }
        // getAge() {
        //     return this._age;
        // }
        // setAge(value: number) {
        //     // 判断年龄是否合法
        //     if (value >= 0) {
        //         this._age = value;
        //     }
        // }
        // TA中设置getter方法的方式
        get name() {
            // console.log('get name()执行了');
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    const pre = new Person('孙悟空', 10);
    /**
     * 现在属性是在对象中设置的，属性可以任意的被修改
     *    属性可以任意被修改将会导致对象中的数据变得非常不安全
     */
    // pre.setName('猪八戒');
    // pre.setAge(-33);
    pre.name = '猪八戒';
    pre.age = 4;
    console.log(pre);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(123);
    // b.num = 33;
    /*  class C{
         name: string;
         age: number;
 
         constructor(name: string, age: number) {
             this.name = name;
             this.age = age;
         }
     } */
    class C {
        // 可以直接将属性定义在构造函数中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('xxx', 123);
    console.log(c);
})();
