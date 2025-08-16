result = "A" || "B" || "C" ; 
console.log(result) ; // chỉ cần "A" không false thì nó sẽ lấy A 

result = "A" && "B" && "C" ; // A không false , nhảy qua "B" mà nó cx không false nên nhảy qua "C" , và vì "C" không false và không còn gì ở phía sau nữa nên sẽ lấy C làm value
console.log(result) ; 