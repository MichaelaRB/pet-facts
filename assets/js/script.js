var catFactUrl = "https://meowfacts.herokuapp.com/";
var dogFactUrl = "https://dogapi.dog/api/v2/facts";
var dogImgUrl = "https://random.dog/woof.json";
var catImgUrl = "https://shibe.online/api/cats?count=1&urls=true&httpsUrls=false";
var catFact = "";
var dogFact = "";
var imgUrl = "";
var catButton = document.getElementById("catBtn");
var factList = document.getElementById("savedFacts"); 
var saveButton = document.getElementById("saveFact");

catButton.addEventListener("click", function(){
//fetching the cat fact and image
    factList.innerHTML = ""; 
    saveButton.setAttribute("style","display:inline");
    fetch(catFactUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        catFact = data.data[0];
        fetch(catImgUrl)
            .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            imgUrl= String(data[0]);
            var imgEl = document.getElementById("petImg");
            var catEl = document.getElementById("petFact");
            imgEl.setAttribute("src",imgUrl);4
            imgEl.setAttribute("style", "display: in-line");
            catEl.textContent = catFact;
        });
    });
});
//fetching the dog fact and image
var dogButton = document.getElementById("dogBtn");
dogButton.addEventListener("click", function() {
    saveButton.setAttribute("style","display:inline");
    factList.innerHTML = "";
    fetch(dogImgUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        imgUrl = data.url;
        fetch(dogFactUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            dogFact = data.data[0].attributes.body;
            var imgEl = document.getElementById("petImg");
            var dogEl = document.getElementById("petFact");
            //do not change the image if the url we get back ends in .mp4, as they cannot display
            var img = imgUrl.split(".");
            if(img[2] !== "mp4") imgEl.setAttribute("src",imgUrl);
            if(img[2] === "mp4") imgEl.setAttribute("src","./assets/images/fact-display-img.jpg");
            imgEl.setAttribute("style", "display: in-line");
            dogEl.textContent = dogFact;
        });
    });
});



saveButton.addEventListener("click", function(){
    var factEl = document.getElementById("petFact");
    var fact = factEl.textContent;
    var factArray = [];
    if(localStorage.getItem("facts") !== null) factArray = JSON.parse(localStorage.getItem("facts"));
    
    factArray.unshift(fact);
    if(factArray.length = 26) factArray.pop();
    localStorage.setItem("facts",JSON.stringify(factArray));
});
1

var displayButton = document.getElementById("displayFact");
var savedFacts = [];


displayButton.addEventListener("click", function(){
    var imgEl = document.getElementById("petImg");
    factList.innerHTML = "";
    imgEl.setAttribute("src","./assets/images/fact-display-img.jpg");

    var factEl = document.getElementById("petFact");
    factEl.textContent = "";

    savedFacts = JSON.parse(localStorage.getItem("facts"));

    for(var i = 0; i<savedFacts.length; i++) {
        var fact = document.createElement("li");
        fact.textContent = savedFacts[i];
        factList.appendChild(fact);
        fact.setAttribute("style", "font-size: 15px; margin-bottom: 7px; padding-left: 5px;");
    }
});