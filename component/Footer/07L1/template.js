

// const permet de déclarer une variable en lecture seule. 
// Une variable déclarée avec const ne peut pas être modifiée ultérieurement.
// C'est une façon de "protéger" une variable pour éviter qu'elle soit modifiée par erreur.

// fetch permet de lire le fichier à l'emplacement indiqué.
// cette lecture est une opération qui "prend du temps" (asynchrone).
// await est donc l'instruction utilisée pour dire que l'on attend que l'opération soit terminée.
const templateFile = await fetch("/component/Footer/07L1/template.html");

// templateFile.text() pemret de lire et retourner le contenu du fichier sous forme de chaîne de caractères.
// c'est aussi une opération asynchrone, donc on utilise aussi await pour attendre la fin de l'opération.
const template = await templateFile.text();

const templateFile2 = await fetch("/component/Footer/07L1/li.html");

// templateFile.text() pemret de lire et retourner le contenu du fichier sous forme de chaîne de caractères.
// c'est aussi une opération asynchrone, donc on utilise aussi await pour attendre la fin de l'opération.
const templateLi = await templateFile2.text();
// A ce stade template contient le contenu du fichier template.html sous forme de chaîne de caractères.


/* Objet Footer
   Footer est un objet qui symbolise le composant Footer. Il relève de la vue de notre "application".
*/
let Footer = {}; 


/* Footer.format
   . paramètre obj : un objet contenant les données d'un composant Footer 
   > valeur de retour : une chaine correspondant au contenu HTML formaté du template
*/
Footer.format = function(obj){
    let html = template;
    let items = "";
    for(let m of obj.menus){
         let li = templateLi;
         li = li.replace("{{item}}", m.item);
          items = items+li;
    }
    html = html.replace("{{list}}", items);
      html = html.replace("{{credits}}",obj.credits);
    return html;
}



/* Footer.render
   . paramètre where : le selecteur CSS de l'élément où afficher la recette obj
   . paramètre what : un tableau d'objets contenants les données de dataFooter
   > aucune valeur de retour   
*/
Footer.render = function( where, what ){
    let element = document.querySelector(where);
    let html="";
    for (let obj of what){
      html=html+Footer.format(obj);
    }
    element.innerHTML = html;
}


// On "exporte" l'objet Footer pour qu'il soit utilisable ailleurs.
// Seul Footer pourra être utilisé ailleurs, pas le reste.
// Par exemple la variable/constante template ne sera pas accessible depuis l'extérieur.
export {Footer};