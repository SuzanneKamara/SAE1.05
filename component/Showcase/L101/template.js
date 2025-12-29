const templateFile = await fetch("/component/Showcase/L101/template.html");
const template = await templateFile.text();

import { Card1 } from "/component/card/card1/card.js";
import { Datacard1_2 } from "/component/card/card1/Data.js";
let card = Card1.format(Datacard1_2);

let Showcase = {};

Showcase.format = function(){
    let html  = template;
    html = html.replace('{{card}}', card)
    return html;
}

Showcase.render = function(where, ){
    let element = document.querySelector(where);
    let showcase = Showcase.format();
   
    element.innerHTML = showcase;
}

export{Showcase};