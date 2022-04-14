let checkevent = 0;
window.onscroll = function()
{
    if(checkevent = 0){
        myFuction();
    }else{
        
    }
    
}
function myFuction(){
    let navbar = document.getElementById("myNavbar");
    let card_list = document.getElementsByClassName("header__list-link");
    console.log(card_list.length);
    navbar.className = "";
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop >100){
        navbar.className += 'header__list BGR-white animate-top';
        for(let i = 0; i < card_list.length; i++){
            card_list[i].className =`header__list-link cl-black`;
        }
        return;
    }else{
        navbar.className += 'header__list BGR-black';
        for(let i = 0; i < card_list.length; i++){
            card_list[i].className =`header__list-link cl-while`;
        }
    }
    
}