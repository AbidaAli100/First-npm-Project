const target = document.querySelector("#app"); //stored the div's information in a constant called "target"

fetch("https://jsonplaceholder.typicode.com/users") //get the API by using "fetch"
    .then(function(res) { //promise
        return res.json() // will return the response in a json form
    }).then(function(data) { // will get the data
        console.log(data) //to check if we have access to the data
        let displayData = ""; // variable to store the data which e have to display on the browser
        data.forEach(function(items) { //looped over the items
            displayData += `<div>
            <h2> Name: ${items.name}</h2>
            <h3> Email Address :${items.email}</h3>
            </div>`
                //get all the data that which we need 
        })
        target.innerHTML = displayData; //will render the data on the browser
    })