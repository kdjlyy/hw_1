var flag = false

Promise.resolve().then(() => flag = true)

function f1(f) { 
    f() 
} 

function f2(f) { 
    setTimeout(f) 
} 

f1(() => console.log(flag ? '异步' : '同步'))  // 同步
f2(() => console.log(flag ? '异步' : '同步'))  // 异步