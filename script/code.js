// About section
let about = document.querySelector('section#about .row:last-child');
let aboutContents = [
    ".Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quisquam sapiente explicabo consequuntur illo ut autem exercitationem laudantium ab ratione praesentium nesciunt eligendi, perspiciatis possimus fuga minima et! Quibusdam, saepe.",
    ".Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quisquam sapiente explicabo consequuntur illo ut autem exercitationem laudantium ab ratione praesentium nesciunt eligendi, perspiciatis possimus fuga minima et! Quibusdam, saepe.",
]
// Loop through contents
aboutContents.forEach( (content)=>{
    about.innerHTML += `
    <p class='lead'>${content}</p>
    `
} )
// Education
let education = [
    {
        id: 1,
        year: 2023,
        description: 'Life Choices Coding Academy',
        place: 'Life Choices',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 2,
        year: 2021,
        description: 'Studied Software Development',
        place: 'Eduvos',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 3,
        year: 2020,
        description: 'I ',
        place: 'Data Camp',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 4,
        year: 2019,
        description: 'I got my GED',
        place: 'Online',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 5,
        year: 2018,
        description: 'I got my diploma on Software Engineering',
        place: 'Tshwane University of Technology',
        type: 'Diploma',
        certificate: ''
    },
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})

