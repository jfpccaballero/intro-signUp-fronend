let inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    let elem = document.createElement("div");
    elem.id = "error";
    elem.style.display = "none";
    input.after(elem);
    let iconError = document.createElement("img");
    iconError.id = "error-icon";
    iconError.src = "images/icon-error.svg";
    iconError.style.display = "none";
    input.after(iconError);

    input.oninvalid = (e) => {
        e.preventDefault();
        if(input.value === "") {
            if (!e.target.validity.valid) {
                elem.style.display = "block";
                iconError.style.display = "block";
                elem.textContent = input.placeholder + " cannot be empty";
                input.classList.add("invalid");
            } 
        } else {
            if (input.id === "email") {
                elem.style.display = "block";
                iconError.style.display = "block";
                elem.textContent = "Looks like this is not an email";
                input.classList.add("invalid");
            }
        }
    }

    input.onclick = () => {
        if (elem.style.display === "block" && iconError.style.display === "block") {
            input.classList.remove("invalid");
            elem.style.display = "none";
            iconError.style.display = "none";
        }
    }
});