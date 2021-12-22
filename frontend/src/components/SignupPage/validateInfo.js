export default function validateInfo(values) {
  let errors = {};

  if (!values.name) {
    errors.name = 'Hãy nhập Họ và tên';
  }  
  if (!values.username) {
    errors.username = 'Hãy nhập Tên đăng nhập';
  }
  if (!values.username.trim()) {
    errors.username = 'Hãy nhập Tên đăng nhập';
  }
  if (!/^[A-Za-z]+/.test(values.name.trim())) {
    errors.username = 'Tên đăng nhập không hợp lệ';
  }

  if (!values.email) {
    errors.email = 'Hãy nhập Email';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email không hợp lệ';
  }
  if (!values.password) {
    errors.password = 'Hãy nhập Mật khẩu';
  } else if (values.password.length < 6) {
    errors.password = 'Mật khẩu cần tối thiểu 6 ký tự';
  }

  if (!values.password2) {
    errors.password2 = 'Hãy nhập lại Mật khẩu';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Bạn đã nhập sai Mật khẩu';
  }
  return errors;
}
