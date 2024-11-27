let angle;

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent('sketch-container');
  stroke(255);

}

function draw() {
  clear();
  angle = sin(frameCount * 0.01) * QUARTER_PI; // Smooth oscillation
  translate(width / 2, height);
  branch(100);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle); // Rotate right
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle); // Rotate left
    branch(len * 0.67);
    pop();
  }
}
