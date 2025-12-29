
const templateFile = await fetch("component/card/card1/card1.html");

const template = await templateFile.text();

let Card1 = {}; 


Card1.format = function(r){
    let cards = "";
    for (let elt of r){
        let html = template;
        html = html.replace('{{url}}', elt.photo);
        html = html.replace('{{h1}}', elt.h1);
        html = html.replace('{{prix}}', elt.cost);
        html = html.replace('{{text}}', elt.text);
        html = html.replace('{{btn}}', elt.btn);
        

        cards += html;
    }
    
    
    
    
    
    
    
    
    
    return cards;
    }
    
    
    






export {Card1};
