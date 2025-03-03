document.querySelectorAll(".button").forEach(btn => {
    btn.addEventListener("click", function () {
        document.getElementById("fname").value += this.innerText;
    });
});


