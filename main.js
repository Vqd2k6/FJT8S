// định nghĩa và sử dụng rất giống python, chỉ khác ở 1 số đặc điểm ở phía sau: 
function test(parameter1, parameter2) {
    console.log(parameter1)
    console.log(parameter2)
}

// 1. nó sẽ tự lấp đầy những parameter trống bằng undefined.

test("hello", 2)

test("hallo")
// nếu bạn định nghĩa có 2 para mà truyền 3 argu thì nó chỉ lấy 2 thằng argu đầu mà thôi 

// 2. Arguments , nếu func của bạn định nghĩa không có para thì khi bạn sử dụng nó , bạn vô tình truyền 1 or các argu bất kì vào , thì các argu sẽ được convert sang 'arguments'.
function argu() {
    console.log(arguments)
}
argu(1, 2, 3, 4)
argu()

// 3. for in arguments : 
function forArgu() {
    var string = ""
    for (var argu of arguments)    // lấy ví dụ về ' for i in range(n) ' trong python , thì argu == i , arguments == range()
    {
        console.log(argu)
        string += argu + '-'
    }
    console.log(string)
}

forArgu(1, 2, 3)



//               Returrn 

/* giống như trong python: 
    - return ở đâu là xong ở đó 
    - ở đây nếu không return sẽ trả về 'undefined'
 */

//       Function plus 

//1,  khi 2 hay nhiều func cùng tên thì func cuối cùng là cái sẽ được thực thi vì nó overide các func ở trước

function temp () {
    print()
}
temp()    // thứ tự định nghĩa không quan trọng , chỉ có xuất hiện trong file sẽ truy cập được. 

function print () {
    console.log("massage1")
}

function print () {
    console.log("massage2")   // của sổ console bây giờ sẽ cho ra 'massage2'
}
print()

/*2, chúng ta có thể định nghĩa var , func trong 1 function: 
    - Lưu ý: Vì tính private nên cả var và func chỉ có thể hoạt động nội bộ trong scope của function chứa nó mà thôi.
*/



