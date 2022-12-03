let UserA
let UserB

function setup() {
  createCanvas(400, 400);
 
  UserA = createInput('');
  UserA.position(25, 50)
 
  UserB = createInput('')
  UserB.position(200, 50)
}

function draw() {
  background(220);
 
   text("choose one option out of |  1. Rock |  2. Paper |  3 Scissors" , 25, 25 )
   text("User A" , 25, 40 )
   text("User B" , 200,40 )
 
  if( UserA.value() == 1 )
  {
        if(UserB.value() == 2)
          {
           text("User B Wins " , 25, 90 )    
          }
        else if (UserB.value() == 3)
          {
            text("User A Wins " , 25, 90 )  
          }
        else
          {
            text("It's Tie " , 25, 90 )  
          }
  }
  else if ( UserA.value() == 2 )
  {
        if(UserB.value() == 3)
          {
           text("User B Wins " , 25, 90 )    
          }
        else if (UserB.value() == 1 )
          {
            text("User A Wins " , 25, 90 )  
          }
        else
          {
            text("It's Tie " , 25, 90 )  
          }
   
  }
  else
  {
        if(UserB.value() == 1)
          {
           text("User B Wins " , 25, 90 )    
          }
        else if (UserB.value() == 2 )
          {
            text("User A Wins " , 25, 90 )  
          }
        else
          {
            text("It's Tie " , 25, 90 )  
          }
  }
}
