var GlobalVar = module.exports = {
    isLogin: false,
    changeLogin: function(){
        this.isLogin = !this.isLogin;
    }, 
    user: {},
    setUser: function(data){
        this.user = data;
    },
    optionSelect : {
        subject: ['Toán', 'Lý', 'Hóa', 'Sinh', 'Văn', 'Sử', 'Địa', 'Anh Văn', 'KHTN', 'KHXH'],
        grade: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        study_form: ['ONLINE','Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12', 'Bình Chánh', 'Bình Tân', 'Bình Thạnh', 'Cần Giờ', 'Củ Chi', 'Gò Vấp', 'Hóc Môn', 'Nhà Bè', 'Phú Nhuận', 'Tân Bình', 'Tân Phú', 'Thủ Đức'],
        lesson: [1, 2, 3, 4, 5, 6, 7],
        time: ['1h', '1.5h', '2h', '2.5h', '3h', '3.5h', '4h'],
        gender: ['Nam', 'Nữ', 'Khác'],
        literacy: ['Sinh viên', 'Giáo viên']
    }

}
