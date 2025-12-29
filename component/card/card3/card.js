
const templateFile = await fetch("component/card/card3/card3.html");

const template = await templateFile.text();

let Card3 = {}; 


Card3.format = function(r){
    let html = template;
    html = html.replace('{{title1}}', r.title1);
    html = html.replace('{{title2}}', r.title2);
    html = html.replace('{{button}}', r.button);
    
    return html;
}




Card3.render = function( where, what ){
   let element = document.querySelector(where);
   let card="";
   for (let info of what){
    card = card + Card3.format(info);
    
   }
   element.innerHTML=card;
}


export {Card3};
