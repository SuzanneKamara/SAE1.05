const templateFile = await fetch("/component/Team/template.html");
const template = await templateFile.text();

const templateFile2 = await fetch("/component/Team/members.html");
const template2 = await templateFile2.text();

let Team = {};

Team.format = function(obj){
    let html = template;
    let members = ""
    html = html.replace('{{title}}', obj.title);
    for (let elt of obj.members){
        let memb = template2;
        memb = memb.replace("{{image}}",elt.image);
        memb = memb.replace("{{name}}",elt.name);
        memb = memb.replace("{{desc}}",elt.desc);
        members += memb;

    }
    html = html.replace("{{members}}",members);
    return html;
}

Team.render = function(where, what ){
    let element  = document.querySelector(where);
    let team = "";
    for ( let elt of what){
        team += Team.format(elt);
    }
    element.innerHTML = team;
}

export {Team};
