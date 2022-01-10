export default function validateInfo(values) {
  let errors = {isError: false};

  if (values.user_type==="student") {
    // Name
    if (!values.name.trim()){
      errors.name = 'Hãy nhập tên của bạn';
      alert("Hãy nhập tên của bạn");
      errors.isError = true;
    }
    // Address
    else if (!values.address.trim()){
      errors.name = 'Hãy nhập địa chỉ của bạn';
      alert("Hãy nhập địa chỉ của bạn");
      errors.isError = true;
    }
    // Email
    else if (!values.email.trim()){
      errors.name = 'Hãy nhập Tên đăng nhập';
      alert("Hãy nhập Tên đăng nhập");
      errors.isError = true;
    }
  }  
  
  return errors;
}