import "./styles/style.scss";
import "./styles/loginRegistrationForm.scss";
import {music} from "./js/dynamicElements";
import {homepage} from "./js/dynamicElements";
import {biography} from "./js/dynamicElements";
import {video} from "./js/dynamicElements";
import {contact} from "./js/dynamicElements";
import {footer} from "./js/dynamicElements";
import {loginForm} from "./js/dynamicElements";
import {registrationForm} from "./js/dynamicElements";
import {somebodySayYeahSpotifyPlayer} from "./js/dynamicElements";
import {destroyTheClubSpotifyPlayer} from "./js/dynamicElements";
import {fatBeatSpotifyPlayer} from "./js/dynamicElements";
import {oldschoolRaveSpotifyPlayer} from "./js/dynamicElements";
import {boomSpotifyPlayer} from "./js/dynamicElements";
import {getEmHighSpotifyPlayer} from "./js/dynamicElements";

const menuItems = document.querySelectorAll('.nav_menu_item');
const navigationContainer = document.getElementById('navigation__container');
const dynamicContent = document.querySelector('.dynamic_content');
const logo = document.querySelector('.logo');
const loginSignUpButton = document.querySelector('.login_sign_up_button');
const shadowBody = document.querySelector('.shadow_body');

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
dynamicContent.innerHTML += footer;

logo.addEventListener("click", () => {
    location.reload();
});

navigationContainer.addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll(0, 0);

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
        dynamicContent.innerHTML += footer;

        dynamicContent.addEventListener("mouseover", (e) => {
            console.log(e.target.firstElementChild.classList);
            if (e.target.classList.contains('music_box') || e.target.classList.contains('music_cover') || e.target.classList.contains('track_name') || e.target.classList.contains('play') || e.target.classList.contains('spotify_iframe')) {
                e.target.firstElementChild.classList.add('music_cover_hover');
            }
        });

        let somebodySayYeahPlayButton = document.querySelector('.play_somebody_say_yeah');
        let somebodySayYeahSpotifyIframe = document.querySelector('.somebody_say_yeah_spotify_iframe');
        somebodySayYeahPlayButton.addEventListener("click", () => {
            somebodySayYeahPlayButton.classList.add('switch_off');
            somebodySayYeahSpotifyIframe.classList.remove('switch_off');
            somebodySayYeahSpotifyIframe.innerHTML += somebodySayYeahSpotifyPlayer;
        });

        let destroyTheClubPlayButton = document.querySelector('.play_destroy_the_club');
        let destroyTheClubSpotifyIframe = document.querySelector('.destroy_the_club_spotify_iframe');
        destroyTheClubPlayButton.addEventListener("click", () => {
            destroyTheClubPlayButton.classList.add('switch_off');
            destroyTheClubSpotifyIframe.classList.remove('switch_off');
            destroyTheClubSpotifyIframe.innerHTML += destroyTheClubSpotifyPlayer;
        });

        let fatBeatPlayButton = document.querySelector('.play_fat_beat');
        let fatBeatSpotifyIframe = document.querySelector('.fat_beat_spotify_iframe');
        fatBeatPlayButton.addEventListener("click", () => {
            fatBeatPlayButton.classList.add('switch_off');
            fatBeatSpotifyIframe.classList.remove('switch_off');
            fatBeatSpotifyIframe.innerHTML += fatBeatSpotifyPlayer;
        });

        let oldschoolRavePlayButton = document.querySelector('.play_oldschool_rave');
        let oldschoolRaveSpotifyIframe = document.querySelector('.oldschool_rave_spotify_iframe');
        oldschoolRavePlayButton.addEventListener("click", () => {
            oldschoolRavePlayButton.classList.add('switch_off');
            oldschoolRaveSpotifyIframe.classList.remove('switch_off');
            oldschoolRaveSpotifyIframe.innerHTML += oldschoolRaveSpotifyPlayer;
        });

        let boomPlayButton = document.querySelector('.play_boom');
        let boomSpotifyIframe = document.querySelector('.boom_spotify_iframe');
        boomPlayButton.addEventListener("click", () => {
            boomPlayButton.classList.add('switch_off');
            boomSpotifyIframe.classList.remove('switch_off');
            boomSpotifyIframe.innerHTML += boomSpotifyPlayer;
        });

        let getEmHighPlayButton = document.querySelector('.play_get_em_high');
        let getEmHighSpotifyIframe = document.querySelector('.get_em_high_spotify_iframe');
        getEmHighPlayButton.addEventListener("click", () => {
            getEmHighPlayButton.classList.add('switch_off');
            getEmHighSpotifyIframe.classList.remove('switch_off');
            getEmHighSpotifyIframe.innerHTML += getEmHighSpotifyPlayer;
        });
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

loginSignUpButton.addEventListener("click", () => {
    shadowBody.insertAdjacentHTML('beforebegin', loginForm);
    shadowBody.insertAdjacentHTML('beforebegin', registrationForm);
    shadowBody.classList.remove('switch_off');

    let scrollWidth = window.innerWidth - document.documentElement.clientWidth;
    let navigationContainer = document.getElementById('navigation__container');
    let headerContainer = document.querySelector('.header__container');

    navigationContainer.style.cssText = "width: " + navigationContainer.offsetWidth + "px;";
    headerContainer.style.cssText = "width: " + headerContainer.offsetWidth + "px;";
    document.documentElement.style.cssText = "overflow-y: hidden; margin-right: " + scrollWidth + "px;";

    let goToRegisterFormButton = document.getElementById('login-form-register-button');
    let backToLoginButton = document.getElementById('register-form-back-to-login-button');
    let loginFormElem = document.querySelector('.login-form');
    let registrationFormElem = document.querySelector('.registration-form');

    goToRegisterFormButton.addEventListener("click", () => {
        loginFormElem.classList.add('switch_off');
        registrationFormElem.classList.remove('switch_off');
    });

    backToLoginButton.addEventListener("click", () => {
        loginFormElem.classList.remove('switch_off');
        registrationFormElem.classList.add('switch_off');
    });
});

shadowBody.addEventListener("click", () => {
    let loginFormHtml = document.querySelector('.login-form');
    let registrationFormElem = document.querySelector('.registration-form');
    let navigationContainer = document.getElementById('navigation__container');
    let headerContainer = document.querySelector('.header__container');

    navigationContainer.style.cssText = "width: 60%;";
    headerContainer.style.cssText = "width: 100%;";
    shadowBody.classList.add('switch_off');
    loginFormHtml.remove();
    registrationFormElem.remove();
    document.documentElement.style.cssText = "overflow-y: auto; margin-right: 0px;";
});