function kiemTraDangKyblog() {
    var hoTen = document.getElementById('usename').value;
    var email = document.getElementById('mail').value;
    var binhluan = document.getElementById('comment').value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (hoTen === '' || email === '' || binhluan === '') {
        alert('Vui lòng điền đủ thông tin đăng ký trước khi gửi.');
        return false;
    } else if (!emailPattern.test(email)) {
        alert('Email không hợp lệ. Vui lòng nhập địa chỉ email đúng.');
        return false;
    } else {
        // Gửi thông tin đăng ký đến server hoặc xử lý theo nhu cầu của bạn
        alert('Thông tin đăng ký đã được gửi thành công!');  
    }
}


