let ages = [25, 32, 42, 19, 50];
let oldestAge = ages[0];
for (let i = 1; i < ages.length; i++) {
    if (ages[i] > oldestAge) {
       oldestAge = ages[i];
    }
}
console.log("The oldest age is: " + oldestAge);