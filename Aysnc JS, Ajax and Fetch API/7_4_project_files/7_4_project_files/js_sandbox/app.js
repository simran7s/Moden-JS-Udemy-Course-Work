// JSON COMMENTS:
// In JSON, we have to wrap keys and values in " ", except for numbers values ofc.
// Single quotes dont work.
// Validate JSON using https://jsonlint.com/
// COMMENTS NOT ALLOWED IN JSON


// FOR CUSTOMER

document.getElementById('button1').addEventListener('click', loadCustomer);

// FOR CUSTOMERS
document.getElementById('button2').addEventListener('click', loadCustomers);

// Load Single Customer
function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);

            // We need to turn JSON string into readable text in JS
            // Allows us to read response Text
            const customer = JSON.parse(this.responseText);

            const output = `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>
            `;

            document.getElementById('customer').innerHTML = output;
        }
    }

    xhr.send();
}

// LOAD CUSTOMERS

function loadCustomers(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);

            // We need to turn JSON string into readable text in JS
            // Allows us to read response Text
            const customers = JSON.parse(this.responseText);

            let output = '';

            customers.forEach(function (customer) {
                output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
                `;
            });
            document.getElementById('customers').innerHTML = output;
        }
    }

    xhr.send();
}