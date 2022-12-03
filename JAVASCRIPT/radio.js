let rdShape
function setup() {
  createCanvas(400, 400);
  rdShape = createRadio()
  rdShape.option("Rectangle")
  rdShape.option("Round Rectangle")
  rdShape.option("Circle")
  rdShape.position(30,30)
  rdShape.selected("Round Rectangle")
}

function draw() {
  background(220);
  {
    if (rdShape.value()=="Rectangle")
      {
        rect(100,150,100,160)
      }
   if (rdShape.value()=="Round Rectangle")
      {
        rect(100,150,100,160,20)
      }
    if (rdShape.value()=="Circle")
      {
        circle(150,200,100)
      }
  }
}