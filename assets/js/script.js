
var catUrl = "https://meowfacts.herokuapp.com/";
var fact = "";



fetch(catUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        fact = data.data[0];
    });

var catUrl = "http://placekitten.com/200/300"

setTimeout(() => {
    var catImg = document.getElementById("cat");
    var catFact = document.getElementById("catFact");
    catImg.setAttribute("src",catUrl);
    catFact.textContent = fact;
    
}, 200); 
