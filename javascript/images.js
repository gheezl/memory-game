export const images = [
    "https://logos-download.com/wp-content/uploads/2018/01/Transformers_Autobot_logo_red.png",
    "https://logos-download.com/wp-content/uploads/2018/01/Transformers_Autobot_logo_red.png",
    "./autobot.png",
    "./decepticon.png",
    // "../images/triforce.png",
    // "../images/sonic.png",
    // "../images/mario.png",
    // "../images/luigi.png",
    // "../images/wario.png",
    // "../images/waluigi.png",
    // "../images/mega-man.png",
    // "../images/playstation.png",
    // "../images/Xbox.png",
    // "../images/nintendo.png",
    // "../images/sega.png",
    // "../images/smash-bros.png",
    // "../images/metroid.png",
    // "../images/tails.png",
    // "../images/github.png",
    // "../images/twitter.png",
    // "../images/instagram.png",
    // "../images/snapchat.png",
    // "../images/iron-man.png",
    // "../images/cap-america.png",
    // "../images/batman.png",
    // "../images/spider-man.png",
    // "../images/the-ring.png",
    // "../images/autobot.png",
    // "../images/decepticon.png",
    // "../images/triforce.png",
    // "../images/sonic.png",
    // "../images/mario.png",
    // "../images/luigi.png",
    // "../images/wario.png",
    // "../images/waluigi.png",
    // "../images/mega-man.png",
    // "../images/playstation.png",
    // "../images/Xbox.png",
    // "../images/nintendo.png",
    // "../images/sega.png",
    // "../images/smash-bros.png",
    // "../images/metroid.png",
    // "../images/tails.png",
    // "../images/github.png",
    // "../images/twitter.png",
    // "../images/instagram.png",
    // "../images/snapchat.png",
    // "../images/iron-man.png",
    // "../images/cap-america.png",
    // "../images/batman.png",
    // "../images/spider-man.png",
    // "../images/the-ring.png",
]


export const shuffle = (array) => {
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