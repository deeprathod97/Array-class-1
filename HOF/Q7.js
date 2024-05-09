function calculateCube(num) {
    return num * num * num;
}
let inputArray = [1, 2, 3, 4];
let cubesArray = inputArray.map(calculateCube);

console.log(cubesArray); 