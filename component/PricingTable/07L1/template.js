const templateFile = await fetch("/component/PricingTable/07L1/template.html");
const template = await templateFile.text();

let Pricing = {};

Pricing.format = function(obj){
    let html = template;
    html = html.replace('{{title}}', obj.title);
    html = html.replace('{{subtitle}}', obj.subtitle);
    html = html.replace('{{plan}}', obj.plan);
    html = html.replace('{{customers}}', obj.customers);
    html = html.replace('{{desc}}', obj.desc);
    html = html.replace('{{button}}', obj.button);
    return html;
}

Pricing.render = function(where, what ){
    let element  = document.querySelector(where);
    let pricing = "";
    for ( let elt of what){
        pricing += Pricing.format(elt);
    }
    element.innerHTML = pricing;
}

export {Pricing};
