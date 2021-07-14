/**
 * 匿名函数：定义时未定义函数的名称
 * 
 * 匿名函数的好处：
 * 1.非匿名函数在定义时就创建函数对象和作用域对象。以后及时未调用，也占空间
 * 2.匿名函数只有在调用时，才会创建函数对象和作用域对象。调用完后立即释放，节省内存。适合做回调函数
 * 
 * 
 * 箭头函数相当于匿名函数，并且简化了函数定义
 * 
 * x => x * x 
 *    相当于
 * function (x) {
 *   return x * x;
 * }
 * 
 */


function timeout(ms) {
    return new Promise((resolve) => {
        console.log(1);
        setTimeout(resolve, ms);
        console.log(2);
    });
}

timeout(3000).then(() => {
    console.log('done');
});
