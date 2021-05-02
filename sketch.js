
var Lincoln,FDR,washington,Cleaveland,JFK,Biden,Adams,Obama,Reagen,Jefferson
var lincolnSprite,fdrSprite,cleavelandSprite,jfkSprite,bidenSprite,adamsSprite,obamaSprite,reagenSprite,jeffersonSprite,washingtonSprite
var boy, boyAnim;
var president,other;

function preload(){
Lincoln=loadImage("Abraham Lincoln.png")
FDR=loadImage("FDR.png")
washington=loadImage("george washington.png")
Cleaveland=loadImage("Grover Cleaveland.png")
JFK=loadImage("JFK.png")
Biden=loadImage("Joe Biden.png")
Adams=loadImage("John Adams.png")
Obama=loadImage("Obama.png")
Jefferson=loadImage("Thomas Edison.png")
Reagen=loadImage("Ronald Reagen.png")
boyAnim = loadAnimation("boy 1.png","boy 2.png","boy 3.png","boy 4.png","boy 5.png","boy 6.png")

}



function setup(){

 

// fdrSprite=createSprite(windowWidth+50,windowHeight-90)
// cleavelandSprite=createSprite(windowWidth+50,windowHeight-90)
// jfkSprite=createSprite(windowWidth+50,windowHeight-90)
// bidenSprite=createSprite(windowWidth+50,windowHeight-90)
// adamsSprite=createSprite(windowWidth+50,windowHeight-90)
// obamaSprite=createSprite(windowWidth+50,windowHeight-90)
// reagenSprite=createSprite(windowWidth+50,windowHeight-90)
// jeffersonSprite=createSprite(windowWidth+50,windowHeight-90)
// washingtonSprite=createSprite(windowWidth+50,windowHeight-90)

createCanvas(windowWidth, windowHeight);
boy = createSprite(windowWidth-1300, windowHeight-150);
boy.addAnimation("running", boyAnim);
boy.scale = 0.5;

}

function draw(){
  background("blue");

  if (frameCount%60 === 0){
    var select_image = Math.Round(random(1, 2))
      if (select === 1){
     Show_president()

      }
      else (select_image === 2)

    }


 drawSprites();

}



function Show_president(){


 
president=createSprite(windowWidth+50,Math.round(random(windowHeight-600,windowHeight/2)))
var select_president = Math.round(random(1, 10));
if(select_president === 1) {
  president.addImage ("LincolnImage", Lincoln)
  
} else if(select_president === 2) {
   president.addImage ("fdrImage", FDR);
} else if(select_president === 3) {
  president.addImage ("CleavelandImage", Cleaveland)
} else if(select_president === 4){
  president.addImage ("jfkImage", JFK);
}else if(select_president === 5){
  president.addImage ("BidenImage", Biden)
  president.scale = 0.2
}else if(select_president === 6){
  president.addImage ("AdamsImage", Adams)
}else if(select_president === 7){
  president.addImage ("ObamaImage", Obama)
  president.scale = 0.25
}else if(select_president === 8){
  president.addImage ("ReagenImage", Reagen)
}else if(select_president === 9){
  president.addImage ("JeffersonImage", Jefferson)
}else if(select_president === 10){
  president.addImage  ("washingtonImage", washington) 
}    

console.log("president")
}





other=createSprite(windowWidth+50,Math.round(random(windowHeight-600,windowHeight/2)))
var select_other = Math.round(random(1, 10));
if(select_other === 1) {

}else if(selct_other === 2){

}
 

console.log("other")


