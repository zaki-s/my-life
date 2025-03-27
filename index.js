let heading = 'The Life of zaki'
let paragraph= 'Zaki is a semi-self tuaght software engineer currently in Moringa school'
const skills = ['Problem Solving', 'Good Imagination', 'Good listener', 'Team PLayer', 'Fast Learner']
const projects = ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5']


const submitForm = async (event) => {
    event.preventDefault()
    
    let fullName = document.querySelector('input[type="text"]').value
    let email = document.querySelector('input[type="email"]').value 
    let message = document.querySelector('textarea').value

    const data = {
        fullName,
        email,
        message
    }

   const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        header: {},
        body: JSON.stringify(data)
    })

    response.json().then((data) => {
        console.log(data)
    }).catch((error) => {
        console.log(error)
    })
}


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
    let listItemText = document.createElement('p')
    let viewMoreButton = document.createElement('button')

    viewMoreButton.innerHTML = 'View More'
    listItemText.innerHTML = skills[skill]

    listItem.appendChild(listItemText)
    listItem.appendChild(viewMoreButton)

    skillsList.appendChild(listItem)
}

skillsContainer.appendChild(skillsList)


projectContainer.innerHTML = `
    <h2>Projects</h2>
`

let projectList = document.createElement('ol')

projects.forEach((project) => {
    let listItem = document.createElement('li')
    let listItemText = document.createElement('p')
    let viewMoreButton = document.createElement('button')

    viewMoreButton.innerHTML = 'View More'
    listItem.innerHTML = project

    listItem.appendChild(listItemText)
    listItem.appendChild(viewMoreButton)
    projectList.appendChild(listItem)
})

projectContainer.appendChild(projectList)


// End of skills section 



// Contact section 
const contactSection = document.getElementById('contactme')

let contactHeading = document.createElement('h2')
contactHeading.innerHTML = 'Contact Me'

let contactForm = document.createElement('form')

let fullNameInput = document.createElement('input')
fullNameInput.setAttribute('type', 'text')
fullNameInput.setAttribute('placeholder', 'Enter your Full Name')

let emailInput = document.createElement('input')
emailInput.setAttribute('type', 'email')
emailInput.setAttribute('placeholder', 'Enter your Email')

let messageInput = document.createElement('textarea')
messageInput.setAttribute('placeholder', 'Enter your message')

let submitButton = document.createElement('button')
submitButton.setAttribute('type', 'submit')
submitButton.innerHTML = 'Submit'

submitButton.addEventListener('click', submitForm)



contactForm.appendChild(fullNameInput)
contactForm.appendChild(emailInput)
contactForm.appendChild(messageInput)
contactForm.appendChild(submitButton)

contactSection.appendChild(contactHeading)
contactSection.appendChild(contactForm)

// End of contact section

aboutMeSection.appendChild(headingElement)
aboutMeSection.appendChild(paragraphElement)
skillsSection.appendChild(skillsContainer)
skillsSection.appendChild(projectContainer)
