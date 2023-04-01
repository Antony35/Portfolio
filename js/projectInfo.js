const projects = document.querySelectorAll('.container-project > a > img')
const title = document.querySelector('.info > h1')
const description = document.querySelector('.info > h3')
const techno = document.querySelector('.info > h5')


class info {
	constructor(title, description, techno) {
		this.title = title
		this.description = description
		this.techno = techno
	}
}
const infoText = new info('Project', 'Description', 'techno')
const project1 = new info('We love the world', 'Ce blog raconte mes voyages.', 'html / css / sass / JS / webpack / php')
const project2 = new info('Portfolio', 'Met en avant mes compétances', 'html / css / sass / JS / php')
const project3 = new info('Project3', 'desc du project 3', 'techno')
const project4 = new info('Project4', 'desc du project 4', 'techno')
const project5 = new info('Project5', 'desc du project 5', 'techno')

const project = [project1, project2, project3, project4, project5]

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

