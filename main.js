/*
1, Kiểu dữ liệu nguyên thuỷ - Primitive Data
    - number 
    - string 
    - boolean 
    - undefined 
    - null 
    - symbol 
2, dữ liệu phức tạp - Complex Data
    - Function 
    - Object
    */


    // Number type 
    var a = 1 
    var b = 2.5 

    // String type 
    var fullName = "Vo Quang Dung"

    // Boolean type 
    var isSuccess = true

    // Undefined // tạo biến mà không gán giá trị 
    var vallue 

    // Null type // nothing
    var isNull = null // null giống như 1 key word

    // Symbol type
    var id1 = Symbol("id")  // symbol sinh ra 1 giá trị riêng biệt không thể trùng lặp , giống như primarykey trong mysql. Nó không thể xem mang giấ trị gì và không thể ghi overide. 

    // Function type 
    var myFunction = function() {   
        // ở đây là block code
        alert("Nó giống như 1 biến trung gian lưu trữ 1 block code nhưng không thực thi cho đến khi được gọi.")
    }

    //Object type // nó giống dictionary trong python , key và value 
    myObject = {
        name : "Dũng",
        age : 19 ,
        address : "Bình Định",
        myFunction : function()
        {
            console.log("Hello")
        }
    }

    // console.log(lable , var) nó có thể chứa 2 parameter , lable làm nhãn đẻ thể hiển giá trị của var 
    console.log("myObject", myObject)

    var myArray = ["a" , "b" , "c"]   // nó cx là object đấy , nhưng key là auto và đánh từ 0 tăng dần , tóm lại key là index á 
    console.log(myArray)

    // Ktra kiểu dữ liệu 
    console.log(typeof a )

    // điều thú vị là typeof null sẽ cho ra object 
    