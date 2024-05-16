function calculateSavings(incomes, livingCost) {
    if (!Array.isArray(incomes)) {
        return "Error: Incomes should be an array.";
    }
    if (typeof livingCost !== "number") {
        return "Error: Living cost should be a number.";
    }

    let totalIncome = incomes.reduce((acc, income) => {
        if (typeof income !== "number") {
            throw new Error("Error: All elements in the incomes array should be numbers.");
        }
        if (income >= 3000) {
            income = income * 0.8; //20% tax
        }
        return acc + income;
    }, 0);

    let savings = totalIncome - livingCost;

    // Return result 
    if (savings < 0) {
        return "Earn more";
    } else {
        return `Save amount: ${savings}`;
    }
}

try {
    let incomes = [2500, 3000, 3500, 4000]; 
    let livingCost = 7000;
    let result = calculateSavings(incomes, livingCost);
    console.log(result);
} catch (error) {
    console.log(error.message);
}
