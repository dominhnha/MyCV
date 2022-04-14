window.onscroll = function()
{
    myFuction();
}
function myFuction(){
    let navbar = document.getElementById("myNavbar");
    let card_list = document.getElementsByClassName("header__list-link");
    console.log(card_list.length);
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop >100){
        for(let i = 0; i < card_list.length; i++){
            card_list.style.color = "black";
        }
        navbar.className += 'header__list BGR-white';

    }else{
        navbar.className += 'header__list BGR-black';
    }
}