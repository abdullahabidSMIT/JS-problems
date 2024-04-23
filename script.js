// Code for palendrome 
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let start = 0;
    let end = str.length - 1;
    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

function checkPalindrome() {
    const inputString = document.getElementById("inputString").value;
    const resultElement = document.getElementById("result");
    if (inputString.trim() === "") {
        resultElement.textContent = "Please enter a string.";
    } else {
        if (isPalindrome(inputString)) {
            resultElement.textContent = `"${inputString}" is a palindrome.`;
        } else {
            resultElement.textContent = `"${inputString}" is not a palindrome.`;
        }
    }
}


function findMissingNumber(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    for (let i = 0; i < sortedNumbers.length - 1; i++) {
        if (sortedNumbers[i + 1] - sortedNumbers[i] !== 1) {
            return sortedNumbers[i] + 1;
        }
    }
    return undefined;
}

// these results will show in inspect of browser
console.log(findMissingNumber([11, 12, 14, 15, 16, 18, 19, 20])); // Output: 13
console.log(findMissingNumber([1, 2, 3, 5])); // Output: 4
console.log(findMissingNumber([10, 11, 12, 14, 15])); // Output: 13
console.log(findMissingNumber([1, 3, 4, 5])); // Output: 2
console.log(findMissingNumber([])); // Output: undefined


// this is code for mininum number and maximum number
function findMinMax(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return { min: undefined, max: undefined };
    }

    let min = numbers[0];
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return { min, max };
}

function handleSubmit(event) {
    event.preventDefault();
    const numbersInput = document.getElementById("numbers").value;
    const numbersArray = numbersInput.split(',').map(Number);
    const result = findMinMax(numbersArray);
    document.getElementById("min-max-result").textContent = `Minimum: ${result.min}, Maximum: ${result.max}`;
}