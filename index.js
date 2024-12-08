const alertFunction = (ev) => {
  ev.preventDefault();
  alert("It is 18 degrees");
  let btn = document.querySelector("button");

  btn.innerText = "18 degrees";
};

let btn = document.querySelector("button");

btn.addEventListener("click", alertFunction);
