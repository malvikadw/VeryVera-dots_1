let bubbles = [];
let index;


function setup() {
  createCanvas(windowWidth, windowHeight);
  index = 0;
  for( i = 0; i < 15; i++){
    for(j = 0; j < 15; j++){
      
  let x = random(50, width - 50);
  let y = random(50, height - 50);
  let vx = random (-2, 2);
  let vy = random (-2, 2);
  bubbles[index] = new Bubble(x, y, 40, vx, vy);
  index++;
  }
  }
  
  
  
}

function draw() {
  background(230, 10, 30);
  
  for (let i = 0; i < bubbles.length ; i++){
    
  bubbles[i].show();
  bubbles[i].move();
    
  }
  
  
   }
  
class Bubble{
    constructor(x, y, r, vx, vy){
      this.x = x;
      this.y = y;
      this.r = r;
      this.vx = vx;
      this.vy = vy;
    }
 
    show(){
      blendMode(OVERLAY)
      circle(this.x, this.y, this.r*2);
      fill(255, 16, 240)
      noStroke();
      blendMode(BLEND)
      
      }
      
    move(){
      this.x += this.vx 
      this.y += this.vy 
      
      if (this.x - this.r < 0 || this.x + this.r > width){
        this.vx *= -1 
      }
      if (this.y - this.r < 0 || this.y + this.r > height){
          this.vy *= -1
          }
      
    
    }
  
}

