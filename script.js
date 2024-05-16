function calculateGrade() {
    // Get values from the form
    const math = parseFloat(document.getElementById('math').value);
    const science = parseFloat(document.getElementById('science').value);
    const english = parseFloat(document.getElementById('english').value);
    const history = parseFloat(document.getElementById('history').value);

    // Calculate the average
    const total = math + science + english + history;
    const average = total / 4;

    // Determine the letter grade
    let letterGrade = '';

    if (average >= 90) {
        letterGrade = 'A';
    } else if (average >= 80) {
        letterGrade = 'B';
    } else if (average >= 70) {
        letterGrade = 'C';
    } else if (average >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }

    // Display the result
    const result = `Average Score: ${average.toFixed(2)} - Grade: ${letterGrade}`;
    document.getElementById('result').textContent = result;
}
