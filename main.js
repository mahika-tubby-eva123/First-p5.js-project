function preload()
{
   img = loadImage('Strawberry Girl.png');
}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
}

function draw()
{
    image(img, 0, 0, 640, 480);
    circle(30, 30, 20);

}

function take_snapshot()
{
    save('student_name.png');
}