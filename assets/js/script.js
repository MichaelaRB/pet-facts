
var catFactUrl = "https://meowfacts.herokuapp.com/";
var dogImgUrl = "https://random.dog/woof.json";
var dogTestUrl = "https://dogapi.dog/api/v2/facts";
var catTestUrl = "https://shibe.online/api/cats?count=1&urls=true&httpsUrls=false";
var catFact = "";
var dogFact = "";
var catImgUrl;



fetch(catFactUrl)
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
        dogUrl = data.url;
    });
fetch(dogTestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        dogFact = data.data[0].attributes.body;
    });
fetch(catTestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        catImgUrl = String(data[0]);
    });

setTimeout(() => {
    var catImg = document.getElementById("catImg");
    var catEl = document.getElementById("catFact");
    var dogImg = document.getElementById("dogImg");
    var dogEl = document.getElementById("dogFact");
    catImg.setAttribute("src",catImgUrl);
    catEl.textContent = catFact;
    dogImg.setAttribute("src",dogUrl);
    dogEl.textContent = dogFact;
    
}, 500); 
