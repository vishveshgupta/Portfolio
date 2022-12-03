let sliderR, sliderG, sliderB, sliderRad, sliderStr, rdShape

function setup() {
  createCanvas(400, 400);
  colorMode = RGB
  sliderR = createSlider(0,300,0)
  sliderR.position(20,180)
  sliderR.style ('width', '80px')
  
  sliderG = createSlider(150,300,0)
  sliderG.position(20,200)
  sliderG.style ('width', '80px')
  
  sliderB = createSlider(0,300,0)
  sliderB.position(20,220)
  sliderB.style ('width', '80px')
  
  rdShape = createRadio()
  rdShape.option("Rectangle")
  rdShape.option("Round Rectangle")
  rdShape.option("Circle")
  rdShape.position(30,30)
}

function draw() {
   background(220);
  
  let valR = sliderR.value()
  let valG = sliderG.value()
  let valB = sliderB.value()
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
  fill(valR,valG,valB)
  stroke("black")
  
}