// Listen for Submit
document.getElementById('loan-form').addEventListener("submit", function (e) {

    //Hide Results
    document.getElementById("results").style.display = "none";

    // Loader
    document.getElementById("loading").style.display = "block";

    setTimeout(calculateResults, 1200);

    e.preventDefault();
});


// Calculate Results
function calculateResults() {
    // UI Vars
    const amount = document.getElementById("amount");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");
    const monthlyPayment = document.getElementById("monthly-payment");
    const totalPayment = document.getElementById("total-payment");
    const totalInterest = document.getElementById("total-interest");

    const principle = parseFloat(amount.value);
    const calcuatedInterest = parseFloat(interest.value / 100 / 12);
    const calcuatedPayments = parseFloat(years.value) * 12;

    // Compute Month Payments
    const x = Math.pow(1 + calcuatedInterest, calcuatedPayments);
    const monthly = (principle * x * calcuatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calcuatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calcuatedPayments) - principle).toFixed(2);
        document.getElementById("results").style.display = "block";
        document.getElementById("loading").style.display = "none";
    } else {
        document.getElementById("loading").style.display = "none";
        document.getElementById("results").style.display = "none";
        showError('Please check your numbers');
    }


}


// Show Error
function showError(error) {
    // Create a div
    const errorDiv = document.createElement('div');

    // Get Elements
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");

    // Add Class
    errorDiv.className = "alert alert-danger";

    // Create Text node and Append to Div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert Error Above heading
    /* 
    card == parent
    errorDiv == inserted item
    heading == the child of parent that will have inserted item, inserted before it 
    */
    card.insertBefore(errorDiv, heading);

    // Clear Error after 3 seconds
    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}