let UserA
let UserB
function setup() {
  createCanvas(400, 400);

}

function draw() {
background(215)
  if (mouseX<200&&mouseY<200)
    {fill("white")}
  else if (mouseX>200&&mouseY<200)
    {fill("skyblue")}
  else if (mouseX>200&&mouseY>200)
    {fill("pink")}
  else
    {fill("purple")}
  rect(mouseX,mouseY,80,80)
  }