/**
 * 每一个异步任务返回一个Promise对象，该对象有一个then方法，允许指定回调函数。
 * 比如，f1的回调函数f2,可以写成：f1().then(f2);
 * 
 */

var promise = new Promise(function(resolve, reject) {
    // 异步处理
    // 处理结束后、调用resolve 或 reject
    setTimeout(function() {
        resolve("Success")
        reject("Fail");
    }, 500);
});

promise.then(function(message) {
    // message的值是上面调用resolve/reject方法传入的值
    console.log("Called " + message);
});