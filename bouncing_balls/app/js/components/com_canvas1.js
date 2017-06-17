
class Circle {
  constructor(posX, posY, diameter, speedX, speedY, ...colors) {
    this.diameter = diameter || Math.random() * ((canvas1.h / 2) / 2);
    this.newX =     posX || Math.round(Math.random() * (canvas1.w + this.diameter));
    this.newY =     posY || Math.round(Math.random() * (canvas1.h + this.diameter));    
    this.speedX =   speedX || 8;
    this.speedY =   speedY || 8;
    this.r =        colors[0] || Math.random() * 255;
    this.g =        colors[1] || Math.random() * 255;
    this.b =        colors[2] || Math.random() * 255;
    this.stop =     false;
    this.spin = 1;
    this.bouncedPositive = false;
    this.bouncedNegative = false;    
  }
  draw() {
    let ctx = canvas1.ctx,
        // evt = event,
        xHalf =    canvas1.w / 2,
        yHalf =    canvas1.h / 2,
        random =   Math.random(),
        diameter = this.diameter,
        posX =     this.newX,
        posY =     this.newY;
    ctx.beginPath();
    ctx.arc(posX, posY, diameter, 0, canvas1.fullArc, true);
    ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, 1)`;
    ctx.fill();
    // ctx.stroke();
  }
  update(updateSpeedX, updateSpeedY) {
    let w =       canvas1.w,
        h =       canvas1.h,
        posX =    this.newX,
        posY =    this.newY,
        diam =    this.diameter,
        spdX =    this.speedX,
        spdY =    this.speedY,
        uSpeedX = updateSpeedX,
        uSpeedY = updateSpeedY;
    // DETECT COLLISION WITH AREA BORDER HORIZONTAL
    if (posX >= canvas1.w - diam || 
      posX <= 0 + diam
    ) {
      if (posX > canvas1.w - diam) {
        this.newX = canvas1.w - diam;
      }
      else if (posX < canvas1.w + diam) {
        this.newX = diam;
      }
      if (posX >= canvas1.w - diam) {
        this.bouncedPositive = true;
        this.bouncedNegative = false;
      } 
      else if (posX <= diam) {
        this.bouncedNegative = true;
        this.bouncedPositive = false;
      }
      this.speedX = -this.speedX;
    }
    // DETECT COLLISION WITH AREA BORDER VERTICAL
    if (this.newY >= canvas1.h - diam || 
      this.newY <= diam
    ) {
      if (this.newY >= canvas1.h - diam) {
        this.newY = canvas1.h - diam;
      }
      else if (this.newY < diam) {
        this.newY = diam;
      }                 
      this.speedY = -this.speedY;
    }
    if (this.bouncedPositive &&
      this.speedX != 0
    ) {
      let w = parseFloat(this.speedX.toFixed(1));
      this.speedX = w;
      this.speedX+=0.1;
    }
    else if (this.bouncedNegative && 
      this.speedX != 0
    ) {
      let w = parseFloat(this.speedX.toFixed(1));
      this.speedX = w;
      this.speedX-=0.1;
      console.log(spdX);
    }
    if (spdX === 0 || spdY === 0) {
      this.stop = true;
    }
    this.speedY++;
    this.newX += this.speedX;
    this.newY += this.speedY;
    this.draw();
  }
}

var canvas1 = {
  canvas:  document.getElementById('canvas1'),
  w:       window.innerWidth,
  h:       window.innerHeight,
  pi:      Math.PI,
  fullArc: Math.PI * 2,
  spin: 1,
  objects: {},
  // GETTERS
  get ctx() {return this.canvas.getContext('2d')},
  get width() {return this.canvas.width = this.w},
  get height() {return this.canvas.height = this.h},
  // METHODS 
  makeCircles() {
    this.objects.circles = [];  
    for (let i = 0; i < 100; i++) {
      this.objects.circles.push(new Circle());
    }
    this.objects.circles.map((circle) => {
      circle.draw();
    });
  },  
  animate() {
    this.clear();
    this.objects.circles.map((circle) => {
      circle.update();
    });  
    let anim = requestAnimationFrame(this.animate.bind(this));
    if (this.stop) {
      cancelAnimationFrame(anim);
    }
  },
  clear() {
    let ctx = this.ctx;
    ctx.clearRect(0, 0, this.w, this.h);
  },
  init() {
    this.width;
    this.height;
    this.makeCircles();
    this.animate();
  }
}

export default canvas1;
