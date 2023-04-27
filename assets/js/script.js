
var catUrl = "https://meowfacts.herokuapp.com/";
var dogImgUrl = "https://random.dog/woof.json";
var dogTestUrl = "https://dogapi.dog/api/v2/facts";
var catFact = "";
var dogImg = "";



fetch(catUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        catFact = data.data[0];
    });
fetch(dogImgUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        dogImg = data.url;
        console.log(data.url);
    });
fetch(dogTestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
var width = Math.floor(Math.random() * 700) + 400;
var height = Math.floor(Math.random() * 700) + 400;
var catUrl = "http://placekitten.com/" + width + "/" + height;

setTimeout(() => {
    var catImg = document.getElementById("cat");
    var catEl = document.getElementById("catFact");
    catImg.setAttribute("src",catUrl);
    catEl.textContent = catFact;
    
}, 200); 
