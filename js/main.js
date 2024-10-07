let mobile_button = document.getElementById("menu_button");
let main_menu = document.getElementById("main_menu");

mobile_button.addEventListener("click", ()=>{
    main_menu.classList.toggle('hidden'); 
})