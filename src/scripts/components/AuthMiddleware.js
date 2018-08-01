
const AuthMiddleware ={
    isAuthenticated: false,
    login(){
        this.isAuthenticated = true;
        console.log('login');
    },
    logout(){
        this.isAuthenticated = false;
        console.log('logout');
    }
};

export default AuthMiddleware