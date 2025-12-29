const templateFile = await fetch ("/component/Navigation/20L2/template.html");
const template = await templateFile.text();

const templateFile2 = await fetch ("/component/Navigation/20L2/nav.html");
const template2  = await  templateFile2.text();

const templateFile3 = await fetch ("/component/Navigation/20L2/dropdown.html");
const template3 = await templateFile3.text();

let Nav = {};

Nav.format = function(obj){
    let html1 = template;
    let nav = "" ; 
    let dropdown = "";
    html1 = html1.replace('{{name}}', obj.name);
    html1 = html1.replace("{{btn1}}", obj.btn1);
    html1 = html1.replace("{{btn2}}",obj.btn2);
    for (let item of obj.nav){
        let html2 = template2;
        html2 = html2.replace("{{navitem}}", item.navitem);
        
        for (let elt of item.dropdownitems){
            let html3 = template3;
            html3 = html3.replace("{{item}}", elt.item);
            dropdown +=html3
        }
        
        html2 = html2.replace("{{dropdownitems}}", dropdown);
        nav += html2;
        
    }
    html1 = html1.replace("{{nav}}", nav);
    return html1;

}
Nav.render = function(where, what ){
    let element  = document.querySelector(where);
    let navi = "";
    for ( let elt of what){
        navi += Nav.format(elt);
    }
    element.innerHTML = navi;
}

export {Nav};