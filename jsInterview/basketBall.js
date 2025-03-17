/**
 * @param {string[]} ops - List of operations
 * @return {number} - Sum of the scores
 */
var calPoints = function(ops) {
    let result = [];  // Use an array to store the score history
    for (let i = 0; i < ops.length; i++) {
        if (!isNaN(ops[i])) {
            // If it's a number, convert to integer and add to the result array
            result.push(parseInt(ops[i]));
        } else if (ops[i] === "+") {
            // If it's "+", sum the last two valid scores
            result.push(result[result.length - 1] + result[result.length - 2]);
        } else if (ops[i] === "D") {
            // If it's "D", double the last valid score
            result.push(result[result.length - 1] * 2);
        } else if (ops[i] === "C") {
            // If it's "C", remove the last valid score
            result.pop();
        }
    }

    // Sum up all the scores in the result array and return the total
    return result.reduce((sum, score) => sum + score, 0);
};

console.log(calPoints(["5", "2", "C", "D", "+"])); // Expected output: 30
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])); // Expected output: 27

