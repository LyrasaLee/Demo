
/*   求和   */
let sum = (n , m)=>n+m;
console.log(sum(10 , 20));

 /*   对象数组合并去重   */
let arrObj = [{a:0,b:'b'},{a:0,c:'c'},{a:1,d:'d'}];
const arr = arrObj.reduce((result, current) => {
    return Object.assign(result, current);
}, {})
console.log(arr);

/*  Promise 实现强制等待  */
async function delay(time){
    if (typeof time !== "number") return;
    await  new Promise((resolve) => setTimeout(resolve, time));
    console.log('ko')
  };
delay(3000);
