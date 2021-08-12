alert("Hello");
var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(1365, 800);  

  btn_red = createButton("RED");
  btn_red.position(300,50);
  btn_red.mousePressed(red_bg);


  btn_green = createButton("GREEN");
  btn_green.position(500,50);
  btn_green.mousePressed(green_bg);

  btn_blue = createButton("BLUE");
  btn_blue.position(700,50);
  btn_blue.mousePressed(blue_bg);

  btn_orange = createButton("ORANGE");
  btn_orange.position(1000,50);
  btn_orange.mousePressed(orange_bg);

}

function draw() {
  
  drawSprites();


}

function red_bg(){
background("RED");
    alert("Riddle - What question can you never answer yes to?");
    result = alert("Are you Asleep");
}
function green_bg(){
  background("lightgreen");
     alert("Riddle - What gets wet while drying?");
    result = alert("A towel");
  }

  function blue_bg(){
    background("blue");
      alert("Riddle - I have branches, but no fruit, trunk or leaves. What am I?");
     result = alert("A bank");
    }
    function orange_bg(){
      background("darkorange");
        alert("Riddle - I’m light as a feather, yet the strongest person can’t hold me for five minutes. What am I?");
       result = alert("Your breath");
      }
