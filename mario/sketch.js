var mario1,mario2,mario3,mario4,mario5,mario6,mario7,enemy1,enemy112,mario,mario12
var coin1,coin2,coin3,coin4,coin5
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20
var block21,block22,block23,block24,block25,block26,block27,block28,block29,block30
var block31,block32,block33,block34,block35,block36,block37,block38,block39,block40
var block41,block42,block43,block44,block45,block46,block47,block48,block49,block50
var cloud1,cloud2,mountain1,mountain2,mountain3,mountain4
var platform,tube,invisibleground


  
 var backgroundIMG
 var ground



function preload(){
mario123=loadAnimation("imgs/mario/mario01.png","imgs/mario/mario02.png","imgs/mario/mario03.png")
enemy1=loadImage("imgs/enemy/enemyMushroom01.png")
coin11=loadImage("imgs/blocks/coin01.png")
coin22=loadImage("imgs/blocks/coin02.png")
coin33=loadImage("imgs/blocks/coin03.png")
coin44=loadImage("imgs/blocks/coin04.png")
coin55=loadImage("imgs/blocks/coin05.png")
block111=loadImage("imgs/blocks/blocks001.png")
block222=loadImage("imgs/blocks/blocks002.png")
block333=loadImage("imgs/blocks/blocks003.png")
cloud123=loadImage("imgs/scene/cloud01.png")
cloud223=loadImage("imgs/scene/cloud02.png")
mountain11111111111=loadImage("imgs/scene/mountains01.png")
mountain22222222222=loadImage("imgs/scene/mountains02.png")
mountain33333333333=loadImage("imgs/scene/mountains03.png")
mountain44444444444=loadImage("imgs/scene/mountains04.png")
platform121=loadImage("imgs/scene/platform.png")
tube212=loadImage("imgs/scene/tube.png")
backgroundIMG=loadImage("imgs/scene/cartoon-hills-md.png")
}

function setup ()
{
canvas=createCanvas(2385,1000)
mario12=createSprite(100,920,50,50)
mario12.addAnimation("running",mario123)

enemy112=createSprite(50,50,200,200)
enemy112.addImage("enemy",enemy1)

invisibleground=createSprite(50,985,8385,20)

block1=createSprite(100,200,50,50)
block1.addImage(block111)
block2=createSprite(200,200,50,50)
block2.addImage(block222)
/*block3=createSprite(50,985,50,50)
block3.addImage(block333)
block4=createSprite(100,985,50,50)
block4.addImage(block333)
block5=createSprite(150,985,50,50)
block5.addImage(block333)
block6=createSprite(200,985,50,50)
block6.addImage(block333)
block7=createSprite(250,985,50,50)
block7.addImage(block333)
block8=createSprite(300,985,50,50)
block8.addImage(block333)
block9=createSprite(350,985,50,50)
block9.addImage(block333)
block10=createSprite(400,985,50,50)
block10.addImage(block333)

block11=createSprite(450,985,50,50)
block11.addImage(block333)
block12=createSprite(500,985,50,50)
block12.addImage(block333)
block13=createSprite(550,985,50,50)
block13.addImage(block333)
block14=createSprite(600,985,50,50)
block14.addImage(block333)
block15=createSprite(650,985,50,50)
block15.addImage(block333)
block16=createSprite(700,985,50,50)
block16.addImage(block333)
block17=createSprite(750,985,50,50)
block17.addImage(block333)
block18=createSprite(800,985,50,50)
block18.addImage(block333)

block19=createSprite(850,985,50,50)
block19.addImage(block333)
block20=createSprite(900,985,50,50)
block20.addImage(block333)
block21=createSprite(950,985,50,50)
block21.addImage(block333)
block22=createSprite(1000,985,50,50)
block22.addImage(block333)
block23=createSprite(1050,985,50,50)
block23.addImage(block333)
block24=createSprite(1100,985,50,50)
block24.addImage(block333)
block25=createSprite(1150,985,50,50)
block25.addImage(block333)
block26=createSprite(1200,985,50,50)
block26.addImage(block333)

block27=createSprite(1250,985,50,50)
block27.addImage(block333)
block28=createSprite(1300,985,50,50)
block28.addImage(block333)
block29=createSprite(1350,985,50,50)
block29.addImage(block333)
block30=createSprite(1400,985,50,50)
block30.addImage(block333)
block31=createSprite(1450,985,50,50)
block31.addImage(block333)
block32=createSprite(1500,985,50,50)
block32.addImage(block333)
block33=createSprite(1550,985,50,50)
block33.addImage(block333)
block34=createSprite(1600,985,50,50)
block34.addImage(block333)

block35=createSprite(1650,985,50,50)
block35.addImage(block333)
block36=createSprite(1700,985,50,50)
block36.addImage(block333)
block37=createSprite(1750,985,50,50)
block37.addImage(block333)
block38=createSprite(1800,985,50,50)
block38.addImage(block333)
block39=createSprite(1850,985,50,50)
block39.addImage(block333)
block40=createSprite(1900,985,50,50)
block40.addImage(block333)

block41=createSprite(2000,985,50,50)
block41.addImage(block333)
block42=createSprite(2050,985,50,50)
block42.addImage(block333)
block43=createSprite(2100,985,50,50)
block43.addImage(block333)
block44=createSprite(2150,985,50,50)
block44.addImage(block333)
block45=createSprite(2200,985,50,50)
block45.addImage(block333)
block46=createSprite(2250,985,50,50)
block46.addImage(block333)

block47=createSprite(2300,985,50,50)
block47.addImage(block333)
block48=createSprite(2350,985,50,50)
block48.addImage(block333)
block49=createSprite(2400,985,50,50)
block49.addImage(block333)
block50=createSprite(2450,985,50,50)
block50.addImage(block333)
*/


coin1=createSprite(100,300)
coin1.addImage(coin11)
coin1.visible=false
coin2=createSprite(200,300)
coin2.addImage(coin22)
coin2.visible=false
coin3=createSprite(300,300)
coin3.addImage(coin33)
coin3.visible=false
coin4=createSprite(400,300)
coin4.addImage(coin44)
coin4.visible=false
coin5=createSprite(500,300)
coin5.addImage(coin55)
coin5.visible=false

cloud1=createSprite(100,400)
cloud1.addImage(cloud123)
cloud2=createSprite(200,400)
cloud2.addImage(cloud223)




platform=createSprite(200,600)
platform.addImage(platform121)






}

function draw(){
background(backgroundIMG)

//camera.position.x = displayWidth/2;
          //camera.position.x= mario12.x;

          if(invisibleground.x<0){
           invisibleground.x=invisibleground.width/2;
          }
/*
if(frameCount% 60 ===0){
  mountain1=createSprite(500,900)
  mountain1.addImage(mountain11111111111)
  mountain2=createSprite(1000,900)
  mountain2.addImage(mountain22222222222)
  mountain3=createSprite(1500,900)
  mountain3.addImage(mountain33333333333)
  mountain4=createSprite(2000,900)
  mountain4.addImage(mountain44444444444)
}*/
if(keyDown("RIGHT_ARROW"))
{
 //mario12.x=mario12.x+5
 invisibleground.x=-5
}

if(keyDown("LEFT_ARROW"))
{
 //mario12.x=mario12.x-5
 invisibleground.x=5
}
if(keyDown("space")&& mario12.y >= 780) {
  mario12.velocityY = -5;

}
mario12.velocityY = mario12.velocityY + 0.8

if(frameCount% 60===0)
{
  tube=createSprite(300,900)
tube.addImage(tube212)
}

mario12.collide(invisibleground)



    drawSprites()  
}
  