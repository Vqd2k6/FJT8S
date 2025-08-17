// Chúng ta sẽ học về       Arrow Function 

// This is Arrow Function ---- Anonymous Function 
(a, b) => {     // không tên và ko key word function 
    return a + b;     // ưu : ngắn gọn  || nhược : không gọi được     "(10,5) => sẽ không thực thi được"
}

// self-running function 

(function () {         // nó sẽ chạy ngay và luôn , không cần đợi gọi 
    console.log("Hello mọi người");
})()

// Arrow function không thể gọi như bình thường nên ta phải tạo biến để hứng giá trị của function 

const value = (a, b) => {
    return a + b;
}

console.log(value(2, 7))