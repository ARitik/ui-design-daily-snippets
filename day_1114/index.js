const setRandomRGBValue = () => {
    return Math.ceil(Math.random() * 256);
};

const componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}




const setRandomColor = () => {
    const r = setRandomRGBValue();
    const g = setRandomRGBValue();
    const b = setRandomRGBValue();
    const colorValue = rgbToHex(r, g, b);
    //const colorValue = `rgb(${randomColorOne},${randomColorTwo},${randomColorThree})`;
    return colorValue;
};

const colorBlockOne = document.getElementById('one');
const colorBlockTwo = document.getElementById('two');
const colorBlockThree = document.getElementById('three');
const colorBlockFour = document.getElementById('four');
const colorBlockFive = document.getElementById('five');


const hexOne = document.getElementById('hex-one');
const hexTwo = document.getElementById('hex-two');
const hexThree = document.getElementById('hex-three');
const hexFour = document.getElementById('hex-four');
const hexFive = document.getElementById('hex-five');
const notification = document.getElementById('notification');

const notificationDisplay = (value) => {
    console.log(notification);
    notification.innerHTML = `Code <bold>${value}</bold> copied to your clipboard`
    notification.classList.remove("display");
    setTimeout(() => {
        notification.classList.add("display");
    }, 5000)
}


hexOne.onclick = () => {
    var text = hexOne.innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    notificationDisplay(text);
}

hexTwo.onclick = () => {
    var text = hexTwo.innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    notificationDisplay(text);
}

hexThree.onclick = () => {
    var text = hexThree.innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    notificationDisplay(text);
}

hexFour.onclick = () => {
    var text = hexFour.innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    notificationDisplay(text);
}

hexFive.onclick = () => {
    var text = hexFive.innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    notificationDisplay(text);
}



const button = document.querySelector('.btn');

const randomizeColor = () => {
    let color = setRandomColor();
    colorBlockOne.style.backgroundColor = color;
    hexOne.innerHTML = color;
    color = setRandomColor();
    colorBlockTwo.style.backgroundColor = color;
    hexTwo.innerHTML = color;
    color = setRandomColor();
    colorBlockThree.style.backgroundColor = color;
    hexThree.innerHTML = color;
    color = setRandomColor();
    colorBlockFour.style.backgroundColor = color;
    hexFour.innerHTML = color;
    color = setRandomColor();
    hexFive.innerHTML = color;
    colorBlockFive.style.backgroundColor = color;
}


button.onclick = () => {
    randomizeColor();
}

document.onkeydown = e => {
    if (e.keyCode == 32) {
        randomizeColor();
    }
}