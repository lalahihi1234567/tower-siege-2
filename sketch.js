const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ground;
function setup(){
    createCanvas(1200,700);
    engine=Engine.create();
    world=engine.world;

    ground=new Ground(600,670,1200,40);

    polygon=new Polygon(200,200);
    slingshot=new Slingshot(polygon.body,{x:200, y:200});

    box1=new Box(730,600);
    box2=new Box(760,600);
    box3=new Box(790,600);
    box4=new Box(820,600);
    box5=new Box(850,600);
    box6=new Box(880,600);
    box7=new Box(910,600);

    box8=new Box(760,550);
    box9=new Box(790,550);
    box10=new Box(820,550);
    box11=new Box(850,550);
    box12=new Box(880,550);

    box13=new Box(790,500);
    box14=new Box(820,500);
    box15=new Box(850,500);
    
    box16=new Box(820,450);
}
function draw(){
    background("teal");
    Engine.update(engine);
    ground.display();
    fill("pink");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    polygon.display();
}
function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}