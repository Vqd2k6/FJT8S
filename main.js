var fullName = "Võ Quang Dũng"
// 1, alter() dùng để tạo 1 của số pop-up thông báo
// alert(fullName)

// // 2, Hàm console. , console là 1 func với nhiều method khác nhau
// console.log(fullName)   // hiển thị 1 dòng
// console.warn(fullName)  // cảnh báo !
// console.error(fullName) // cảnh báo x error

// 3, confirm() dùng để tạo 1 của số pop-up yêu cầu xác nhận 1 cái gì đó. Cần xử lý input từ người dùng.
// confirm("Bạn có chắc muốn học JavaScript không ?")

// 4, prompt() dùng để tạo 1 của số pop-up yêu cầu nhập 1 massage gì đó. Cần xử lý input từ người dùng.
// prompt("Bạn có chắc muốn học JavaScript không ?")

//5, setTimeout( parameter1 , parameter2 ) p1 là 1 function , p2 là thời gian mà chúng ta mong muốn. Sau p2 thời gian thì cửa sổ pop-up sẽ hiện lên, đơn vị p2 là ms , 1000ms = 1s
// setTimeout(function() {
//     // nơi đây để bạn set-up 
//     alert("Đây là 1 setTimeout !")
// }, 1500)

//5, setInterval( parameter1 , parameter2 ) p1 là 1 function , p2 là thời gian mà chúng ta mong muốn. Cứ mỗi p2 thời gian thì các dòng lệnh trong p1 sẽ được thực thi , đơn vị p2 là ms , 1000ms = 1s
// setInterval(function() {
//     // nơi đây để bạn set-up 
//     console.log("Đây là 1 setTimeout !")   // lặp đi lặp lại mãi
// }, 1500)