export default function validateInfo(values) {
  let errors = {isError: false};
  if (!values.name) {
    errors.name = 'Hãy nhập Họ và tên';
    alert("Hãy nhập Họ và tên");
    errors.isError = true;
  }  
  else if (!values.gender) {
    errors.gender = 'Hãy chọn giới tính';
    alert("Hãy chọn giới tính");
     errors.isError = true;
  }
  else if (!values.birthday) {
    errors.birthday = 'Hãy chọn ngày sinh';
    alert("Hãy chọn ngày sinh");
     errors.isError = true;
  }
  else if (!values.username) {
    errors.username = 'Hãy nhập Tên đăng nhập';
    alert("Hãy nhập Tên đăng nhập");
     errors.isError = true;
  }
  /*else if (!values.username.trim()) {
    errors.username = 'Hãy nhập Tên đăng nhập';
     errors.isError = true;
  }*/
  else if (!/^[A-Za-z]+/.test(values.username.trim())) {
    errors.username = 'Tên đăng nhập không hợp lệ';
    alert("Tên đăng nhập không hợp lệ");
     errors.isError = true;
  }

  else if (!values.email) {
    errors.email = 'Hãy nhập Email';
    alert("Hãy nhập Email");
     errors.isError = true;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email không hợp lệ';
    alert("Email không hợp lệ");
     errors.isError = true;
  }
  else if (!values.password) {
    errors.password = 'Hãy nhập Mật khẩu';
    alert("Hãy nhập Mật khẩu");
     errors.isError = true;
  } else if (values.password.length < 6) {
    errors.password = 'Mật khẩu cần tối thiểu 6 ký tự';
    alert("Mật khẩu cần tối thiểu 6 ký tự");
     errors.isError = true;
  }

  else if (!values.password2) {
    errors.password2 = 'Hãy nhập lại Mật khẩu';
    alert("Hãy nhập lại Mật khẩu");
     errors.isError = true;
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Bạn đã nhập sai Mật khẩu';
    alert("Bạn đã nhập sai Mật khẩu");
     errors.isError = true;
  }
  return errors;
}
