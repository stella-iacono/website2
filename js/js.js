let color = '';
let type = '';
let style = '';

function setColor(selectedColor, button) {
    color = selectedColor;
    highlightButton(button);
    updateImage();
}

function setType(selectedType, button) {
    type = selectedType;
    highlightButton(button);
    updateImage();
}

function setStyle(selectedStyle, button) {
    style = selectedStyle;
    highlightButton(button);
    updateBackground();
    updateImage();
}

function highlightButton(button) {
    const buttonGroup = button.parentElement;
    const buttons = buttonGroup.getElementsByTagName('button');
    for (let btn of buttons) {
        btn.classList.remove('active');
    }
    button.classList.add('active');
}

function updateImage() {
    if (color && type && style) {
        const imagePath = `images/${color}_${type}_${style}.png`;
        const imageElement = document.getElementById('carImage');
        imageElement.src = imagePath;
        imageElement.style.display = 'block';
    }
}

function updateBackground() {
    const body = document.body;
    if (style === 'retro') {
        body.style.backgroundImage = "url('images/retro_background.jpg')";
    } else if (style === 'modern') {
        body.style.backgroundImage = "url('images/modern_background.jpg')";
    }
}

document.getElementById('nameForm').addEventListener('submit', function(event){
    event.preventDefault();
    displayUserName();
})

function displayUserName(){
    const nameInput = document.getElementById('nameInput').value;
    document.getElementById('displayName').innerText = `${nameInput}'s Custom Toyota`;
}
