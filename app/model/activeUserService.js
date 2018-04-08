
app.factory("activeUserService", function ($http, $log) {
    function User(plainUser) {
        this.email = plainUser.email;
        this.password = plainUser.password;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
    }

    var activeUser = null;

    // Loading all the users from JSON
    var users = [];
    $http.get('app/data/users.json').then(
        function (response) {
            for (var i = 0; i < response.data.length; i++) {
                users.push(new User(response.data[i]));
            }
            // Testing
            //alert(users[1].lname); 
        }, function (response) {
            $log.error("error in getting user json: " + JSON.stringify(response));
    });


    
    



    return {
        User: User
    }
})