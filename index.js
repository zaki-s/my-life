let heading = 'The Life of Joseph'
let paragraph= 'joseph is a self taught software engineer'

const aboutMeSection = document.getElementById("aboutme")

let headingElement = document.createElement('h1')
headingElement.innerHTML = heading
let paragraphElement = document.createElement('p')
paragraphElement.innerHTML = paragraph

aboutMeSection.appendChild(headingElement)
aboutMeSection.appendChild(paragraphElement)

