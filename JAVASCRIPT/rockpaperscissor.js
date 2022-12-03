
let welcometext , txtInst, txtResult  
let singlebtn, threebtn, fivebtn , btnR, BtnP, BtnS
let replaybtn , endbtn
let compOpt;
function setup() {
 
  createCanvas(400, 400);
  welcometext = "welcome to the toughest game ever "
 
  txtInst = "please choose your game format"
  txtResult = ""
 
  // buttons for 1 3 5 games
 
  singlebtn = createButton('Single Game')
  singlebtn.position(25, 250)
  singlebtn.style('width', '100px')
  singlebtn.mousePressed( NewGame )
 
  threebtn = createButton('Best of Three')
  threebtn.position(150, 250)
  threebtn.style('width', '100px')
 
  fivebtn = createButton('Best of Five')
  fivebtn.position(275, 250)
  fivebtn.style('width', '100px')
 
  // button for R P S
 
  btnR = createButton('Rock')
  btnR.position(25, 280)
  btnR.style('width', '100px')
  btnR.hide()
  btnR.mousePressed( CompareRock )
 
  btnP = createButton('Paper')
  btnP.position(150, 280)
  btnP.style('width', '100px')
  btnP.hide()
  btnP.mousePressed( ComparePaper )
 
  btnS = createButton('Scissors')
  btnS.position(275, 280)
  btnS.style('width', '100px')
  btnS.hide()
  btnS.mousePressed(  CompareScissors )
  
  // button for replay or end game
  replaybtn = createButton('Replay')
  replaybtn.position(205, 150)
  replaybtn.style('width', '100px')
  replaybtn.hide()
  replaybtn.mousePressed( NewGame )
  
   endbtn = createButton('End')
  endbtn.position(100, 150)
  endbtn.style('width', '100px')
  endbtn.hide()
 
 
  //reset random number compOpt
 
 
}

function draw() {
  background("rgb(42,22,)");
 
  text( welcometext, 59, 60)
  textFont("Canela")
  textSize(19)
  fill("rgb(184,191,104)")
  text( txtInst, 75, 120)
  text( txtResult , 30, 300)
 
}
function showRPS()
{
 
  txtInst = " choose among rock,  paper, scissors"
  txtResult = ""
 
  //hide game options
  singlebtn.hide()
  threebtn.hide()
  fivebtn.hide()
 
  //show Rock paper scissors buttons
 
  btnR.show()
  btnP.show()
  btnS.show()
  welcometext = ""
 
}

function CompareRock()
  {  
    if(compOpt == 1)
      {
       txtResult = "It's Draw/ as the computer chose rock!"  
      }
    else if(compOpt == 2)
      {
       txtResult = "Computer Won ! as the computer chose paper!"  
      }
    else
      {
        txtResult = "You Won ! as the computer chose scissor"
      }  
 ShowResult()

  }

function ComparePaper()
{if(compOpt == 2)
      {
       txtResult = "It's Draw! as the computer chose paper!"  
      }
    else if(compOpt == 1)
      {
       txtResult = "Computer Won ! as the computer chose scissor!"  
      }
    else
      {
        txtResult = "You Won ! as the computer chose rock!"
      }  
  ShowResult()

}

function CompareScissors()
{if(compOpt == 1)
      {
       txtResult = "Computer Won ! as the computer chose rock!"  
      }
    else if(compOpt == 2)
      {
       txtResult = "It's Draw ! as the computer chose scissor!"  
      }
    else
      {
        txtResult = "You Won ! as the computer chose paper!"
      }  
 ShowResult()
}

function NewGame()
{
 
  compOpt = round(random (0.5, 3.5) )
  showRPS();
   endbtn.hide()
    replaybtn.hide()

 
}
function ShowResult()
{
  btnR.hide()
  btnP.hide()
  btnS.hide()
endbtn.show()
  replaybtn.show()
  txtInst = ""
  
}