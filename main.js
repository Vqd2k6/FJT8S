// =========== Các loại function ========

// 1, Declaration function  

function decFunc () // nó giống như func bình thường thôi 
{
    // Lưu ý là phải đặt tên , nếu không thì nó không phải là 1 declaration function 
}

// 2, Expression function 
//2,1 
var value = function() {}    // nó sẽ được gán '=' cho 1 biến nào đó 

//2,2 dạng callback 

setTimeout(function (){

}, 2000)

// 2,3 dạng object 

var myObject = {
    keyFunc : function () {}
}   

// 2,4 : Bạn có thể đặt tên để cho dễ hiểu 

var value = function val () {} 


// ======== Khái niệm về hosting , sự khác biệt giữa declaration và expresstion function 

print() // Declaration bạn có thể sử dụng nó trên phần định nghĩa 
function print() {
    console.log( "Declaration !!!!!!")
}

// còn với Expresstion thì bạn không thể , nó sẽ báo lỗi

call()  // sẽ có thông báo lỗi ở đây 
var call = function callPrint()
{
    console.log("Expresstion!!!!!!")
}