const templateFile = await fetch("/component/CallToAction/12L1/template.html");
const template = await templateFile.text();

import { Card4 } from "/component/card/card4/card.js";
import { Datacard4 } from "/component/card/card4/Data.js"
let card = Card4.format(Datacard4);

let Cta = {};

Cta.format = function(obj){
    let html  = template;
    html = html.replace('{{title}}', obj.title);
    html = html.replace('{{text}}', obj.text);
    html = html.replace('{{card}}', card);
    return html;
}

Cta.render = function(where, what){
    let element = document.querySelector(where);
    let callta = "";
    for (let elt of what){
        callta = callta + Cta.format(elt);
        
    }
    
    
        element.innerHTML = callta; 
    
    
}

export{Cta};