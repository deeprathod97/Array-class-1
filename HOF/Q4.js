function calculateArea(sideLength) {
    return sideLength * sideLength;
}

let sideLengths = [2, 4, 6, 8];

let areas = sideLengths.map(calculateArea);

console.log(areas); 
