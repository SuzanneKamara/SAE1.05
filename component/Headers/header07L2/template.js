// header
const templateFile = await fetch("/component/Headers/header07L2/template.html");
const template = await templateFile.text();
// nav
import { Navigation } from "/component/Navigation/07L2/nav.js"; 
import { DataNavigation } from "/component/Navigation/07L2/Data.js"; 
let nav = Navigation.format(DataNavigation);
// hero
import { Hero } from "/component/Hero/07L1/template.js";
import { Data } from "/component/Hero/07L1/Data.js";

let hero = Hero.format(Data);

let Header = {};
Header.format = function(){
    let html = template;
    html = html.replace("{{nav}}", nav);
    html = html.replace("{{hero}}", hero);
    return html;
}
Header.render = function(where){
    let element = document.querySelector(where);
    element.innerHTML = Header.format();
}
export {Header};