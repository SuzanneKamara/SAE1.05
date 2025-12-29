const templateFile = await fetch("/component/Testimonial/06L1/template.html");
const template = await templateFile.text();


const templateFile2 = await fetch("/component/Testimonial/06L1/testimonial.html");
const template2 = await templateFile2.text();



let Testimonial = {}; 


Testimonial.format = function(obj){

    let html = template;
    
    let testimonial = "";
    for (let elt of obj){
        let content = template2;
        content = content.replace('{{img}}', elt.image);
        content = content.replace('{{text}}', elt.text);
        content = content.replace('{{name}}', elt.name);
        
        testimonial += content;
    }
    html = html.replace('{{content}}', testimonial);
    return html;
}

Testimonial.render = function(where, what ){
    let element  = document.querySelector(where);
    element.innerHTML = Testimonial.format(what);
}





export {Testimonial};
