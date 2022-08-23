
// Write a function to get the count of each character in a given array.
function getStringCount(str) {
    return str.split('').reduce((acc, curr) => {
        if (!(curr in acc)) {
            acc = { ...acc, [curr]: 1 }
        } else {
            acc = { ...acc, [curr]: acc[curr] + 1 }
        }
        return acc
    }, {});
};

// Write a function that returns true when a palindrome word given & returns false otherwise
function palindrome(str) {
    const halfLength = Math.floor(str.length / 2);
    const reversed = str.split('').reverse().join('');
    return str.slice(0, halfLength) === reversed.slice(0, halfLength) ? true : false
};
