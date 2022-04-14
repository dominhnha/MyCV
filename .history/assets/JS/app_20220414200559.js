window.onscroll = function()
{
    myFuction();
}
function myFuction(){
    var navbar = document.getElementById("myNavbar");
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop >100){
        navbar.style.backgroundColor = "background-color: rgba(226, 220, 220, 0.9)";
        
    }
}