let outputScreen = document.getElementById("first_container");
let btns = document.getElementsByClassName("grid-item");

function evaluateExpression() {
    try {
    let expression = outputScreen.textContent.replace(/×/g, '*').replace(/÷/g, '/');
    outputScreen.textContent = eval(expression) || "0";
    } catch {
        outputScreen.textContent = "Error";
    }
}

function handleClick(e) {
    let innerValue = e.target.textContent.trim();

 
    if (innerValue === "reset") {
        outputScreen.textContent = "0";
        return;
    }


    if (innerValue === "del") {
        outputScreen.textContent = outputScreen.textContent.slice(0, -1) || "0";
        return;
    }

    if (innerValue === "=") {
        evaluateExpression();
        return;
    }

    if (outputScreen.textContent === "0" && !["+", "-", "*", "/"].includes(innerValue)) {
        outputScreen.textContent = innerValue;
    } else {
        outputScreen.textContent += innerValue;
    }
}


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", handleClick);
}
