function updatePersonList() {
    fetch(urlAllList, {method: "GET"})
            .then(res=> res.json())
            .then(data => {
                var persons = "";
                persons += " <thead>";
                persons += "<tr>";
                persons += "<th>Name</th>";
                persons += "<th>Last Name</th>";
                persons += "<th>Phone</th>";
                persons += "</tr>";
                persons += " </thead>";
                for (let o of data) {
                    persons += '<tr>';
                    persons += '<td>' + o.fname + '</td>';
                    persons += '<td>' + o.lname + '</td>';
                    persons += '<td>' + o.phone + '</td>';
                    persons += '</tr>';
                }

                persons += "</table>";
                document.getElementById("content").innerHTML = persons;


            });
}

//************************************************************************************************************** */

var myElement = document.getElementById("intro");

document.getElementById("demo").innerHTML = "The text from the intro paragraph is " + myElement.innerHTML;

fetch("https://api.chucknorris.io/jokes/random")
.then(res=>res.json())
.then(data=>document.getElementById("content").innerHTML = "<h1>"+data.value+"</h1>")
//****************************************************************************************** */

const urlString = "https://jsonplaceholder.typicode.com/users/";
const urlAll = "https://jsonplaceholder.typicode.com/users";
var id = document.getElementById('id');
console.log(id);

function fetchUser() {
    fetch(urlString + id.value)
        .then(res => res.json())
        .then(data => {
                var all =
                    "<p>" + "Name: " + data.name + "</p>";
                all += "<p>" + "Phone: " + data.phone + "</p>" + "<br/>";
                all += "<b>" + "Address" + "</b>";

                all += "<p>" + "Street: " + data.address.street + "</p>";
                all += "<p>" + "Suite: " + data.address.suite + "</p>";
                all += "<p>" + "City: " + data.address.city + "</p>";
                all += "<p>" + "Zipcode: " + data.address.zipcode + "</p>";
                all += "<p>" + "Geo (lat, long): " + data.address.geo.lat + ", " + data.address.geo.lng + "</p>"

                document.getElementById('user').innerHTML = all;
            }

        )
};

function fetchAllUser() {
    fetch(urlAll)
        .then(res => res.json())
        .then(data => {
            var users = "";
            
            data.forEach(function (key) {
                users += "<tr>";
                users += "<td>" + key.name + "</td>";
                users += "<td>" + key.phone + "</td>";
                users += "</tr>";
            });
            
            document.getElementById("getAll").innerHTML = users;


        })
}


document.getElementById('btn').addEventListener('click', fetchUser);
document.getElementById('btn2').addEventListener('click', fetchAllUser);



// press enter on keyboard
document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13 || event.which === 13) {
        fetchUser();
    }
});

//*********************************************************************************************//

fetch(url)
.then(function(res){return res.json();})
.then(function(data){console.log(data.name);});

const promise1 = fetch('https://swapi.co/api/people/2');
const promise2 = promise1.then(function(response) {return response.json();})
promise2.then(function(data) {console.log(data.name);});















