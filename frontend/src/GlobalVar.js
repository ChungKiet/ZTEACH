var GlobalVar = module.exports = {
    isLogin: false,
    changeLogin: function(){
        this.isLogin = !this.isLogin;
    }, 
    user: {},
    setUser: function(data){
        this.user = data;
    }
}
