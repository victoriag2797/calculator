//Makes each button print their input into the output box when clicked
document.querySelectorAll(".button").forEach(btn => {
    btn.addEventListener("click", function () {
        document.getElementById("fname").value += this.innerText;
    });
});

//Creates a function called butenter when the enter button is clicked
enterbut.addEventListener("click", butenter);

//Runs butenter function
function butenter (){
  //Make it so the result doesn't clear by itself
  event.preventDefault();
  //Evalutes the value of what is in the fname
  let inputValue = document.getElementById("fname").value;

  //Ensures there is a valid input
  try {
    let result = new Function('return ' + inputValue)();
    document.getElementById("fname").value = result;
  //If not valid it will not return 
  } catch (e) {
    console.error("Invalid input: ", e);
    document.getElementById("fname").value = result;
  }
} 

const pulloutbar = document.getElementById('pulloutbar');

pulloutbar.addEventListener("click", barpullout);

function barpullout (){
  pulloutbar.innerHTML = 
  "<button><</button>";
}
