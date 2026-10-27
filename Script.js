const params = new URLSearchParams(location.search);

let name = params.get("name");

if (!name || name.trim() === "") {
  name = "Guest";
}

const button = document.querySelector("#Greetme");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  const hour = new Date().getHours();

  let greeting;

  if (hour >= 5 && hour < 12) {
    greeting = "Good morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good afternoon";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Good evening";
  } else {
    greeting = "Good night";
  }

  result.textContent = `${greeting}, ${name}!`;
  button.style.display = "none";
});
