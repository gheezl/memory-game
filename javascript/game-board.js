const images = ["https://cdn.afterdawn.fi/v3/news/original/github-logo.png", "https://www.gooddata.com/sites/default/files/images/featured_logo_github_1.png"]



const getRandomImage = (items) => {
    const randomImage = items[Math.floor(Math.random() * items.length)]
    console.log(randomImage)
    return randomImage
}

getRandomImage(images)

const gameBoard = document.getElementById("game-board")

const drawImage = (gameBoard) => {
    const imageElement = document.createElement("img")
    imageElement.style.gridRowStart = 1
    imageElement.style.gridColumnStart = 2
    imageElement.classList.add("img1")
    imageElement.src = getRandomImage(images)
    gameBoard.appendChild(imageElement)
}

drawImage(gameBoard)