const templateFile = await fetch("./component/Forms/07L1/template.html");
const template = await templateFile.text();

let Form = {};

Form.format = function(obj){
    let html = template;
    html = html.replace('{{title}}', obj.title);
    html = html.replace('{{desc}}', obj.desc);
    html = html.replace('{{formPlaceholder}}', obj.formPlaceholder);
    html = html.replace('{{button}}', obj.button);
    html = html.replace('{{text}}', obj.text);
    return html;
}

Form.render = function(where, what ){
    let element  = document.querySelector(where);
    let forms = "";
    for ( let elt of what){
        forms += Form.format(elt);
    }
    element.innerHTML = forms;
}

export {Form};
