function changeBackgroundColor(){
    if(document.body.style.backgroundColor == ""){
        document.body.style.backgroundColor = "silver";
        document.querySelector('.btn').textContent = "BRIGHT MODE";
    }
    else if(document.body.style.backgroundColor == "silver" ){
        document.body.style.backgroundColor = ""; //resets previous background color
        document.querySelector('.btn').textContent = "NIGHT MODE";
    }
}

var quotes = [
    ["Artificial Intelligence is the new electricity.","Andrew NG"],
    ["Predicting the future isn’t magic, it’s artificial intelligence.","Dave Waters"],
    ["If people trust artificial intelligence (AI) to drive a car, people will most likely trust AI to do your job.","Dave Waters"],
    ["Artificial intelligence will digitally disrupt all industries.  Don’t be left behind.","Dave Waters"],
    ["Karma of humans is AI.","Raghu Venkatesh"],
    ["Self-driving vehicles, automatically choosing the most efficient route… Artificial Intelligence will dramatically improve logistics.","Dave Waters"],
    ["Artificial intelligence will be part of the home just like the light bulb.","SupplyChainToday.com"]
];

var date = new Date();
var currentDay = date.getDay();
var currentIndex = currentDay;

function changeQuote(step){
     var quote = document.querySelector('#quote');
    var quoter = document.querySelector('#quoter');
    if(step == 1 && currentIndex==6){
        currentIndex = 0;
    }
    else if(step == 1){
        currentIndex++;
    }
    else if(step == -1 && currentIndex == 0){
        currentIndex = 6;
    }
    else{
        currentIndex--;
    }
    quote.innerHTML = quotes[currentIndex][0];
    quoter.innerHTML = quotes[currentIndex][1];
}

function difDay(){
    if(currentDay == 0){
        document.querySelector('#quote').classList.add("sunday-mode");
        document.getElementById('styledP').style.fontVariant = "small-caps";
    }
    else if(currentDay == 1){
        document.querySelector('#quote').classList.add("monday-mode");
        document.querySelector('header').style.backgroundColor = "LightSlateGray";
    }
    else if(currentDay == 2){
        document.querySelector('#quote').classList.add("tuesday-mode");
        document.querySelector('header').style.backgroundColor = "LightSteelBlue";
    }
    else if(currentDay == 3){
        document.querySelector('#quote').classList.add("wednesday-mode");
        document.getElementById('styledP').style.fontStyle = "italic";
    }
    else if(currentDay == 4){
        document.querySelector('#quote').classList.add("thursday-mode");
        document.getElementById('bigHeader').style.fontVariant = "small-caps";
    }
    else if(currentDay == 5){
        document.querySelector('#quote').classList.add("friday-mode");
        document.getElementById('wannaBeDif').style.textDecoration ="underline";
    }
    else if(currentDay == 6){
        document.querySelector('#quote').classList.add("saturday-mode");
        document.getElementById('wannaBeDif').style.letterSpacing = "3px";
    } 
    
}

window.onload = difDay;