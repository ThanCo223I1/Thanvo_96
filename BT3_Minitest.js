function Enter(){
    let firstname = document.getElementById(name).value;
    let lastname = document.getElementById(number).value;
    if (firstname===name&&lastname===number){
        alert("Đăng Nhập Thành Công");
    }
    else {
        alert("Đăng Nhập Thất Bại");
    }
}