// Có 2 cách tạo chuỗi
// let string1 = "Quang Dung"      // nên ưu tiên
// let string2 = new string("Quang Dung")      // typeof của nó là object vì nó khởi tạo 1 đối tượng mới thông qua 'new'

//1, Kiểm tra độ dài chuỗi 
// console.log(string1.length)    // sẽ in ra độ dài của string 1 là 9

// // Template string 
// console.log(`${string1} chính là ${string2}`)     // string 1 và 2 sẽ được convert sang string luôn.


// 2, Find string 
// let str = "ABCDEFGHABCDEFGH"
// console.log(str.indexOf("ABC"))         // trả về vị trí đầu tiên nó tìm thấy param mà mình truyền vào
// console.log(str.search("ABC"))          // tương tự nhưng nó không hỗ trợ para số 2 mà nó có hỗ trợ REGEX
// console.log(str.indexOf("ABC", 5))      // tìm param 1 từ vị trí số param 2 trong chỗi trở đi 
// console.log(str.lastIndexOf("ABC"))     // tìm vị trí cuối cùng mà param xuất hiện 
// console.log(str.lastIndexOf("GH", 8))   // 6 --- đối với lastIndexOf thì param 2 là độ dài tối đa mà method cần kiểm tra 

// 3, Cut string 

// let str = "ABCDEFGH"
// console.log(str.slice(0,1))   // bắt đầu từ 0 , kết thúc 1 
// console.log(str.slice(1))    // bắt đầu từ 1 cho đến hết 
// console.log(str.slice(-3))    // cut ngược 

// // 4, replace 
// let str = "ABACDAEFBGH"
// console.log(str.replace("A", "-"))   // ở đây nó chỉ thay thế được vị trí thứ nhất 
// console.log(str.replace(/A/g, "-"))   // chúng ta đang sử dụng REGEX thay thế tất cả các "A" trong string


// 5,  Convert to Upper , Lower case           // không phải là in-place function 
// let str = "ABaCDAeFBgH"
// console.log(str.toUpperCase())      
// console.log(str)
// console.log(str.toLowerCase())
// console.log(str)

// 6, Trim     //  Loại bỏ khoảng trắng dư ở 2 đầu 
// let str = "    ABaCDAeFBgH    "
// console.log(str.trim())             // không phải là in-place function
// console.log(str)

// 7, Split()     
// let numbers = "1,2,3,4,5,6"

// console.log(numbers.split(""))                // không phải là in-place function
// console.log(numbers)

// console.log(numbers.split(","))             // argu chính là chỉ định đâu sẽ là dấu hiệu cut 
// console.log(numbers)

// 8, Get character by Index 
// const str = "12345"
// console.log(str[1])
// console.log(str[100])           // return undefined 
// console.log(str.charAt(1))
// console.log(str.charAt(100))   // return ""

