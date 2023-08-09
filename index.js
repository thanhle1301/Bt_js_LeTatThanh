//BAI 1 ********************************************
function hienThiThongTin() {
  //input
  var input = document.getElementById("giaTriNhap");
  var input0 = document.getElementById("giaTriNhap0");
  //process
  var output = '';
  var ngayLuong = input0;
  var tongLuong = input.value * ngayLuong.value;
  output = tongLuong;

  //output
  var tagSpanKetQua = document.getElementById('ketQuaHienThi');
  tagSpanKetQua.innerHTML = output.toLocaleString() + " VND";
}

//BAI 2 ********************************************
function hienThiThongTin2() {
  //input
  var input1 = document.getElementById("giaTriNhap1");
  var input2 = document.getElementById("giaTriNhap2");
  var input3 = document.getElementById("giaTriNhap3");
  var input4 = document.getElementById("giaTriNhap4");
  var input5 = document.getElementById("giaTriNhap5");

  //process
  var trungBinh = (+input1.value + +input2.value + +input3.value + +input4.value + +input5.value) / 5;
  

  //output
  var tagSpanKetQua2 = document.getElementById('ketQuaHienThi2');
  tagSpanKetQua2.innerHTML = trungBinh;
}
//BAI 3 ********************************************
function hienThiThongTin3() {
  //input
  var input6 = document.getElementById('tienUsd');
  var usd = 23500 ;

  //prcess
  var tienQuyDoi = input6.value * usd;

  //output
  var tagSpanKetQua3 = document.getElementById('ketQuaHienThi3');
  tagSpanKetQua3.innerHTML = tienQuyDoi.toLocaleString() + ' VND';
}

// BAI 4 ********************************************
function hienThiThongTin4() {
  //input
  var input7 = document.getElementById('chieuDai');
  var input8 = document.getElementById('chieuRong');

  //process
  var tinhChuVi = (+chieuDai.value + +chieuRong.value) * 2;
  var tinhDienTich = chieuDai.value * chieuRong.value;

  //output
  var tagSpanKetQua4 = document.getElementById('ketQuaHienThi4');
  tagSpanKetQua4.innerHTML = tinhChuVi + ' DV'

  var tagSpanKetQua5 = document.getElementById('ketQuaHienThi5');
  tagSpanKetQua5.innerHTML = tinhDienTich + ' DV'
}

// BAI 5 ********************************************
function hienThiThongTin5() {
  //input
  var input9 = document.getElementById('giaTriNhap6');

  //process
  var soHangChuc = Math.floor(input9.value / 10);
  var soHangDV = input9.value % 10;
  var tong2KySo = soHangChuc + soHangDV ;

  //output
  var tagSpanKetQua6 = document.getElementById('ketQuaHienThi6');
  tagSpanKetQua6.innerHTML = tong2KySo ;
}