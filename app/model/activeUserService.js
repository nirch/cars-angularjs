
app.factory("activeUserService", function() {
    function User(plainUser) {
        this.email = plainUser.email;
        this.password = plainUser.password;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
    }

    return {
        User: User
    }
})