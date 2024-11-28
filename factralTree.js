// let angle;

// const tree1 = function(sketch){

//      sketch.setup = function() {
//         const canvas = sketch.createCanvas(400, 400);
//         canvas.parent('sketch-container');
//         sketch.stroke(255);
      
//     }
//        sketch.draw = function(){
//         sketch.clear();
//         angle = sketch.sin(sketch.frameCount * 0.01) * sketch.QUARTER_PI; // Smooth oscillation -> MAKES IT MOVE DYNAMICALLY 
//         sketch.translate(sketch.width / 2, sketch.height);
//         sketch.branch(100);
//       }

//     sketch.branch = function(len) {
//         sketch.line(0, 0, 0, -len);
//         sketch.translate(0, -len);
//         if (len > 4) {
//             sketch.push();
//             sketch.rotate(angle); // Rotate right
//             sketch.branch(len * 0.67);
//             sketch.pop();
//             sketch.push();
//             sketch.rotate(-angle); // Rotate left
//             sketch.branch(len * 0.67);
//             sketch.pop();
//         }
//     }
// }

// new p5(tree1);
// // function setup() {
// //   const canvas = createCanvas(400, 400);
// //   canvas.parent('sketch-container');
// //   stroke(255);

// // }

// // function draw() {
// //   clear();
// //   angle = sin(frameCount * 0.01) * QUARTER_PI; // Smooth oscillation -> MAKES IT MOVE DYNAMICALLY 
// //   translate(width / 2, height);
// //   branch(100);
// //   branch2(100);
// // }


// const tree2 = function(sketch){
//     let reverse = false;

//     sketch.setup = function() {
//        const canvas = sketch.createCanvas(400, 400);
//        canvas.parent('sketch-container2');
//        sketch.stroke(255);
     
//    }
//       sketch.draw = function(){
//        sketch.clear();
//        angle = sketch.sin(sketch.frameCount * 0.01) * sketch.QUARTER_PI; 
//        // Smooth oscillation -> MAKES IT MOVE DYNAMICALLY 
//        if(reverse) {
//         angle = -angle;
//     }
//        sketch.translate(sketch.width / 2, sketch.height);
//        sketch.branch(100);
//      }

//    sketch.branch = function(len) {
//        sketch.line(0, 0, 0, -len);
//        sketch.translate(0, -len);
//        if (len > 4) {
//            sketch.push();
//            sketch.rotate(angle); // Rotate right
//            sketch.branch(len * 0.67);
//            sketch.pop();
//            sketch.push();
//            sketch.rotate(-angle); // Rotate left
//            sketch.branch(len * 0.67);
//            sketch.pop();
//        }
//    }
// }

// new p5(tree2);

let angle;

const treeSketch = (container, reverse = false) => {
  return function (sketch) {
    sketch.setup = function () {
      const canvas = sketch.createCanvas(400, 400);
      canvas.parent(container);
      sketch.stroke(255);
    };

    sketch.draw = function () {
      sketch.clear();
      // Calculate angle with smooth oscillation
      angle = sketch.sin(sketch.frameCount * 0.01) * sketch.QUARTER_PI;
      if (reverse) {
        angle = -angle;
      }
      sketch.translate(sketch.width / 2, sketch.height);
      sketch.branch(100);
    };

    sketch.branch = function (len) {
      sketch.line(0, 0, 0, -len);
      sketch.translate(0, -len);
      if (len > 4) {
        sketch.push();
        sketch.rotate(angle); // Rotate right
        sketch.branch(len * 0.67);
        sketch.pop();
        sketch.push();
        sketch.rotate(-angle); // Rotate left
        sketch.branch(len * 0.67);
        sketch.pop();
      }
    };
  };
};

// Create two sketches with shared functionality
new p5(treeSketch('sketch-container')); // Tree 1
new p5(treeSketch('sketch-container2', true)); // Tree 2 (reverse angle)
