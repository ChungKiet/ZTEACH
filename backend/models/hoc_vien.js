const dsHocVien = []
class HocVien{
    constructor(ID, ho_ten, gioi_tinh, ngay_sinh, dia_chi, email, sdt){
        this.ID = ID;
        this.ho_ten = ho_ten;
        this.gioi_tinh = gioi_tinh;
        this.ngay_sinh = ngay_sinh;
        this.dia_chi = dia_chi;
        this.email = email;
        this.sdt = sdt;
    }
    save(){
        dsHocVien.push(this);
    }
    static fetchAll(){
        return dsHocVien;
    }
}
