const projects = document.querySelectorAll('.container-project > a > img')
const projectsLinks = document.querySelectorAll('.container-project > a')
const containers = document.querySelectorAll('.container-project > a > div')
const title = document.querySelector('.info > h1')
const description = document.querySelector('.info > h3')
const techno = document.querySelector('.info > h5')

console.log(containers)
class info {
	constructor(title, description, techno) {
		this.title = title
		this.description = description
		this.techno = techno
	}
}
const infoText = new info('Project', 'Description', 'techno')
const project1 = new info('We love the world', 'Ce blog raconte mes voyages.', 'html / css / sass / JS / webpack / php')
const project2 = new info('Portfolio', 'Présentation de mes projets', 'html / css / sass / JS / php')
const project3 = new info('TODO List', 'Gestion de liste de tâche', 'html / css / JS')
const project4 = new info('La maison jungle', 'Site d\'achat de plante', 'React')
const project5 = new info('Hardware style', 'Page magasin réaliser pour la semaine de test à CEFIM', 'HTML / css / sass / JS')
const project6 = new info('Design', 'Maquette trouver sur figma', 'HTML / css')
const project7 = new info('Page de nike', 'Copie de la premiere page de nike', 'HTML / css / sass')
const project8 = new info('Benjamin Code', 'Challenge Bajamin Code', 'HTML / css / sass / JS')

const project = [project1, project2, project3, project4, project5, project6, project7, project8]

containers.forEach((container, index) => {
	let title = document.createElement('h3')
	let desc = document.createElement('h4')
	let techno = document.createElement('p')
	title.innerText = project[index].title
	desc.innerText = project[index].description
	techno.innerText = project[index].techno
	container.appendChild(title)
	container.appendChild(desc)
	container.appendChild(techno)
	})

/**
 * @param {HTMLElement} title 
 * @param {HTMLElement} description 
 * @param {HTMLElement} techno 
 * @param {number} index 
 */
function changeName(title, description, techno, index) {
	setTimeout(() => {
		title.textContent = project[index].title
		description.textContent = project[index].description
		techno.textContent = project[index].techno
	}, 500)
}

/**
 * @param {HTMLElement} title 
 * @param {HTMLElement} description 
 * @param {HTMLElement} techno 
 */
function resetName(title, description, techno) {
	setTimeout(() => {
		title.textContent = infoText.title
		description.textContent = infoText.description
		techno.textContent = infoText.techno
	}, 500)
}

/**
 * 
 * @param {HTMLElement} tag 
 */
function changeText(tag) {
	tag.animate({
        transform: ['translateX(0px)','translateX(100px)','translateX(-130px)' ,'translateX(0px)'],
        opacity: [1, 0, 0, 1],
        easing: [ 'ease-in', 'ease-out' ],
    }, 800);
}

projects.forEach(function(project, index) {
	project.addEventListener('mouseenter', function() {
		project.style.backgroundColor = "blue"
		changeText(title)
		changeText(description)
		changeText(techno)
		changeName(title, description, techno, index)
	}) 
})

projects.forEach(project => {
	project.addEventListener('mouseleave', function() {
		project.style.backgroundColor = "red"
		changeText(title)
		changeText(description)
		changeText(techno)
		resetName(title, description, techno)	
	})
})

