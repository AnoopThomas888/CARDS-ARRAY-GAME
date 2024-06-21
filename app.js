let playerName;

let welcomePlayer= document.getElementById("welcomePlayer");
let subtext1= document.getElementById("subtext1");
let welcomePlayer2= document.getElementById("welcomePlayer2");
let score= document.getElementById("score");
let computerMove= document.getElementById("computerMove");
let playerNotification= document.getElementById("playerNotification");
let content = document.querySelector('.content');
let content1 = document.querySelector('.content1');
let points=0;
let playerMove;
let y;
let z;
let c;
let b;
const box=document.getElementById("box");

CARD1=[950,900,800,800,700];
CARD2=[800,700,400,600,600];
CARD3=[900,800,400,800,900];
CARD4=[900,800,200,800,700];
CARD5=[900,900,600,700,400];
CARD6=[950,900,700,800,600];
CARD7=[900,800,400,800,700];
CARD8=[900,600,900,900,700];
CARD9=[900,900,400,900,500];
CARD10=[900,600,700,800,800];
CARD11=[800,950,600,800,900];

CARDS=[];
ALLCARDS=['<img src = AL.png>','<img src = ANP.png>','<img src = ARB.png>','<img src = CT.png>','<img src = DP.png>','<img src = KS.png>','<img src = NYN.png>','<img src = SNM.png>','<img src = SS.png>','<img src = THS.png>','<img src = KTK.png>'];

function showpic(event){
    event.target.style.backgroundColor="red";
    
    // event.target.innerHTML='<img src = ANP.png>';
}
box.addEventListener("click",showpic);

function welcome(playerName,x) {
    x=Math.round(Math.random()*10);
    playerName = document.getElementById("playerName").value;
    welcomePlayer.textContent="welcome "+ playerName + " , your tocken number is    " + x;
    
    switch (x) {
        case 0:
            subtext1.innerHTML = '<img src = AL.PNG>'+" yours "+CARD1;
            y=CARD1;
            c='<img src = AL.png>';
            return y;
            break;
            case 1:
            subtext1.innerHTML = '<img src = ANP.PNG>'+" yours  "+CARD2;
            y=CARD2;
            c='<img src = ANP.png>';
            return y;
            break;
            case 2:
            subtext1.innerHTML = '<img src = ARB.PNG>'+" yours "+CARD3;
            y=CARD3;
            c='<img src = ARB.png>';
            return y;
            break;
            case 3:
            subtext1.innerHTML = '<img src = CT.PNG>'+" yours "+CARD4;
            y=CARD4;
            c='<img src = CT.png>';
            return y;
            break;
            case 4:
            subtext1.innerHTML = '<img src = DP.PNG>'+" yours "+CARD5;
            y=CARD5;
            c='<img src = DP.png>';
            return y;
            break;
            case 5:
            subtext1.innerHTML = '<img src = KS.PNG>'+" yours "+CARD6;
            y=CARD6;
            c='<img src = KS.png>';
            return y;
            break;
            case 6:
            subtext1.innerHTML = '<img src = KTK.PNG>'+"  yours "+CARD7;
            y=CARD7;
            c='<img src = KTK.png>';
            return y;
            break;
            case 7:
            subtext1.innerHTML = '<img src = NYN.PNG>'+"  yours "+CARD8;
            y=CARD8;
            c='<img src = NYN.png>';
            return y;
            break;
            case 8:
            subtext1.innerHTML = '<img src = SNM.png>'+"  yours "+CARD9;
            y=CARD9;
            c='<img src = SNM.png>';
            return y;
            break;
            case 9:
            subtext1.innerHTML = '<img src = SS.png>'+"  yours "+CARD10;
            y=CARD10;
            c='<img src = SS.png>';
            return y;
            break;
            case 9:
            subtext1.innerHTML = '<img src = THS.png>'+"  yours "+CARD11;
            y=CARD11;
            c='<img src = THS.png>';
            return y;
            
            
            
        default:
            subtext1.innerHTML = "try again ";
            break;
          
            
    }
  
    
}

function play(callback) {
    console.log(y);
    
    playerMove = document.getElementById("selectStrength").value;
    playerNotification.innerHTML= "yours has " +y[playerMove];
    
    i=Math.round(Math.random()*10);
   
    
    
    
   
   
    // let x=CARD1[i];
    
    switch (i) {
        case 1:
            score.innerHTML = '<img src = AL.PNG>'+"sulthan "+CARD1 ;
            z=CARD1[playerMove];
            b='<img src = AL.png>';

            break;
            
            case 2:
                score.innerHTML = '<img src = ANP.PNG>'+"sulthan "+CARD2 ;
                z=CARD2[playerMove];
                b='<img src = ANP.png>';
                break;
           
            case 3:
                score.innerHTML = '<img src = ARB.PNG>'+"sulthan  "+CARD3;
                z=CARD3[playerMove];
                b='<img src = ARB.png>';
                break;
           
            case 4:
                score.innerHTML = '<img src = CT.png>'+"sulthan"+CARD4;
                z=CARD4[playerMove];
                b='<img src = CT.png>';
                break;
            
            case 5:
                score.innerHTML = '<img src = DP.png>'+"sulthan "+CARD5 ;
                z=CARD5[playerMove];
                b='<img src = DP.png>';
                break;
            
            case 6:
                score.innerHTML = '<img src = KS.png>'+"sulthan "+CARD6 ;
                z=CARD6[playerMove];
                b='<img src = KS.png>';
                break;
            
            case 7:
                score.innerHTML = '<img src = KTK.png>'+"sulthan "+CARD7 ;
                z=CARD7[playerMove];
                b='<img src = KTK.png>';
                break;
           
            case 8:
                score.innerHTML = '<img src = NYN.png>'+"sulthan"+CARD8 ;
                z=CARD8[playerMove];
                b='<img src = NYN.png>';
                break;
            
            case 9:
                score.innerHTML = '<img src = SNM.png>'+"sulthan"+CARD9 ;
                z=CARD9[playerMove];
                b='<img src = SNM.png>';
                break;
            
            case 10:
                score.innerHTML = '<img src = SS.png>'+"sulthan "+CARD10 ;
                z=CARD10[playerMove];
                b='<img src = SS.png>';
                break;
           
            case 0:
                score.innerHTML = '<img src = THS.png>'+"sulthan selected "+CARD11;
                z=CARD11[playerMove];
                b='<img src = THS.png>';
                break;
           
            
    
       
    }
//    alert("sulthan got " + z);
    x=y[playerMove];
    // alert(" you got " + x);
   
    if (x>z) {
        // alert(' you got 100 points');
        points=points + 100;
        welcomePlayer2.innerHTML= "you have " +points + " points";
    }
    else if(X==Z) {
       
        welcomePlayer2.innerHTML= "REPEAT";
        content.innerHTML="tied";
    }
    else if(X<Z) {
        alert('out');
        points=0;
        welcomePlayer2.innerHTML= "you lost your token to Sulthan ";
        content.innerHTML="you lost";
    }
    // if (points>500 & points<1000) {
    //     welcomePlayer2.innerHTML = "claim your token ,you have"+ points + " points" ;
        
    // } else if(points>1000) {
    //     welcomePlayer2.innerHTML= "you have " +points+ "claim sulthans one also";
    // }
    callback(points);
}
    function result(points)
    {

         if (points==500) {
            welcomePlayer2.innerHTML = "claim your token ,you have"+ points + " points" ;
          CARDS.push(c);
            content.innerHTML=  CARDS;
        } else if(points==1000) {
            welcomePlayer2.innerHTML= "you have " +points+ "af your token";
            // CARDS.push(b);
            content.innerHTML=  CARDS;
         }
          else if(points==1100) {
            welcomePlayer2.innerHTML= "you have " +points+ "claim sulthans one also";
            CARDS.push(b);
            content.innerHTML=  CARDS;
         }
         else  if(points==1500){
            CARDS.push(b);
            welcomePlayer2.innerHTML= "you have " +points+ "claim sulthans one also";
            content.innerHTML=  ALLCARDS;
         }
         else  if(points>1500){
            CARDS.push(b);
            welcomePlayer2.innerHTML= "you have " +points+ "claim sulthans one also";
            content.innerHTML=  "enjoy all sulthans arsenals "+CARDS;
         }
         
    }
    function displayAll(){
        content1.innerHTML=  ALLCARDS + "here you go"; 
    }
    //  if else(x=y)  {
    //     welcomePlayer2.innerHTML= "you lost"+points;
        
    // }else{
    //     points - 100;
    //     welcomePlayer2.innerHTML= "you won" +points;

    // }
    
