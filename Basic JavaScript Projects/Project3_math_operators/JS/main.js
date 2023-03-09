let op = document.getElementById("operator");
let ans = document.getElementById("answer");
let even = document.getElementById("even");
let neg = document.getElementById("neg");
let inc = document.getElementById("inc");
let dec = document.getElementById("dec");
let math = () => {
  let input = prompt(`How you wanna math these numbers?`);
  if (input !== "+" && input !== "/" && input !== "-" && input !== "*") {
    alert(`Please respond with +, -, /, or *`);
  } else {
    op.innerHTML = input;
    ans.innerHTML = eval(`10 ${input} 5`);
    even.innerHTML = ` (and it's ${
      Number(ans.innerHTML) % 2 === 0 ? `even` : `odd`
    })`;
    neg.innerHTML = `The negative is -${ans.innerHTML}`;
    let x = Number(ans.innerHTML);
    console.log(Math.random() * 100);
    console.log(Math.round(x));
  }
};
