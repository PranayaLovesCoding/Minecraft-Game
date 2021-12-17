var canvas= fabric.Canvas("myCanvas");

player_x=10;
player_y=10;

var player="";
var blocks="";
block_width=30;
block_height=30;

function player(){
fabric.Image.fromURL("player.png",
function(Img){
    player=Img;
    player.scaleToWidth(130);
    player.scaleToHeight(130);
    player.set({top:player_y, left:player_x});
    canvas.add(player);
});
}
function blocks_2(get_img){
    fabric.Image.fromURL(get_img,
    function(Img){
        blocks=Img;
        blocks.scaleToWidth(block_width);
        blocks.scaleToHeight(block_height);
        blocks.set({top:player_y, left:player_x});
        canvas.add(blocks);
    });
    }

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);

if (keypressed=='80' && e.shiftKey==true){
block_width= block_width+10;
block_height= block_height+10;
document.getElementById("width").innerHTML=block_width;
document.getElementById("height").innerHTML=block_height;
}
if (keypressed=='77' && e.shiftKey==true){
block_width= block_width-10;
block_height= block_height-10;
document.getElementById("width").innerHTML=block_width;
document.getElementById("height").innerHTML=block_height;
}
if (keypressed=='38'){
    up();
    console.log("up");
}
if (keypressed=='40'){
    down();
    console.log("down");
}
if (keypressed=='37'){
    left();
    console.log("left");
}
if (keypressed=='39'){
    right();
    console.log("right");
}
if (keypressed=='84'){
    blocks_2("trunk.jpg");
    console.log("t");
}
if (keypressed=='68'){
    blocks_2("dark_green.png");
    console.log("d");
}
if (keypressed=='76'){
    blocks_2("light_green.png");
    console.log("l");
}
if (keypressed=='71'){
    blocks_2("ground.png");
    console.log("g");
}
if (keypressed=='87'){
    blocks_2("wall.jpg");
    console.log("w");
}   
if (keypressed=='89'){
    blocks_2("yellow_wall.png");
    console.log("y");
}   
if (keypressed=='82'){
    blocks_2("roof.jpg");
    console.log("r");
}   
if (keypressed=='67'){
    blocks_2("cloud.jpg");
    console.log("c");
}   
if (keypressed=='87'){
    blocks_2("unique.png");
    console.log("u");
}   
}
function up() 
{ if(player_y >=0){
 player_y = player_y - block_image_height; 
 console.log("block image height = " + block_image_height); 
 console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
 canvas.remove(player_object); 
 player_update(); 
} 
}
function down() 
{ if(player_y <=500){
 player_y = player_y + block_image_height; 
 console.log("block image height = " - block_image_height); 
 console.log("When Down arrow key is pressed, X = " + player_x + " , Y = "+player_y);
 canvas.remove(player_object); 
 player_update(); 
} 
}
function left() { 
if(player_x >0) {
 player_x = player_x - block_image_width; 
 console.log("block image width = " + block_image_width); 
 console.log("When Left arrow key is pressed, X = " + player_x + " , Y = "+player_y); 
 canvas.remove(player_object); 
 player_update(); 
} 
} 
function right() { 
if(player_x <=850) { 
player_x = player_x + block_image_width; 
console.log("block image width = " + block_image_width); 
console.log("When Right arrow key is pressed, X = " + player_x + " , Y = "+player_y); 
canvas.remove(player_object); 
player_update(); 
}
}

    