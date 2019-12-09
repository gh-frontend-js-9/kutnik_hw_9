document.getElementById("food").setAttribute("value", Math.random() * (130 - 70) + 70);
document.getElementById("clean").setAttribute("value", Math.random()  * (130 - 70) + 70);
document.getElementById("happiness").setAttribute("value", Math.random()  * (130 - 70) + 70);
document.getElementById("health").setAttribute("value", Math.random() * (130 - 70) + 70);
document.getElementById("socialization").setAttribute("value", Math.random() * (130 - 70) + 70);
document.getElementById("money").setAttribute("value", Math.random() * (130 - 70) + 70);

btn_food.onclick = function() {
    document.getElementById("food").setAttribute("value",  food.value  + 25);
    document.getElementById("clean").setAttribute("value",  clean.value  - 15);
    if (clean.value <= 0) { 
        return alert("Сat is dead");
    }
}

btn_clean.onclick = function() {
    document.getElementById("clean").setAttribute("value",  clean.value  + 20);
    document.getElementById("happiness").setAttribute("value",  happiness.value  - 10);
    if (happiness.value <= 0) {
        return alert("Сat is dead");
    } 
}

btn_happiness.onclick = function () {
    document.getElementById("happiness").setAttribute("value", happiness.value  + 15);
    document.getElementById("food").setAttribute("value", food.value  - 10);
    if (food.value <= 0) { 
        return alert("Сat is dead");
    }   
}

btn_doctor.onclick = function () {
    document.getElementById("health").setAttribute("value", health.value  + 15);
    document.getElementById("money").setAttribute("value", money.value  - 10);
    if (money.value <= 0) { 
        return alert("Сat is dead");
    }   
}

btn_bar.onclick = function () {
    document.getElementById("socialization").setAttribute("value", socialization.value  + 15);
    document.getElementById("food").setAttribute("value", food.value  + 10);
    document.getElementById("money").setAttribute("value", money.value  - 15);
    document.getElementById("health").setAttribute("value", health.value  - 10);
    if (money.value <= 0) { 
        return alert("Сat is dead");
    } else if (health.value <= 0) {
        return alert("Сat is dead");
    }
}

btn_work.onclick = function () {
    document.getElementById("socialization").setAttribute("value", socialization.value  -20);
    document.getElementById("food").setAttribute("value", food.value  - 10);
    document.getElementById("money").setAttribute("value", money.value  + 50);
    document.getElementById("health").setAttribute("value", health.value  - 10);
    if (food.value <= 0) { 
        return alert("Сat is dead");
    } else if (health.value <= 0) {
        return alert("Сat is dead");
    }else if (socialization.value <= 0) {
        return alert("Сat is dead");
    }
}

btn_work.onclick = function () {
    document.getElementById("socialization").setAttribute("value", socialization.value  -20);
    document.getElementById("food").setAttribute("value", food.value  - 10);
    document.getElementById("money").setAttribute("value", money.value  + 50);
    document.getElementById("health").setAttribute("value", health.value  - 10);
    if (food.value <= 0) { 
        return alert("Сat is dead");
    } else if (health.value <= 0) {
        return alert("Сat is dead");
    }else if (socialization.value <= 0) {
        return alert("Сat is dead");
    }
}

btn_byfood.onclick = function () {
    document.getElementById("food").setAttribute("value", food.value  + 20);
    document.getElementById("money").setAttribute("value", money.value  - 20);
    if (money.value <= 0) { 
        return alert("Сat is dead");
    }
}

btn_business.onclick = function () {
    document.getElementById("socialization").setAttribute("value", socialization.value  +20);
    document.getElementById("health").setAttribute("value", health.value  - 100);
    document.getElementById("money").setAttribute("value", money.value  + 100);
    document.getElementById("happiness").setAttribute("value", happiness.value  + 100);
    if (health.value <= 0) {
        return alert("Сat is dead");
        
    }
}

let foodId = setInterval(() => document.getElementById("food")
.setAttribute("value", food.value * 1 -5), 5000);

let cleanId = setInterval(() => document.getElementById("clean")
.setAttribute("value", clean.value * 1 -5), 5000);

let happinessId = setInterval(() => document.getElementById("happiness")
.setAttribute("value", happiness.value * 1 -5), 5000);

let healthId = setInterval(() => document.getElementById("health")
.setAttribute("value", health.value * 1 -5), 5000);

let socializationId = setInterval(() => document.getElementById("socialization")
.setAttribute("value", socialization.value * 1 -5), 5000);

let moneyId = setInterval(() => document.getElementById("money")
.setAttribute("value", money.value * 1 -5), 5000);
