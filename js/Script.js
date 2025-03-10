console.log("calculator loading...");

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText === "C") {
      display.value = "";
    } else if (e.target.innerText === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Invalid Expression";
      }
    } else {
      display.value += e.target.innerText;
    }
  });
});
