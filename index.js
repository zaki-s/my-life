let heading = 'The Life of Joseph'
let paragraph= 'joseph is a self taught software engineer'
const skills = ['Problem Solving', 'Good Communicator', 'Team Player', 'Self Taught', 'Fast Learner']
const projects = ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5']

const aboutMeSection = document.getElementById("aboutme")
const skillsSection = document.getElementById("skillsprojects")

// About me section
let headingElement = document.createElement('h1')
headingElement.innerHTML = heading
let paragraphElement = document.createElement('p')
paragraphElement.innerHTML = paragraph

// End of about me section

// Skills Section
const skillsContainer =  document.createElement('div')
const projectContainer = document.createElement('div')

skillsContainer.innerHTML = `
    <h2>Skills ${skills.length}</h2>
`

let skillsList = document.createElement('ul')

for (let skill = 0; skill < skills.length; skill++ ) {
    console.log(skills[skill])
    let listItem = document.createElement('li')
    listItem.innerHTML = skills[skill]
    skillsList.appendChild(listItem)
}

skillsContainer.appendChild(skillsList)


projectContainer.innerHTML = `
    <h2>Projects</h2>
`

let projectList = document.createElement('ol')

projects.forEach((project) => {
    let listItem = document.createElement('li')
    listItem.innerHTML = project
    projectList.appendChild(listItem)
})

projectContainer.appendChild(projectList)


// End of skills section 

aboutMeSection.appendChild(headingElement)
aboutMeSection.appendChild(paragraphElement)
skillsSection.appendChild(skillsContainer)
skillsSection.appendChild(projectContainer)

