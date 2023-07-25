const colourCode = document.getElementById('colorCode')
const colourBox = document.getElementById('color-box')
const copyHex = document.getElementById('copy-btn')
const generateBtn = document.getElementById('generate-btn')
const rgbcode = document.getElementById('rgbcode')
let color_Code = '';

//this is the function that generate colours.
function GenerateBtn() {
    const hexChars = '0123456789ABCDEF'
    let hexColor = '#';

    for (let i= 0; i < 6; i++) {
        hexColor += hexChars[Math.floor(Math.random() * 16) ];
    };     
    
    colourBox.style.backgroundColor = hexColor;
    colourCode.innerHTML = hexColor;
    colourCode.style.color = hexColor

     const hex2rgb = hex => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(1, 3), 16);
        const b = parseInt(hex.slice(1, 3), 16);

        return {r, g, b}

    //     colourBox.style.backgroundColor = hexColor;
    // hex2rgb.innerHTML = hexColor;
    // colourCode.style.color = hexColor



    
     }
    // const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1))
    // const r = randomBetween(0, 255);
    // const g = randomBetween(0, 255);
    // const b = randomBetween(0, 255);
    // const rgbcode2 =  `rgb(${r}, ${g}, ${b})`;

    
    colourBox.style.backgroundColor = hexColor;
    rgbcode.innerHTML = rgbcode2
    rgbcode.style.color = rgbcode2
    //  //console.log(rgbcode);
    
}

//this is the fxn to copy hex
function copyHEX() {
    const colorText = colourBox.style.backgroundColor;
    const hexCode = rgbtoHex(colorText);
    const tempInput = document.createElement('input')
    document.body.appendChild(tempInput);
    tempInput.value = hexCode;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput)
    alert('Color copied to clipboard: ' + hexCode) 
    
}

function rgbtoHex(rgbColor) {
    const regex = /rgb\((\d+), (\d+), (\d+)\)/;
    const matches = regex.exec(rgbColor);
    const r = parseInt(matches[1]);
    const g = parseInt(matches[2]);
    const b = parseInt(matches[3]);
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)   
}

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.lenght == 1 ? '0' + hex : hex;
}
//reset
function ResetBtn() {
    colourCode.innerHTML = " "
    rgbcode.innerHTML = " "
    colourBox.style.backgroundColor = null
};


function CopyRGB() {
    const colorText = colourBox.style.backgroundColor;
    const tempInput = document.createElement('input')
    document.body.appendChild(tempInput);
    tempInput.value = colorText;
    tempInput.select();
    document.execCommand('copy') 
    document.body.removeChild(tempInput);
    alert('color copiedd to clipboard: ' + colorText)
    rgbcode.innerHTML = colorText;
    rgbcode.style.color = colorText
    
};

