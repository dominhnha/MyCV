let checkevent = false;
window.onscroll = function()
{
    myFuction();
    return;
}
function myFuction(){
    let navbar = document.getElementById("myNavbar");
    let card_list = document.getElementsByClassName("header__list-link");
    console.log(card_list.length);
    
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop >100){

        if(checkevent = false){
            navbar.className = "";
            navbar.className += 'header__list BGR-white animate-top';
            for(let i = 0; i < card_list.length; i++){
                card_list[i].className =`header__list-link cl-black`;
            }
            checkevent = true;
        }
        
        
    }else{
        navbar.className = "";
        navbar.className += 'header__list BGR-black';
        for(let i = 0; i < card_list.length; i++){
            card_list[i].className =`header__list-link cl-while`;
        }
    }
    
}