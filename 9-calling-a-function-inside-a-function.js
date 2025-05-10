function cutFruitPices(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPices(apples);
    const orangePieces = cutFruitPices(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}

