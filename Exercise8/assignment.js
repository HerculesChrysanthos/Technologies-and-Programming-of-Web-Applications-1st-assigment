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

function showPassword(passtype) {
    var x = document.getElementById(passtype);
    if (x.type === "password") {
        x.type = "text";
    } 
    else {
        x.type = "password";
    }
}

function validateForm(){
    const username = document.querySelector('#username');
    const password = document.querySelector('#pass');
    const repassword = document.querySelector('#repass');
    const birthday = document.querySelector('#birthday');
    const fname = document.querySelector('#fname');
    const lname = document.querySelector('#lname');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const cs = document.querySelector('#cs');

    username.addEventListener('input', () => {
        username.setCustomValidity('');
        if(username.checkValidity()){
            username.classList.remove("invalid-attempt");
            username.classList.add("valid-attempt");
        }
    });
      
    username.addEventListener('invalid', () => {
        if(username.value === '') {
            username.setCustomValidity('Πληκτρολογήστε το username!');
        } else {
            username.setCustomValidity('Aπαιτούνται 8-16 πεζοί αγγλικοί χαρακτήρες. Προσπαθήστε ξανά!');
        }
        password.classList.remove("invalid-attempt");
        username.classList.add("invalid-attempt");
    });

    password.addEventListener('input', () => {
        password.setCustomValidity('');
        if(password.checkValidity()){
            password.classList.remove("invalid-attempt");
            password.classList.add("valid-attempt");
        }
    });

    password.addEventListener('invalid', () => {
        if(password.value === '') {
            password.setCustomValidity('Πληκτρολογήστε το password!');
        } else {
            password.setCustomValidity('Aπαιτούνται τουλάχιστον 8 αγλικοί χαρακτήρες(πεζοί και κεφαλαίοι). Προσπαθήστε ξανά!');
        }
        password.classList.add("invalid-attempt");
    });

    if(repassword.value != password.value){
        repassword.classList.add("invalid-attempt");
        repassword.setCustomValidity('Τα passwords είναι διαφορετικά. Προσπαθήστε ξανά!');
    }
    else{
        if(password.checkValidity()){
            repassword.classList.remove("invalid-attempt");
            repassword.classList.add("valid-attempt");
        }
        
        repassword.setCustomValidity('');
    }

    var birth = new Date(birthday.value);

    if((date.getYear() - birth.getYear()) < 18){
        birthday.classList.remove("valid-attempt");
        birthday.classList.add("invalid-attempt");
        birthday.setCustomValidity('Πρέπει να είστε άνω των 18 για να μπορέσετε να εγγραφείτε!');
    }
    else{
        if(birthday.checkValidity()){
            birthday.classList.remove("invalid-attempt");
            birthday.classList.add("valid-attempt");
        }
        
        birthday.setCustomValidity('');
    }

    fname.addEventListener('input', () => {
        fname.setCustomValidity('');
        if(fname.checkValidity()){
            fname.classList.remove("invalid-attempt");
            fname.classList.add("valid-attempt");
        }
    });
      
    fname.addEventListener('invalid', () => {
        if(fname.value === '') {
            fname.setCustomValidity('Πληκτρολογήστε το όνομά σας!');
        } else {
            fname.setCustomValidity('Επιτρέπονται μόνο χαρακτήρες. Προσπαθήστε ξανά!');
        }
        fname.classList.add("invalid-attempt");
    });

    lname.addEventListener('input', () => {
        lname.setCustomValidity('');
        if(lname.checkValidity()){
            lname.classList.remove("invalid-attempt");
            lname.classList.add("valid-attempt");
        }
    });
      
    lname.addEventListener('invalid', () => {
        if(lname.value === '') {
            lname.setCustomValidity('Πληκτρολογήστε το επίθετό σας!');
        } else {
            lname.setCustomValidity('Επιτρέπονται μόνο χαρακτήρες. Προσπαθήστε ξανά!');
        }
        lname.classList.add("invalid-attempt");
    });

    email.addEventListener('input', () => {
        email.setCustomValidity('');
        if(email.checkValidity()){
            email.classList.remove("invalid-attempt");
            email.classList.add("valid-attempt");
        }
    });
      
    email.addEventListener('invalid', () => {
        if(email.value === '') {
            email.setCustomValidity('Πληκτρολογήστε το email σας!');
        } else {
            email.setCustomValidity('Aπαιτείται κανονική διεύθυνση email. Προσπαθήστε ξανά!');
        }
        email.classList.add("invalid-attempt");
    });

    phone.addEventListener('input', () => {
        phone.setCustomValidity('');
        if(phone.checkValidity()){
            phone.classList.remove("invalid-attempt");
            phone.classList.add("valid-attempt");
        }
    });
      
    phone.addEventListener('invalid', () => {
        if(phone.value === '') {
            phone.setCustomValidity('Πληκτρολογήστε το τηλέφωνό σας!');
        } else {
            phone.setCustomValidity('Aπαιτείται κανονικός αριθμός τηλεφώνου. Προσπαθήστε ξανά!');
        }
        phone.classList.add("invalid-attempt");
    });

    cs.addEventListener('input', () => {
        cs.setCustomValidity('');
        if(cs.checkValidity()){
            cs.classList.remove("invalid-attempt");
            cs.classList.add("valid-attempt");
        }
    });
      
    cs.addEventListener('invalid', () => {
        if(cs.value === '') {
            cs.setCustomValidity('Πληκτρολογήστε τα χρόνια που ασχολείστε με την Πληροφορική!');
        }
        else{
            cs.setCustomValidity('Πληκτρολογήστε μόνο θετικό αριθμό!');
        }
        cs.classList.add("invalid-attempt");
    });
}

function successful(){
    alert("Η εγγραφή σας ολοκληρώθηκε επιτυχώς. Σύντομα θα επικοινωνήσουμε μαζί σας.");
}