const mongoClient = require('../util/database')
const sequelize = require('sequelize')
class BaiDang{
    constructor(ID, ID_hv, thoi_gian_dang, tieu_de, noi_dung, quan_huyen, mon_hoc, lop, luong, hinh_thuc, gioi_tinh_gs, trinh_do_gs, sbt, sgb){
        this.ID = ID;
        this.ID_hv = ID_hv;
        this.thoi_gian_dang = thoi_gian_dang;
        this.tieu_de = tieu_de;
        this.noi_dung = noi_dung;
        this.quan_huyen = quan_huyen;
        this.mon_hoc = mon_hoc;
        this.lop = lop;
        this.luong = luong;
        this.hinh_thuc = hinh_thuc;
        this.gioi_tinh_gs = gioi_tinh_gs;
        this.trinh_do_gs = trinh_do_gs;
        this.sbt = sbt;
        this.sgb = sgb;
    }
    save(){

    }
}

const BaiDang = sequelize.define('bai_dang', {
    id: {
        type: S
    }
})