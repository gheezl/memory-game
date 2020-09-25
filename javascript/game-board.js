import { images } from "./images.js"

// this reorganizes the images at random

const shuffle = (array) => {
    let counter = array.length;

    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);

        counter--;

        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

shuffle(images)

// these are a few variables

const gameBoard = document.getElementById("game-board")
const scoreDocument = document.getElementById("your-score")
const allImages = document.getElementsByClassName("img")
let clickedImages = []
let imageId = []
let score = 0
let id = 0
let clickCounter = 0
let rowPosition = 1
let columnPosition = 0
let increment = -1

// this function randomly selects an image

// const getRandomImage = (items) => {
//     const randomImage = items[Math.floor(Math.random() * items.length)]
//     return randomImage
// }

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
    // hideImages()
    score = score + 10
    clickedImages = []
    scoreDocument.innerHTML = score
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
    // imageElement.style.opacity = "0"
    imageElement.src = getRandomImage(images, increment)

    // this is the function that displays the image after it is clicked

    const displayImage = () => {
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