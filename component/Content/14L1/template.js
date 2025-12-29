const templateFile = await fetch('/component/Content/14L1/template.html');
const template = await templateFile.text();

let Content = {};

Content.format = function (obj) {
    let html = template;
    html = html.replace('{{bgImage}}', obj.bgImage);
    html = html.replace('{{h1}}', obj.h1);
    html = html.replace('{{text}}', obj.text);
    return html;
};

Content.render = function (where, what) {
    let element = document.querySelector(where);
    let contnt = "";
    for (let info of what) {
        contnt = contnt + Content.format(info);
    }
    element.innerHTML = contnt;
}

export { Content };