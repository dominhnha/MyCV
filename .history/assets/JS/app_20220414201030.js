window.onscroll = function()
{
    myFuction();
}
function myFuction(){
    var navbar = document.getElementById("myNavbar");
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop >100){
        navbar.className += 'header__list BGR-white';

    }else{
        navbar.style.backgroundColor = "background-color: rgba(0, 0, 0, 0.9);"
    }
}