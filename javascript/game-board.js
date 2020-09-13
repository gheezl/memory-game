const images = [
    "https://cdn.afterdawn.fi/v3/news/original/github-logo.png",
    "http://static.movingpackets.net/2013/12/github-logo-transparent.jpg",
    "http://static.movingpackets.net/2013/12/github-logo-transparent.jpg",
    "https://www.drupal.org/files/project-images/github_commits_logo.png",
    "https://image.freepik.com/free-icon/github-logo-in-a-rounded-square_318-40761.jpg",
    "http://www.pngall.com/wp-content/uploads/2016/04/Github-PNG-Image.png",
    "https://cdn.afterdawn.fi/v3/news/original/github-logo.png",
    "http://static.movingpackets.net/2013/12/github-logo-transparent.jpg",
    "http://static.movingpackets.net/2013/12/github-logo-transparent.jpg",
    "https://www.drupal.org/files/project-images/github_commits_logo.png",
    "https://image.freepik.com/free-icon/github-logo-in-a-rounded-square_318-40761.jpg",
    "http://www.pngall.com/wp-content/uploads/2016/04/Github-PNG-Image.png",
    "https://cdn.afterdawn.fi/v3/news/original/github-logo.png",
    "http://static.movingpackets.net/2013/12/github-logo-transparent.jpg",
    "http://static.movingpackets.net/2013/12/github-logo-transparent.jpg",
    "https://www.drupal.org/files/project-images/github_commits_logo.png",
    "https://image.freepik.com/free-icon/github-logo-in-a-rounded-square_318-40761.jpg",
    "http://www.pngall.com/wp-content/uploads/2016/04/Github-PNG-Image.png",
    "https://www.drupal.org/files/project-images/github_commits_logo.png",
    "https://image.freepik.com/free-icon/github-logo-in-a-rounded-square_318-40761.jpg",
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
let matchingImage1 = null
let matchingImage2 = null
let clickedImages = []
let score = 0
let id = 0
let interval = null
let clickCounter = 0
let rowPosition = 1
let columnPosition = 0

// this hides all the images after 1 second of display

const hideImages = () => {
    clickCounter = 0
    clickedImages = []
    for (let item of allImages) {
        item.style.opacity = "0"
    }
}

// this deletes the matching images

const deleteImages = () => {
    matchingImage1 = document.getElementById(clickedImages[0][1])
    matchingImage2 = document.getElementById(clickedImages[1][1])
    matchingImage1.remove()
    matchingImage2.remove()
    score = score + 10
    clickedImages = []
    scoreDocument.innerHTML = score
}

// this reduces the score if you click on 2 different images

const reduceScore = () => {
    if (score >= 1) {
        score -= 1
    }
    scoreDocument.innerHTML = score
}

// this displays the score on the header

scoreDocument.innerHTML = score.toString()

// this is the function that draws the card that holds the image

const drawImage = (gameBoard) => {
    columnPosition += 1
    id += 1

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
    imageElement.classList.add("img")
    imageElement.style.opacity = "0"
    imageElement.src = getRandomImage(images)

    // this is the function that displays the image after it is clicked

    const displayImage = () => {
        clickCounter += 1
        imageElement.style.opacity = "1"
        clickedImages.push([imageElement.src, imageBorder.id])

        if (clickedImages[0][0] === clickedImages[1][0]) {
            setTimeout(deleteImages, 1000)
        }

        if (clickedImages[0][0] !== clickedImages[1][0]) {
            setTimeout(reduceScore, 1000)
        }

        if (clickCounter === 2) {
            setTimeout(hideImages, 1000)
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