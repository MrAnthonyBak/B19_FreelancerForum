const freelancers = [
    { Name: "Alice", Occupation: "Writer", Starting_Price: 30 },
    { Name: "Bob", Occupation: "Teacher", Starting_Price: 50 },
    { Name: "Carol", Occupation: "Programmer", Starting_Price: 70 },
];


const newFreelancers = [
    { Name: "Dr. Slice", Occupation: "Gardener", Starting_Price: 25 },
    { Name: "Dr. Pressure", Occupation: "Programmer", Starting_Price: 51 },
    { Name: "Prof. Possibility", Occupation: "Teacher", Starting_Price: 43 },
    { Name: "Prof. Prism", Occupation: "Teacher", Starting_Price: 81 },
    { Name: "Dr. Impulse", Occupation: "Teacher", Starting_Price: 43 },
    { Name: "Prof. Spark", Occupation: "Programmer", Starting_Price: 76 },
    { Name: "Dr. Wire", Occupation: "Teacher", Starting_Price: 47 },
    { Name: "Prof. Goose", Occupation: "Driver", Starting_Price: 72 },
];


function init() {

    const root = document.querySelector("#root");
    root.style.textAlign = "center";

    const h1 = document.createElement("h1");
    h1.innerHTML = "Freelancer Forum";
    root.append(h1);

    const p = document.createElement("p");
    p.innerHTML = "The average starting price is: ";
    root.append(p);

    const p2 = document.createElement("p2");
    p2.innerHTML = "Average Price";        // show average price here  "calcAveragePrice"
    root.append(p2);

    const h2 = document.createElement("h2");
    h2.innerHTML = "Available Freelancers";
    root.append(h2);


// create table
    const freelancersTable = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");


// create table headers
    for (let key of Object.keys(freelancers[0])) {
        const th = document.createElement("th");
        th.innerText = key;

        thead.appendChild(th);
    }


// add thead & tbody
    freelancersTable.appendChild(thead);
    freelancersTable.appendChild(tbody);

    root.appendChild(freelancersTable);

    renderFreelancersTable();
}


function renderFreelancersTable() {

    const freelancersTable = document.querySelector("tbody");

    const freelancersElements = freelancers.map((freelancer) => {
        const row = document.createElement("tr");

        const f_name = document.createElement("td");
        f_name.innerHTML = freelancer.Name;

        const f_occu = document.createElement("td");
        f_occu.innerHTML = freelancer.Occupation;

        const f_sPrice = document.createElement("td");
        f_sPrice.innerHTML = freelancer.Starting_Price;

        row.appendChild(f_name);
        row.appendChild(f_occu);
        row.appendChild(f_sPrice);

        return row;
    });

    freelancersTable.replaceChildren(...freelancersElements);
}


const addNewFreelancer = () => {
    const newFreelancer = newFreelancers[Math.floor(Math.random() * newFreelancers.length)];
    freelancers.push(newFreelancer);
    renderFreelancersTable();
};


// average price formula (correct???) - how do I put it in with the "p" tag on top???
function calcAveragePrice() {
    const totalPrice = freelancers.reduce((total, freelancer) => total + freelancer.Starting_Price, 0);
    const averagePrice = totalPrice / freelancers.length;
    console.log(averagePrice);
}



calcAveragePrice();

setInterval(addNewFreelancer, 3000);

init();