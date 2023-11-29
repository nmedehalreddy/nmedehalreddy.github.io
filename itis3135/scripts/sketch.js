function setup() {
    var canvas = createCanvas(1600, 100);
    canvas.parent('canvasForHTML');
}
    
    function draw() {
    if (mouseIsPressed) {
    fill(0);
    } else {
    fill(10);
    }
    ellipse(mouseX, mouseY, 10, 10);
    }