    if (getCookie("first") != "true") {
        document.cookie = "first=true";
        location.href="htps://ajlstick.github.io/home.html";    
    }


    function getCookie(first) {
        var name = first + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') {
                c = c.substring(1);
            }
            if (c.indexOf(first) == 0) {
                return c.substring(first.length,c.length);
            }
        }
        return "";
    }   
