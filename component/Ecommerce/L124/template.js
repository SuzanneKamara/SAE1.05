const templateFile = await fetch("/component/Ecommerce/L124/template.html");    
const template = await templateFile.text(); 
import { Card1 } from "/component/card/card1/card.js";
import { Datacard1 } from "/component/card/card1/Data.js";

let Ecommerce = {};

Ecommerce.format = function(obj){
    let html = template;
    html = html.replace('{{image}}', obj.image);
    html = html.replace('{{title}}', obj.title);
    html = html.replace('{{text}}', obj.text);
    let card = Card1.format(Datacard1);
    
    html = html.replace('{{card}}', card);
    return html;
}


Ecommerce.render = function(where, what ){
    let  element  = document.querySelector(where);
    let ecomm = "";
    for ( let elt of what){
        ecomm += Ecommerce.format(elt);
    }
    element.innerHTML = ecomm;
}   
export {Ecommerce};