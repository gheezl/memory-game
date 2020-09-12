const images = [
    "https://cdn.afterdawn.fi/v3/news/original/github-logo.png",
    "http://static.movingpackets.net/2013/12/github-logo-transparent.jpg",
    "http://static.movingpackets.net/2013/12/github-logo-transparent.jpg",
    "https://www.drupal.org/files/project-images/github_commits_logo.png",
    "https://image.freepik.com/free-icon/github-logo-in-a-rounded-square_318-40761.jpg",
    "http://www.pngall.com/wp-content/uploads/2016/04/Github-PNG-Image.png",
]

// this function randomly selects an image

const getRandomImage = (items) => {
    const randomImage = items[Math.floor(Math.random() * items.length)]
    return randomImage
}

// these are a few variables

const gameBoard = document.getElementById("game-board")
const scoreDocument = document.getElementById("your-score")
const allImages = document.getElementsByClassName("img")
let clickedImages = []
let score = 0
let interval = null
let clickCounter = 0

// this hides all the images after 1 second of display

const hideImages = () => {
    for (let item of allImages) {
        item.style.opacity = "0"
    }
}

// this displays the score on the header

scoreDocument.innerHTML = score.toString()

// this is the function that draws the card that holds the image

const drawImage = (gameBoard) => {
    // this creates a random image

    const imageBorder = document.createElement("div")
    imageBorder.classList.add("img-border")
    const imageElement = document.createElement("img")
    imageElement.style.gridRowStart = Math.floor(Math.random() * 1)
    imageElement.style.gridColumnStart = Math.floor(Math.random() * 1)
    imageElement.classList.add("img")
    imageElement.style.opacity = "0"
    imageElement.src = getRandomImage(images)

    // this is the function that displays the image after it is clicked

    const displayImage = () => {
        clickCounter += 1
        imageElement.style.opacity = "1"
        clickedImages.push(imageElement.src)

        if (clickedImages[0] === clickedImages[1]) {
            clickedImages = []
            score = score + 1
            scoreDocument.innerHTML = score
        }

        if (clickedImages.length === 2) {
            clickedImages = []
        }

        if (clickCounter === 2) {
            clickCounter = 0
            interval = setTimeout(hideImages, 1000)
        }

        return;
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