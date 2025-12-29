
const templateFile = await fetch("/component/Hero/07L1/template.html");
const template = await templateFile.text();



let Hero = {}; 


Hero.format = function(obj){
    let html = template;
    
    html = html.replace('{{title}}', obj.title);
    html = html.replace('{{desc}}', obj.desc);
    html = html.replace('{{btn1}}', obj.btn1);
    html = html.replace('{{btnlink1}}', obj.link1);
    html = html.replace('{{btn2}}',obj.btn2);
    html = html.replace('{{btnlink2}}', obj.link2);
    html = html.replace('{{image}}', obj.image);
    html = html.replace('{{alt}}', obj.alt);
    return html;
}






export {Hero};
