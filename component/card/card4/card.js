
const templateFile = await fetch("/component/card/card4/card4.html");

const template = await templateFile.text();

let Card4 = {}; 


Card4.format = function(r){
    
    let card="";
    for (let info of r){
    let html = template;
    
  
    html = html.replace('{{title1}}', info.title1);
    html = html.replace('{{title2}}', info.title2);
    html = html.replace('{{button}}', info.button);
    html = html.replace('{{svg}}',info.svg);
    html = html.replace("{{hr}}", info.hr);
    card += html;
    }
    return card;
}






export {Card4};
