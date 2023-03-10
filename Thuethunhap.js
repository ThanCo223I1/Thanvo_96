function Enter(){
    let thunhap = +document.getElementById("ThuNhap").value;
    let thuNhap1= thunhap*5/100;
    let thuNhap2= thunhap*10/100-0.25;
    let thuNhap3= thunhap*15/100-0.75;
    let thuNhap4= thunhap*20/100-1.65;
    let thuNhap5= thunhap*25/100-3.25;
    let thuNhap6= thunhap*30/100-5.85;
    let thuNhap7= thunhap*35/100-9.85;
    if (thunhap > 80){
        document.getElementById("ketqua").innerHTML = "Thuế cá nhân =" + thuNhap7 + "Triệu";
    }
    else if(52 < thunhap <= 80){
        document.getElementById("ketqua").innerHTML = "Thuế cá nhân =" + thuNhap6 + "Triệu";
    }
    else if (32 < thunhap <= 52){
        document.getElementById("ketqua").innerHTML = "Thuế cá nhân =" + thuNhap5 + "Triệu";
    }
    else if (18 < thunhap <= 32){
        document.getElementById("ketqua").innerHTML = "Thuế cá nhân =" + thuNhap4 + "Triệu";
    }
    else if (10 < thunhap <= 18){
        document.getElementById("ketqua").innerHTML = "Thuế cá nhân =" + thuNhap3 + "Triệu";
    }
    else if (5< thunhap <= 10){
        document.getElementById("ketqua").innerHTML = "Thuế cá nhân =" + thuNhap2 + "Triệu";
    }
    else{
        document.getElementById("ketqua").innerHTML = "Thuế cá nhân =" + thuNhap1 + "Triệu";
    }
}
