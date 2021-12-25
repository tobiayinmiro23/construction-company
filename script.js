
// code for the hamburger menu
var menu=document.querySelectorAll('.hamburger-menu')[0];
var navigation=document.querySelectorAll('ul')[0];
var all=document.getElementById('main')[0];
var button=document.querySelectorAll('button')
var div=document.querySelectorAll('.test')[0]
var body=document.querySelectorAll('body')[0]

// function for the hamburger menu
menu.addEventListener('click',function(){
    navigation.classList.toggle('menu')
});

function dissapear(){
    navigation.classList.remove('menu')
}