const images = [
    "https://cdn.afterdawn.fi/v3/news/original/github-logo.png",
    "https://www.gooddata.com/sites/default/files/images/featured_logo_github_1.png",
    "http://static.movingpackets.net/2013/12/github-logo-transparent.jpg",
    "https://www.drupal.org/files/project-images/github_commits_logo.png",
    "https://image.freepik.com/free-icon/github-logo-in-a-rounded-square_318-40761.jpg",
]


const getRandomImage = (items) => {
    const randomImage = items[Math.floor(Math.random() * items.length)]
    return randomImage
}


const gameBoard = document.getElementById("game-board")

const drawImage = (gameBoard, row, column) => {

    const imageBorder = document.createElement("div")
    imageBorder.classList.add("img-border")
    imageBorder.style.height = "175px"


    const imageElement = document.createElement("img")
    imageElement.style.gridRowStart = Math.floor(Math.random() * row)
    imageElement.style.gridColumnStart = Math.floor(Math.random() * column)
    imageElement.classList.add("img")
    imageElement.style.opacity = "0"
    imageElement.src = getRandomImage(images)


    const displayImage = () => {
        imageElement.style.opacity = "1"
    }

    imageBorder.onclick = displayImage
    imageBorder.appendChild(imageElement)

    gameBoard.appendChild(imageBorder)
}


images.map(() => {
    let rowStart = 1
    let columnStart = 1
    drawImage(gameBoard, rowStart, columnStart)
})