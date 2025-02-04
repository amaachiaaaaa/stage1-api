import axios from "axios";

// Function to check if a number is prime
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Function to check if a number is perfect
const isPerfect = (num) => {
    let sum = 1;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num && num !== 1;
};

// Function to check if a number is Armstrong
const isArmstrong = (num) => {
    num = Math.abs(num); // Take absolute value
    let sum = 0;
    let digits = num.toString().split(""), power = digits.length;
    digits.forEach(d => sum += Math.pow(parseInt(d), power));
    return sum === num;
};


// Function to get sum of digits
const getDigitSum = (num) => {
    const isNegative = num < 0; // Check if the original number is negative
    num = Math.abs(num); // Take absolute value
    let sum = num.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0);
    return isNegative ? -sum : sum; // Append minus sign if original number was negative
};


// Controller function
export const classifyNumber = async (req, res) => {
    const { number } = req.query;
    const num = Number(number);

    if (isNaN(num)) {
        return res.status(400).json({ number, error: true });
    }

    let properties = [];
    if (num % 2 !== 0) properties.push("odd");
    else properties.push("even");
    if (isArmstrong(num)) properties.push("armstrong");
    if (isPrime(num)) properties.push("prime");
    if (isPerfect(num)) properties.push("perfect");

    try {
        const factResponse = await axios.get(`http://numbersapi.com/${num}`);
        res.json({
            number: num,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties,
            digit_sum: getDigitSum(num),
            fun_fact: factResponse.data
        });


    } catch (error) {
        res.json({
            number: num,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties,
            digit_sum: getDigitSum(num),
            fun_fact: "No fact available"
        });
    }
};


