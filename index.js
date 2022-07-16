// input
document.getElementById("btnTinhLuong").onclick = function () {
    const luongTheoNgay = 100000;
    // input
    var soNgayLam = document.getElementById("soNgayLam").value;
  
    // process
  
    var tongLuong = soNgayLam * luongTheoNgay;
    console.log(tongLuong);
    // output
    document.getElementById("thongBaoTienLuong").innerHTML = tongLuong;
  };
  
  // bt2
  // input
  document.getElementById("btnTongThu").onclick = function () {
    var tenPhim = document.getElementById("tenPhim").value;
    var soVeNguoiLon = document.getElementById("soVeNguoiLon").value *1;
    var soVeTreEm = document.getElementById("soVeTreEm").value *1;
    var giaVeDaBanNguoiLon = document.getElementById("giaVeDaBanNguoiLon").value *1;
    var giaVeDaBanTreEm = document.getElementById("giaVeDaBanTreEm").value *1;
    var tuThien = document.getElementById("tuThien").value *1;
  
    // process
    var soVeDaBan = soVeNguoiLon + soVeTreEm;
    console.log(soVeDaBan);
    var doanhThu = soVeNguoiLon * giaVeDaBanNguoiLon + soVeTreEm * giaVeDaBanTreEm;
  console.log(doanhThu);
    // fomat
    var format = new Intl.NumberFormat("vn-VN");
  
    // output
    var showInfo ="";
    showInfo += "<p></p>"
    showInfo += "<p>ten phim:............" + tenPhim + "</p>";
    showInfo += "<p>so ve da ban:............" + soVeDaBan + "</p>";
    showInfo += "<p>doanh thu:............" + format.format(doanhThu) + "vnd</p>";
    showInfo += "<p>trich % tu thien:............" + format.format(tenPhim) + "%</p>"
    showInfo += "<p>tong tien tu thien:............" + format.format(tongThuTuThien) + "vnd</p>"
    showInfo += "<p>tong thu:............" + format.format(tongThu) + "<vnd/p>"
  
    document.getElementById("btnTongThu").innerHTML = showInfo;
  };
  
  // bt3
  
  // input
  
  document.getElementById("tinhDTvaChuViHCN").onclick = function () {
  var nhapCD = document.getElementById("nhapCD").value;
  var nhapCR = document.getElementById("nhapCR").value;
  
  // xly
  var dienTich = nhapCD * nhapCR
  console.log( dienTich);
  var chuVi = (nhapCD + nhapCR) * 2;
  // output 
  var showInfo = "";
  showInfo += "<p>Dien Tich:............" + dienTich + "</p>";
  showInfo += "<p>Chu Vi:............" + chuVi + "</p>";
  
  document.getElementById("tinhDTvaChuViHCN").innerHTML = showInfo;
  }
  