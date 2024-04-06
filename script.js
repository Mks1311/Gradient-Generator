//Random Colour Code Generator
const RandomColour = function () {
    const hex = "0123456789ABCDEF";
    let colour = "#";
    for (let i = 0; i < 6; i++) {
        colour += hex[Math.floor((Math.random() * 16))];
    }
    return colour;
}

//Random Deg Generator
const RandomDeg = function () {
    let deg = Math.floor(Math.random() * 360);
    return deg + "deg";
}

//At startUp
const canvas = document.querySelector(".canvas");
let gradient = document.querySelector("#Linear");
let direction = document.querySelector("#Up");
let style = document.querySelector("#Linear").id;
let color1 = RandomColour();
let color2 = RandomColour();
let circle = document.createElement("span");
let RadialFlag = false;
let DirectionBtns = document.querySelector("#case3")
document.querySelector("#clr1").value = color1;
document.querySelector("#clr2").value = color2;
//...
gradient.setAttribute("style", "background-color: rgb(61,72,83)");
direction.setAttribute("style", "background-color: rgb(61,72,83)");
canvas.style.background = `linear-gradient(${color1},${color2})`;
// circle.style.opacity=0;
// circle.setAttribute("style","cursor:pointer");

//Style Selector
let PrevGradient = gradient;
let styles = document.querySelectorAll(".style");
styles.forEach(function (i) {
    i.addEventListener("click", function (e) {
        if (PrevGradient) PrevGradient.removeAttribute("style");
        const styleId = e.target;
        styleId.setAttribute("style", "background-color: rgb(61,72,83)");
        PrevGradient = e.target;
        style = e.target.id;
        const span = document.querySelector(".case3")
        if (style === "Radical") {
            slider1.setAttribute("style", "opacity:0.5; -moz-opacity:0.5; filter:alpha(opacity=50)");
            RadialFlag = true;
            span.appendChild(circle);

            // circle.style.backgroundImage = "url('images/circle.png')";
            circle.innerHTML = "<img src='images/circle.png'>";
            circle.classList.add("buttons", "directions", "case3");
            circle.id = "circle";
            if (slider1.classList.contains("active")) {
                slider1.classList.remove("active");
                deg_val.setAttribute("disabled", "");
                btn1.setAttribute("style", "cursor:pointer");
                let box1 = document.querySelector(".case3");
                box1.classList.toggle("on");
                MannualFlag = false;
                let box = document.querySelectorAll(".case2");
                box.forEach(function (i) {
                    i.classList.toggle("on")
                })
                deg_val.value = "";
            }
            slider1.style.cursor = "unset";

        }
        else {
            if (slider1.classList.contains("active")) {
                deg_val.removeAttribute("disabled");
            }
            RadialFlag = false;
            const spanChild = span.lastChild;
            if (spanChild.id === "circle") span.removeChild(spanChild);
            slider1.removeAttribute("style");
            slider1.style.cursor = "pointer";

        }
        GradientGiver();
    });
});


//Direction Selector
let DirectionValue = "Up";
//Toggle Btn

let btn1 = document.querySelector(".directions");
btn1.setAttribute("style", "cursor:pointer");
let deg_val = document.querySelector("#deg");
deg_val.setAttribute("disabled", "");
let MannualFlag = false;
let slider1 = document.querySelector('.slider1')
slider1.style.cursor = "pointer";
const auto = document.querySelectorAll(".autoDeg");
auto.forEach(function(i){
    i.setAttribute("disabled","");
})

slider1.addEventListener('click', function (e) {
    if (RadialFlag === false) {
        console.log(RadialFlag);
        let slider = e.target;
        if (slider.classList.contains("active")) {
            slider.classList.remove("active");
            deg_val.value = "";
            deg_val.setAttribute("disabled", "");
            MannualFlag = false;
            btn1.setAttribute("style", "cursor:pointer");
            direction.setAttribute("style", "background-color: rgb(61,72,83)");
            if (PrevDirection) PrevDirection.removeAttribute("style");
            PrevDirection = direction;
            DirectionValue = "Up";
            document.querySelector("#Up").setAttribute("style", "background-color: rgb(61,72,83)");
            auto.forEach(function(i){
                i.style.cursor="unset";
                i.setAttribute("disabled","");
            })
            autoCheck.checked=false;
            GradientGiver();


        } else {
            slider.classList.add("active");
            deg_val.removeAttribute("disabled");
            MannualFlag = true;
            btn1.removeAttribute("style");
            auto.forEach(function(i){
                i.style.cursor="pointer";
                
                i.removeAttribute("disabled");
            })
        }
        let box = document.querySelectorAll(".case2");
        box.forEach(function (i) {
            i.classList.toggle("on")
        })
        let box1 = document.querySelector(".case3");
        box1.classList.toggle("on");
    }
});



deg_val.addEventListener("change", function () {
    if (MannualFlag === true) {
        DirectionValue = deg_val.value + "deg";
        GradientGiver();
    }
});

let PrevDirection = direction;
let directions = document.querySelectorAll(".directions");
console.log(directions);
directions.forEach(function (i) {
    i.addEventListener("click", function (e) {
        if (MannualFlag === false) {
            if (PrevDirection) PrevDirection.removeAttribute("style");
            DirectionValue = e.target.id;
            e.target.setAttribute("style", "background-color: rgb(61,72,83)");
            PrevDirection = e.target;
            GradientGiver();
        }
    });

});

//Colours Selector
let btn2 = document.querySelector(".btn1");
let RandomClrBtn = false;
let interval_val = document.querySelector("#interval-val");
interval_val.setAttribute("disabled", "");
let clr1 = document.querySelector("#clr1");
let clr2 = document.querySelector("#clr2");
let clr = document.querySelectorAll(".clr");
let canvas_display = canvas.querySelector("#canvas-text");
let newBtn = document.querySelector(".generateBtn");
let generateFlag = true;


newBtn.setAttribute("style", "cursor:pointer");
canvas.addEventListener("click", function () {
    stop();
});
clr.forEach(function (i) {
    i.setAttribute("style", "cursor:pointer");
});


//Toggle Button2
document.querySelector('.slider2').addEventListener('click', function (e) {
    let slider = e.target;
    if (slider.classList.contains("active")) {
        slider.classList.remove("active");
        interval_val.value = ""
        interval_val.setAttribute("disabled", "");
        btn2.removeAttribute("style");
        RandomClrBtn = false;
        stop();
        newBtn.setAttribute("style", "cursor:pointer");
        newBtn.setAttribute("disabled", "");
        generateFlag = true;
        // autoCheck.setAttribute("checked","false");
        
    } else {
        slider.classList.add("active");
        interval_val.removeAttribute("disabled");
        btn2.setAttribute("style", "cursor:pointer");
        RandomClrBtn = true;
        newBtn.removeAttribute("style");
        newBtn.removeAttribute("disabled");
        generateFlag = false;
    }
    let box = document.querySelectorAll(".case1");
    box.forEach(function (i) {
        i.classList.toggle("on")
    })
    let box1 = document.querySelector(".case4");
    box1.classList.toggle("on");
});


//Stop auto generator
let change;
const stop = function () {
    console.log("stoped");
    clearInterval(change);
    clr1.removeAttribute("disabled");
    clr2.removeAttribute("disabled");
    canvas_display.innerHTML = "";
}


//Auto Gradient Generator
document.querySelector("#start").addEventListener("click", function () {
    if (RandomClrBtn) {
        const changeColour = function () {
            console.log(DirectionValue);
            color1 = RandomColour();
            color2 = RandomColour();
            document.querySelector("#clr1").value = color1;
            document.querySelector("#clr2").value = color2;
            GradientGiver();
            console.log("started");
            clr1.setAttribute("disabled", "");
            clr2.setAttribute("disabled", "");
            canvas_display.innerHTML = "Cick anywhere to Stop!";
        }
        change = setInterval(changeColour, interval_val.value == "" ? 1000 : (interval_val.value * 1000));
    }
});


//Change Gradient by value from colour picker
clr1.addEventListener("input", function () {
    color1 = clr1.value;
    GradientGiver();
});
clr2.addEventListener("input", function () {
    color2 = clr2.value;
    GradientGiver();
});



//Generate New Button
newBtn.addEventListener("click", function () {
    if (generateFlag) {
        stop();
        color1 = RandomColour();
        color2 = RandomColour();
        document.querySelector("#clr1").value = color1;
        document.querySelector("#clr2").value = color2;
        GradientGiver();
    }
});


//Get CSS Syntax
let get_css = document.querySelector("#get-css");
console.log(get_css);
get_css.addEventListener("click", function () {
    let inputField;
    if (DirectionValue === "Up") inputField = `background: linear-gradient(${color1},${color2})`;
    else inputField = `background: linear-gradient(${DirectionValue},${color1},${color2})`;
    navigator.clipboard.writeText(inputField)
        .then(() => {
            alert("Copied to clipboard: " + inputField);
        })
        .catch((error) => {
            console.error("Error copying to clipboard:", error);
        });
});

//Get JS Syntax
let get_js = document.querySelector("#get-js");
console.log(get_css);
get_js.addEventListener("click", function () {
    let inputField;
    if (DirectionValue === "Up") inputField = `.style.background = linear-gradient(${color1},${color2})`;
    else inputField = `.style.background = linear-gradient(${DirectionValue},${color1},${color2})`;
    navigator.clipboard.writeText(inputField)
        .then(() => {
            alert("Copied to clipboard: " + inputField);
        })
        .catch((error) => {
            console.error("Error copying to clipboard:", error);
        });
});

//Gradient Giver
function GradientGiver() {
    if(autoCheck.checked===true){
        DirectionValue=RandomDeg();
        deg_val.value=DirectionValue.replace("deg","");
    }
    switch (style) {
        case "Linear":
            if (DirectionValue === "Up") canvas.style.background = `linear-gradient(${color1},${color2})`;
            else canvas.style.background = `linear-gradient(${DirectionValue},${color1},${color2})`;
            break;
        case "Conic":
            if (DirectionValue === "Up") canvas.style.background = `conic-gradient(from 0deg,${color1},${color2})`;
            else if (DirectionValue === "0deg") canvas.style.background = `conic-gradient(from 180deg,${color1},${color2})`;
            else canvas.style.background = `conic-gradient(from ${DirectionValue},${color1},${color2})`;
            break;
        case "Radical":
            console.log("in radical");
            switch (DirectionValue) {
                case "Up":
                    canvas.style.background = `radial-gradient(at center top,${color1},${color2})`;
                    break;
                case "0deg":
                    canvas.style.background = `radial-gradient(at center bottom,${color1},${color2})`;
                    break;
                case "270deg":
                    canvas.style.background = `radial-gradient(at right center,${color1},${color2})`;
                    break;
                case "90deg":
                    canvas.style.background = `radial-gradient(at left center,${color1},${color2})`;
                    break;
                case "225deg":
                    canvas.style.background = `radial-gradient(at right top,${color1},${color2})`;
                    break;
                case "135deg":
                    canvas.style.background = `radial-gradient(at left top,${color1},${color2})`;
                    break;
                case "315deg":
                    canvas.style.background = `radial-gradient(at right bottom,${color1},${color2})`;
                    break;
                case "45deg":
                    canvas.style.background = `radial-gradient(at left bottom,${color1},${color2})`;
                    break;
                case "circle":
                    canvas.style.background = `radial-gradient(${color1},${color2})`;
                    break;
            }
            break;
    }
}

// Direction Reset
function DirectionReset() {
    direction.setAttribute("style", "background-color: rgb(61,72,83)");
    if (PrevDirection) PrevDirection.removeAttribute("style");
    PrevDirection = direction;
    canvas.style.background = `linear-gradient(${color1},${color2})`;
    DirectionValue = "Up";
    document.querySelector("#Up").setAttribute("style", "background-color: rgb(61,72,83)");
}


//Auto Btn
const autoCheck = document.querySelector("#auto");
// if (slider1.classList.contains("active")) {
//     auto.setAttribute("disabled","");
// }
// else{
//     auto.removeAttribute("disabled");
// }
autoCheck.addEventListener("click",function(){
    if (autoCheck.checked) {
        deg_val.setAttribute("disabled", "");
    }
    else {
        deg_val.removeAttribute("disabled");
    }
});

