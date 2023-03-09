function Login() {
    let username = document.getElementById("Admin").value;
    let password = document.getElementById("pass").value;
    if( username === "admin" && password === "123"){
        alert("dang nhap admin");
    }else if (username === "user" && password === "123"){
        alert("dang nhap user");
    }
    else{
       alert("dang nhap tai khoan khong ton tai");
    }

}
