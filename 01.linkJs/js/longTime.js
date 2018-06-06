// 十分耗费性能的js
function fbnq(n){
    // n==1 n==2 返回1
    if(n==1||n==2){
        return 1;
    }
    // 其他情况 返回 n-1 +n-2
    return fbnq(n-1)+fbnq(n-2);
}
var result = fbnq(44);
console.log(result);