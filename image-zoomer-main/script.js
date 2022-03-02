const container = document.querySelector(".container");
const image = document.querySelector(".image");
const lens = document.querySelector(".lens");
const result = document.querySelector(".result");

const containerRect = container.getBoundingClientRect();
// getBoundingClientRect() basically returns DOMRect object providing information regarding size of the object and its position
// relative to the viewport.

// VIEWPORT - viewport is the visible area of a webpage 
const imageRect = image.getBoundingClientRect();
const lensRect = lens.getBoundingClientRect();
const resultRect = result.getBoundingClientRect();
console.log('resultRect', resultRect);
container.addEventListener("mousemove", zoomImage);

result.style.backgroundImage = `url(${image.src})`;

function zoomImage(e) {
    // console.log("zoom image", e.clientX, e.clientY);
    //CLIENTX AND CLIENTY returns the X coordinate of the touch point relative to the viewport
    const { x, y } = getMousePos(e);
    // console.log(e.clientX, e.clientY, x, y);
    // X AND Y WITH RESPECT TO CONTAINER 
    // clientX and clientY wrt to viewport 
    // getMousePos() returns an object with x coordinate and y coordinate 
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    let fx = resultRect.width / lensRect.width; // "300/100=3-->hard-coded and fixed"
    let fy = resultRect.height / lensRect.height;
    // console.log(imageRect.width, imageRect.height)-->500, 375 -- fixed
    result.style.backgroundSize = `${imageRect.width * fx}px ${
        imageRect.height * fy
    }px`
    //backgroundSize is fixed, 1500 1125px
    // backgroundSize returns the size of the background images 
    // console.log(result.style.backgroundSize); //fixed
    result.style.backgroundPosition = `-${x * fx}px -${y * fy}px`;
    //  WHY NEGATIVE ?
    // console.log(result.style.backgroundPosition);
    //backgroundPosition property sets the position of background image.
    // backgroundPosition allows you to move a background image around within its container. 
    // top-left is origin in backgroundPosition 
}

function getMousePos(e) {
    let x = e.clientX - containerRect.left - lensRect.width / 2
    let y = e.clientY - containerRect.top - lensRect.height / 2

    let minX = 0
    let minY = 0
    let maxX = containerRect.width - lensRect.width
    let maxY = containerRect.height - lensRect.height

    if (x <= minX) {
        x = minX
    } else if (x >= maxX) {
        x = maxX
    }
    if (y <= minY) {
        y = minY
    } else if (y >= maxY) {
        y = maxY
    }

    return { x, y }
}
