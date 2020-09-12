const images = [
    "https://cdn.afterdawn.fi/v3/news/original/github-logo.png",
    "https://www.gooddata.com/sites/default/files/images/featured_logo_github_1.png",
    "http://static.movingpackets.net/2013/12/github-logo-transparent.jpg",
    "https://www.drupal.org/files/project-images/github_commits_logo.png",
    "https://image.freepik.com/free-icon/github-logo-in-a-rounded-square_318-40761.jpg",
    "http://www.pngall.com/wp-content/uploads/2016/04/Github-PNG-Image.png",
]


const getRandomImage = (items) => {
    const randomImage = items[Math.floor(Math.random() * items.length)]
    return randomImage
}


const gameBoard = document.getElementById("game-board")
let clickedImages = []
let score = 0



const drawImage = (gameBoard) => {


    const imageBorder = document.createElement("div")
    imageBorder.classList.add("img-border")


    const imageElement = document.createElement("img")
    imageElement.style.gridRowStart = Math.floor(Math.random() * 1)
    imageElement.style.gridColumnStart = Math.floor(Math.random() * 1)
    imageElement.classList.add("img")
    imageElement.style.opacity = "0"
    imageElement.src = getRandomImage(images)

    const displayImage = () => {
        console.log(score)
        imageElement.style.opacity = "1"
        clickedImages.push(imageElement.src)
        console.log(clickedImages)

        if (clickedImages.length === 2) {
            clickedImages = []
            if (clickedImages[0] === clickedImages[1]) {
                score = score + 1
            }
        }
    }

    imageBorder.onclick = displayImage
    imageBorder.appendChild(imageElement)

    gameBoard.appendChild(imageBorder)
}


images.map(() => {
    drawImage(gameBoard)
})