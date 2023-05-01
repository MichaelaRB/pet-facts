var catFactUrl = "https://meowfacts.herokuapp.com/";
var dogFactUrl = "https://dogapi.dog/api/v2/facts";
var dogImgUrl = "https://random.dog/woof.json";
var catImgUrl = "https://shibe.online/api/cats?count=1&urls=true&httpsUrls=false";
var catFact = "";
var dogFact = "";
var imgUrl = "";
var catButton = document.getElementById("catbtn");
console.log(catButton);
catButton.addEventListener("click", function(){
//fetching the cat fact and image

fetch(catFactUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        catFact = data.data[0];
    });
fetch(catImgUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        imgUrl= String(data[0]);
    });


setTimeout(() => {
        var imgEl = document.getElementById("petImg");
        var catEl = document.getElementById("petFact");
    
        imgEl.setAttribute("src",imgUrl);
        catEl.textContent = catFact;
    }, 500);
});

//fetching the dog fact and image

fetch(dogImgUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        imgUrl = data.url;
    });
fetch(dogFactUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        dogFact = data.data[0].attributes.body;
    });

setTimeout(() => {
    var imgEl = document.getElementById("petImg");
    var dogEl = document.getElementById("petFact");

    imgEl.setAttribute("src",imgUrl);
    dogEl.textContent = dogFact;
}, 500)


 

