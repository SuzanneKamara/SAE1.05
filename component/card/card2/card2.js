
const templateFile = await fetch("component/card/card2/card2.html");

const template = await templateFile.text();

let Card2 = {}; 


Card2.format = function(r){
    let html = template;
    html = html.replace('{{url}}', r.photo);
    html = html.replace('{{title1}}', r.title1);
    html = html.replace('{{title2}}', r.title1);
    html = html.replace('{{button}}', r.button);
    
    return html;
}




Card2.render = function( where, what ){
   let element = document.querySelector(where);
   let card="";
   for (let info of what){
    card = card + Card2.format(info);
    
   }
   element.innerHTML=card;
}


export {Card2};
