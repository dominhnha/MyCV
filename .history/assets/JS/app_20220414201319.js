window.onscroll = function()
{
    myFuction();
}
function myFuction(){
    let navbar = document.getElementById("myNavbar");
    let card_list = document.getElementsByClassName("header__list-link");
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop >100){
        navbar.className += 'header__list BGR-white';

    }else{
        navbar.className += 'header__list BGR-black';
    }
}