const template = document.querySelector('template');
// Clones del template definido en index.html
const clontemplate1 = template.content.cloneNode(true);
const clontemplate2 = template.content.cloneNode(true);
const clontemplate3 = template.content.cloneNode(true);
const clontemplate4 = template.content.cloneNode(true);

const section1 = document.getElementById('section1');
const sectioncentral = document.getElementById('sectioncentral');
const section2 = document.getElementById('section2');

// Contenido para cada uno de los templates
clontemplate1.querySelector('article').id = "supervisorArticle";
clontemplate1.querySelector('h2').innerHTML = "Supervisor";
clontemplate1.querySelector('p').innerHTML = "Monitors activity to identify proyect roadblocks";
clontemplate1.querySelector('img').src = "images/icon-supervisor.svg";
clontemplate1.querySelector('img').alt = "supervisor";

clontemplate2.querySelector('article').id = "supervisorTeamBuilder";
clontemplate2.querySelector('h2').innerHTML = "Team Builder";
clontemplate2.querySelector('p').innerHTML = "Scans our talent network to create the optimal team for your proyect";
clontemplate2.querySelector('img').src = "images/icon-team-builder.svg";
clontemplate2.querySelector('img').alt = "team-builder";

clontemplate3.querySelector('article').id = "supervisorKarma";
clontemplate3.querySelector('h2').innerHTML = "Karma";
clontemplate3.querySelector('p').innerHTML = "Regularly evaluates our talent to ensure quality";
clontemplate3.querySelector('img').src = "images/icon-karma.svg";
clontemplate3.querySelector('img').alt = "karma";

clontemplate4.querySelector('article').id = "supervisorCalculator";
clontemplate4.querySelector('h2').innerHTML = "Calculator";
clontemplate4.querySelector('p').innerHTML = "Uses data from past proyects to provide better delivery estimates";
clontemplate4.querySelector('img').src = "images/icon-calculator.svg";
clontemplate4.querySelector('img').alt = "calculator";

// Adjunto nodo template a su correspondiente elemento section
section1.appendChild(clontemplate1);
sectioncentral.appendChild(clontemplate2);
sectioncentral.appendChild(clontemplate3);
section2.appendChild(clontemplate4);