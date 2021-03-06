import { images, shuffle } from "./images.js"

shuffle(images)

alert("The rules of this memory game are very simple, all you have to do is connect as many sets of 2 matching images as possible before the timer hits 60 seconds.")
alert("Good luck!!")

// these are a few variables

const gameBoard = document.getElementById("game-board")
const scoreDocument = document.getElementById("your-score")
const timeDocument = document.getElementById("game-time")
const allImages = document.getElementsByClassName("img")
let clickedImages = []
let imageId = []
let score = 0
let id = 0
let clickCounter = 0
let rowPosition = 1
let columnPosition = 0
let increment = -1
let time = 0
let interval = null

// game timer

timeDocument.innerHTML = time.toString()

const myTimer = () => {
    time += 1
    timeDocument.innerHTML = time.toString()

    if (time === 60) {
        if (confirm(`Time is up! Game over. Your final score is ${score}`)) {
            window.location = "/"
        }
    } 
}

// this function selects an image

const getRandomImage = (items, increment) => {
    const randomImage = items[increment]
    return randomImage
}

// this hides all the images after 1 second of display

const hideImages = () => {
    clickCounter = 0
    clickedImages = []
    imageId = []
    for (let item of allImages) {
        item.style.opacity = "0"
    }
}

// this deletes the matching images

const deleteImages = () => {
    const matchingImage1 = document.getElementById(clickedImages[0][1])
    const matchingImage2 = document.getElementById(clickedImages[1][1])
    matchingImage1.remove()
    matchingImage2.remove()
    hideImages()
    score = score + 10
    clickedImages = []
    scoreDocument.innerHTML = score.toString()
}

// this displays the score on the header

scoreDocument.innerHTML = score.toString()

// this is the function that draws the card that holds the image

const drawImage = (gameBoard) => {
    columnPosition += 1
    id += 1
    increment += 1

    if (columnPosition === 11) {
        rowPosition += 1
        columnPosition = 1
    }

    // this creates a random image 

    const imageBorder = document.createElement("div")
    imageBorder.id = id
    imageBorder.classList.add("img-border")
    imageBorder.style.gridRowStart = rowPosition
    imageBorder.style.gridColumnStart = columnPosition

    const imageElement = document.createElement("img")
    imageElement.id = Math.floor(Math.random() * 1000000)
    imageElement.classList.add("img")
    imageElement.style.opacity = "0"
    imageElement.src = getRandomImage(images, increment)


    // this is the function that displays the image after it is clicked

    const displayImage = () => {
        if (!interval) {
            interval = setInterval(myTimer, 1000)
        }

        clickCounter += 1
        imageElement.style.opacity = "1"
        clickedImages.push([imageElement.src, imageBorder.id])
        imageId.push(imageBorder.id)

        if (clickedImages[0][0] === clickedImages[1][0]) {
            if (imageId[0] !== imageId[1]) {
                setTimeout(deleteImages, 1000)
            }
            else {
                hideImages()
            }
        }


        if (clickCounter === 3) {
            hideImages()
        }
    }

    imageBorder.onclick = displayImage

    // this is what displays it all on the game board

    imageBorder.appendChild(imageElement)
    gameBoard.appendChild(imageBorder)
}

// this maps over the images to spawn a card

images.map(() => {
    drawImage(gameBoard)
})