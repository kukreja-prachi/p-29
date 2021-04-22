const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
    createCanvas(800, 400);

    engine = Engine.create();
    world = engine.world;

    box1 = new BlueBox(500, 360, 20, 30);
    box2 = new GreenBox(520, 360, 20, 30);
    box3 = new RedBox(540, 360, 20, 30);
    box4 = new BlueBox(560, 360, 20, 30);
    box5 = new GreenBox(580, 360, 20, 30);
    box6 = new RedBox(600, 360, 20, 30);
    box7 = new BlueBox(510, 330, 20, 30);
    box8 = new GreenBox(530, 330, 20, 30);
    box9 = new RedBox(550, 330, 20, 30);
    box10 = new BlueBox(570, 330, 20, 30);
    box11 = new GreenBox(590, 330, 20, 30);
    box12 = new RedBox(520, 310, 20, 30);
    box13 = new BlueBox(540, 310, 20, 30);
    box14 = new GreenBox(560, 310, 20, 30);
    box15 = new RedBox(580, 310, 20, 30);
    box16 = new BlueBox(530, 280, 20, 30);
    box17 = new GreenBox(550, 280, 20, 30);
    box18 = new RedBox(570, 280, 20, 30);
    box19 = new BlueBox(540, 250, 20, 30);
    box20 = new GreenBox(560, 250, 20, 30);
    box21 = new GreenBox(550, 220, 20, 30);
    box22 = new BlueBox(500, 135, 20, 30);
    box23 = new RedBox(520, 135, 20, 30);
    box24 = new GreenBox(540, 135, 20, 30);
    box25 = new BlueBox(560, 135, 20, 30);
    box26 = new RedBox(580, 135, 20, 30);
    box27 = new GreenBox(600, 135, 20, 30);
    box28 = new RedBox(510, 105, 20, 30);
    box29 = new BlueBox(530, 105, 20, 30);
    box30 = new GreenBox(550, 105, 20, 30);
    box31 = new RedBox(570, 105, 20, 30);
    box32 = new BlueBox(590, 105, 20, 30);
    



    ball = new Ball(0, 0, 50);

    slingshot = new Slingshot(ball.body, { x: 200, y: 200 });

    ground = new Ground(400, 390, 800, 20);

    groundHovering = new Ground(550, 160, 200, 20);

}

function draw() {
    background(247, 223, 178);
    Engine.update(engine);


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
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();

   
    ball.display();
    ground.display();
    groundHovering.display();

}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    slingshot.release();
}
