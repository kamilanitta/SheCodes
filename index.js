const alertFunction = (ev) => {
  ev.preventDefault();
  alert("Sorry! Pepe is busy helping Santa!");
  let btn = document.querySelector("button");

  btn.innerText = "18 degrees";
};

let btn = document.querySelector("button");

btn.addEventListener("click", alertFunction);
