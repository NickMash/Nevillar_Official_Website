import "./styles/style.scss";
import {music} from "./js/dynamicElements";
import {homepage} from "./js/dynamicElements";
import {biography} from "./js/dynamicElements";
import {video} from "./js/dynamicElements";
import {contact} from "./js/dynamicElements";
import {footer} from "./js/dynamicElements";

let menuItems = document.querySelectorAll('.nav_menu_item');
let navigationContainer = document.getElementById('navigation__container');
let dynamicContent = document.querySelector('.dynamic_content');

let deleteNavUnderline = () => {
    menuItems.forEach(function(item){
        item.classList.remove('toggle_underline');
        item.classList.add('nav_hover');
    });
};

let clearAll = () => {
    dynamicContent.innerHTML = ``;
};

dynamicContent.innerHTML += homepage;
dynamicContent.innerHTML += footer

navigationContainer.addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll(0,0);
    if (e.target.classList.contains('nav_menu_item')) {
        clearAll();
        deleteNavUnderline();
        e.target.classList.add('toggle_underline');
        e.target.classList.remove('nav_hover');
    }

    if(e.target.classList.contains('homepage')) {
        dynamicContent.innerHTML += homepage;
        dynamicContent.innerHTML += footer
    }

    if(e.target.classList.contains('music')) {
        dynamicContent.innerHTML += music;
        dynamicContent.innerHTML += footer
    }

    if(e.target.classList.contains('biography')) {
        dynamicContent.innerHTML += biography;
        dynamicContent.innerHTML += footer
    }

    if(e.target.classList.contains('video')) {
        dynamicContent.innerHTML += video;
        dynamicContent.innerHTML += footer
    }

    if(e.target.classList.contains('contact')) {
        dynamicContent.innerHTML += contact;
        dynamicContent.innerHTML += footer
    }
});

