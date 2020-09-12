const images = [
    "https://cdn.afterdawn.fi/v3/news/original/github-logo.png",
    "https://www.gooddata.com/sites/default/files/images/featured_logo_github_1.png",
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
let clickedImages = []
let score = 0

// this displays the score on the header

scoreDocument.innerHTML = score.toString()

// this is the function that draws the card that holds the image

const drawImage = (gameBoard) => {

    // this creates the border around the image

    const imageBorder = document.createElement("div")
    imageBorder.classList.add("img-border")

    // this creates a random image

    const imageElement = document.createElement("img")
    imageElement.style.gridRowStart = Math.floor(Math.random() * 1)
    imageElement.style.gridColumnStart = Math.floor(Math.random() * 1)
    imageElement.classList.add("img")
    imageElement.style.opacity = "0"
    imageElement.src = getRandomImage(images)

    // this is the function that displays the image after it is clicked

    const displayImage = () => {
        imageElement.style.opacity = "1"
        clickedImages.push(imageElement.src)

        if (clickedImages[0] === clickedImages[1]) {
            clickedImages = []
            score = score + 1
            scoreDocument.innerHTML = score
        }

        if (clickedImages.length === 2) {
            console.log(clickedImages)
            clickedImages = []
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