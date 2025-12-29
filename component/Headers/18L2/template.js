const templateFile = await fetch("/component/Headers/18L2/template.html");
const template = await templateFile.text();

const templateFile2 = await fetch("/component/Headers/18L2/nav.html");
const template2 = await templateFile2.text();

let Header2 = {};

Header2.format = function(obj){
    let html = template;
    let nav = "";
    for (let elt of obj.items){
        let htmlnav = template2;
        htmlnav = htmlnav.replace("{{item}}", elt.item);
        htmlnav = htmlnav.replace("{{class}}",elt.class);
        nav += htmlnav;
    }
    html = html.replace("{{items}}", nav);
    
    html = html.replace("{{name}}", obj.name);
    html = html.replace("{{btn}}", obj.btn);
    html = html.replace("{{title}}", obj.title);
    html = html.replace("{{desc}}", obj.desc);
    html = html.replace("{{btn2}}", obj.btn2);
    html = html.replace("{{formtitle}}", obj.formtitle);
    html = html.replace("{{emailplaceholder}}", obj.emailplaceholder);
    html = html.replace("{{passwdplaceholder}}", obj.passwdplaceholder);
    html = html.replace("{{checkboxdesc}}", obj.checkboxdesc);
    html = html.replace("{{btn3}}", obj.btn3);
    html = html.replace("{{btn4}}", obj.btn4);
    html = html.replace("{{signin}}", obj.signin);
    html = html.replace("{{signinlink}}", obj.signinlink);

    return html;
}


Header2.render = function(where, what ){
    let element  = document.querySelector(where);
    let headers = "";
    for ( let elt of what){
        headers += Header2.format(elt);
    }
    element.innerHTML = headers;
}

export {Header2};