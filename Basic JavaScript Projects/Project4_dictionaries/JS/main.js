let bengalsRoster = {
  QB: "Joe Burrow",
  RB: "Joe Mixon",
  WR1: "JaMarr Chase",
  WR2: "Tee Higgins",
  WR3: "Tyler Boyd",
};

function getQB() {
  let qb = document.getElementById("dictionary");
  qb.innerHTML = bengalsRoster.QB;
  delete bengalsRoster.RB;
  console.log(bengalsRoster);
}
