
function sendInput(){
  let input = document.getElementById("input");
  let output = document.getElementById("output");

  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      value: input.value
    })

  }).then(response => response.json())
  .then(response => {
    debugger;
    output.value = output.value + "\n" + response.value;
  });
  console.log(1);
}

function background(image){
  console.log(4);
  document.body.style.backgroundImage = `url(` + image + ')';
  console.log(5);
}


document.addEventListener("keyup", (e) =>
{
  if(e.code === "Digit1"){
    debugger;
    background(`Todd.png`)
    console.log(e)
  }
}
);
