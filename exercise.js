// Landscape or Portrait 
// if Landscape - width > height
// if Portrait - width < height 
// let image = isLandscape(45,25);
// console.log(image);
console.log(isLandscape(300,600));
function isLandscape(width,height){
    return (width > height);
}
