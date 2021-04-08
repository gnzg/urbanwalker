function diceRoll(top, bottom = undefined) {
    // Roll dice in a specific range
    if (top && bottom < top) {
        console.log('Dice roll...');
        return Math.ceil((Math.random() * (top - bottom)) + bottom);
    // Simple dice roll when only top boundary is provided
    } else if (top && !bottom) {
        console.log('Dice roll...');
        return Math.ceil((Math.random() * top));
    }
    console.error('ERROR: DiceRoll parameters are invalid or missing!');
}

module.exports = diceRoll;
