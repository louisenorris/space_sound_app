const soundContainer = document.querySelector('#sound-container')
const answerContainer = document.querySelector('#answer-container')
const soundBox = document.querySelector('div.sound-box')
const sound = new Audio()
document.querySelector('#sound-container').append(sound)
const h1Div = document.querySelector('#h1Div')
const playBtn = document.querySelector('#play')
const baseURL = "http://localhost:3000"
const scoreURL = baseURL + '/scores'
const soundsURL = baseURL + '/sounds'

const storeOfInformation = {}

const nasaPOTDURL = 'https://api.nasa.gov/planetary/apod?api_key=2MT9LW9RwKRPovUy0ambXMwhXshbwXCewddh0pGG'

document.addEventListener('DOMContentLoaded', init)

  function init() {
    fetchAndRenderimage()
    // renderNewUserForm()
    // fetchAndSelectRandomSound()
    playBtn.addEventListener('click', fetchAndSelectRandomSound)
  }

  const fetchAllSounds = () => {
    return fetch(soundsURL)
    .then(resp => resp.json())
  }

  const fetchAndSelectRandomSound = () => {
    fetchAllSounds()
    .then(sounds => selectAndPlayRandomSound(sounds))
    .then(countdownToAnswer)
    }
  
  const countdownToAnswer = () => {
    let x = document.getElementById("countdown");
    const a = document.getElementById("answer");
    const br = () => document.createElement('br')
    const d = document.getElementById("description");
    x.innerText = ""
    a.innerText = ""
    br.innerText = ""
    d.innerText = ""
    answerContainer.append(x, a, br(), d)
    // debugger
      setTimeout(function(){ x.innerText="5" }, 1000);
      setTimeout(function(){ x.innerText="4" }, 2000);
      setTimeout(function(){ x.innerText="3" }, 3000);
      setTimeout(function(){ x.innerText="2" }, 4000);
      setTimeout(function(){ x.innerText="1" }, 5000);
      setTimeout(function(){ x.innerText="0" }, 6000);
      setTimeout(function(){ x.innerText="" }, 7000);
      setTimeout(function(){ a.innerText=`${storeOfInformation.currentSound.title}: ${storeOfInformation.currentSound.description}` }, 7000);
      // setTimeout(function(){ d.innerText=`${storeOfInformation.currentSound.description}` }, 7000);
  }

  const selectAndPlayRandomSound = (sounds) => {
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    playSound(randomSound)
  }

  function playSound(randomSound) {
    sound.src = randomSound.audio
    sound.play()
    storeOfInformation.currentSound = randomSound
  }

  const renderPOTDBackground = () => {
    return fetch(nasaPOTDURL)
    .then(resp => resp.json())
  }

  const fetchAndRenderimage = () => {
    renderPOTDBackground().then(img=>renderImage(img))
  }

  const renderImage = (img) => {
    document.body.style.background = `url(${img.url})`;
  }

  // const renderNewUserForm = () => {
  //   const newUserForm = document.createElement('form')
  //   // newUserForm.addEventListener('submit', handleFormSubmission)

  //   const usernameInput = document.createElement('input')
  //   usernameInput.placeholder = "Insert username..."
  //   usernameInput.name = "name"

  //   const submitButton = document.createElement('input')
  //   submitButton.value = "Lift off!"
  //   submitButton.type = "submit"

  //   newUserForm.append(usernameInput, submitButton)
  //   document.querySelector('#create-user').append(newUserForm)
  // }






    // round({id: 1, title: 'this sound'}, 'roundOne')
    // renderOptionBtns()
    // titles()

// const state = {
//   roundOne: {
//     answer: 1,
//     pass: false
//   }
// }


  // const playRandSound = soundFiles[Math.floor(Math.random() * soundFiles.length)];


// const titles = () => {
//   fetch(soundsURL)
//   .then(resp => resp.json())
//   .then(sounds => makeTitlesArray(sounds))
// }

// const makeTitlesArray = (sounds) => {
//   titlearr = []
//   sounds.forEach(sound => {
//     titlearr.push(sound.title)
//   })
//   return titlearr[Math.floor(Math.random()*titlearr.length)]
// }

// const f = a => {
//   a.slice(Math.random(a.length)*10)
// }


// const randTitles = (titlearr) => {
  
  // for (let i = 0; i < 3; i++) {
  //   randTitlesArr = [];
  //   return titlearr[Math.floor(Math.random(3)*titlearr.length)]
  //   randTitlesArr.push(sound.title)
// }


// ref = Array.from({length: 5}, () => Math.floor(Math.random() * 10));
// array = ["space", "tulip", "laptop", "dog", "le", "water bottle"]
// for (i=0; i<ref.length; i++) {
//         console.log(   array[ ref[i] ]   )

  // const round = (sound, titlearr, roundNum) => {
  //   const buttons = document.querySelectorAll('.optionBtn')
  //     buttons.forEach(button => {
  //       const btnid = button.id.split('-')[1]
  //       console.log(button)
  //       if (btnid == state[roundNum]["answer"]) {
  //         button.innerText = sound.title
  //       } else {
  //         button.innerText = titlearr[btnid - 1]
  //       }
  //     })
  // }


  // const handleFormSubmission = (event) => {
  // event.preventDefault()
  //
  // const newScoreObj = {
  //   username: event.target.name.value,
  //   answers: 0
  // }

//   fetch(scoreURL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(newScoreObj)
//   })
// }


// let questions = []
//
// // loop
// // check if you've already answered 5 questions, and if not fetch 1 new question
//
// if (questions.length < 5) {
//   fetch(newQuestionUrl)
//   .then(renderQuestionOnPage)
// } else {
//   fetch(submitScore)
// }

// op1h3.innerText = `Option1: ${sounds[0].title}`
//

// const renderOptionBtns = (sounds) => {
//   const optionsDiv = document.querySelector('#options-wrapper')
//   const options1n2Div = document.createElement('div')
//   options1n2Div.className = 'options1n2Div'
//   const optionBtn1 = document.createElement('button')
//   const op1h3 = document.querySelector('option1h3')
//   optionBtn1.innerText = "optionBtn1"
//   op1h3.innerText = "optionBtn1"
//   // optionBtn1.innerText = `${json.sounds.title.sample}`
//   optionBtn1.className = 'button1'
//   optionBtn1.className = 'buttons'
//   // optionBtn1.addEventListener('click', )
//
//   const optionBtn2 = document.createElement('button')
//   optionBtn2.innerText = "optionBtn2"
//   optionBtn2.className = 'button2'
//   optionBtn2.className = 'buttons'
//   // optionBtn2.addEventListener('click', )
//
//   const options3n4Div = document.createElement('div')
//   options3n4Div.className = 'options3n4Div'
//   optionBtn3 = document.createElement('button')
//   optionBtn3.innerText = "optionBtn3"
//   optionBtn3.className = 'button3'
//   optionBtn3.className = 'buttons'
//   // optionBtn3.addEventListener('click', )
//
//   const optionBtn4 = document.createElement('button')
//   optionBtn4.innerText = "optionBtn4"
//   optionBtn4.className = 'button4'
//   optionBtn4.className = 'buttons'
//   // optionBtn4.addEventListener('click', )
//
//   options1n2Div.append( optionBtn1, optionBtn2)
//   options3n4Div.append(optionBtn3, optionBtn4)
//   optionsDiv.append(options1n2Div, options3n4Div)
//   soundContainer.appendChild(optionsDiv)
// }
