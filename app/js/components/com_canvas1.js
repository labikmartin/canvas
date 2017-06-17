//- ### ### ### ### ### ### ### ### 
//- CONTENT
//- 
/* 
+ CIRCLE
  - draw
  - update
+ CANVAS 1
  - makeCircles
  - makeYoloText
  - animate
  - clear
  - init
*/

import u from '../utils/util_global'

class Circle {
  constructor(posX, posY, diameter, speedX, speedY, ...colors) {
    this.diameter = diameter || u.randomBetween(10, 5);
    this.newX =     posX || u.randomBetween(canvas1.w, 0, this.diameter);
    this.newY =     posY || u.randomBetween(canvas1.h, 0, this.diameter); 
    this.speedX =   speedX || u.randomBetween(3, 2, 0, true);
    this.speedY =   speedY || 2;
    this.r =        colors[0] || u.randomBetween(255);
    this.g =        colors[1] || u.randomBetween(255);
    this.b =        colors[2] || u.randomBetween(255);
    this.stop =     false;
    this.spin =     1;
    this.bouncedPositive = false;
    this.bouncedNegative = false;    
  }
  draw(stroke, event) {
    let ctx = canvas1.ctx,
        evt = event,
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
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.stroke();
    }
  }
  update(gravity, frictionY, frictionX, event) {
    let w =       canvas1.w,
        h =       canvas1.h,
        posX =    this.newX,
        posY =    this.newY,
        diam =    this.diameter,
        spdX =    this.speedX,
        spdY =    this.speedY,
        fX =      frictionX || 1,
        fY =      frictionY || 1,
        g =       gravity || 0;
    // DETECT COLLISION WITH AREA BORDER HORIZONTAL
    if (posX >= w - diam || 
      posX <= 0 + diam
    ) {
      // prevent right overflow
      if (posX > w - diam) {
        this.newX = w - diam;
      }
      // prevent left overflow
      else if (posX < diam) {
        this.newX = diam;
      }
      // detect collision right side
      if (posX >= w - diam) {
        this.bouncedPositive = true;
        this.bouncedNegative = false;
      }
      // detect collision left side
      else if (posX <= diam) {
        this.bouncedNegative = true;
        this.bouncedPositive = false;
      }
      this.speedX = -this.speedX * fX; // FRICTION - X
    }
    // DETECT COLLISION WITH AREA BORDER VERTICAL
    if (posY >= h - diam - spdY || 
      posY <= diam
    ) {
      // prevent bottom overflow
      if (this.newY < diam) {
        this.newY = diam;
      }                 
      this.speedY = -this.speedY * fY; // FRICTION - Y
    }
    else {
      this.speedY +=g // GRAVITY
    }
    // X AXIS DIRECTION -> FRICTION
    // direction is left
    if (spdX < 0 && parseInt(posY + diam) == h) {
      let floatSpd = parseFloat(spdX.toFixed(1));
      this.speedX = floatSpd;
      this.speedX+=0.1;
    }
    // direction is right
    else if (this.speedX > 0 && parseInt(this.newY + diam) == h) {
      let floatSpd = parseFloat(spdX.toFixed(1));
      this.speedX = floatSpd;
      this.speedX-=0.1;
    }
    // STOP ANIMATION
    if (spdX === 0) {
      this.stop = true;
    }
    // UPDATE POSISION
    this.newX += this.speedX;
    this.newY += this.speedY;
    this.draw('', event);
  }
}

var canvas1 = {
  canvas:   document.getElementById('canvas1'),
  w:        window.innerWidth - 30,
  h:        window.innerHeight - 5,
  e:        '',
  pi:       Math.PI,
  fullArc:  Math.PI * 2,
  spin:     1,
  objects:  {},
  yoloText: '',
  // GETTERS
  get ctx() {return this.canvas.getContext('2d')},
  get width() {return this.canvas.width = this.w},
  get height() {return this.canvas.height = this.h},
  // METHODS 
  makeCircles(amount) {
    this.objects.circles = [];  
    for (let i = 0; i < amount; i++) {
      this.objects.circles.push(new Circle());
    }
    this.objects.circles.map((circle) => {
      circle.draw();
    });
  },
  makeYoloText(text) {
    let ctx = this.ctx,
        mX = this.e.clientX,
        mY = this.e.clientY;
    ctx.font='16px Arial';
    ctx.fillText(text, mX, mY);
  },
  animate(event) {
    this.clear();
    this.objects.circles.map((circle) => {
      circle.update(1, 0.5, 0.9);
    });
    this.makeYoloText(this.yoloText);
    requestAnimationFrame(this.animate.bind(this));    
  },
  clear() {
    let ctx = this.ctx;
    ctx.clearRect(0, 0, this.w, this.h);
  },
  init(amount, event) {
    this.width;
    this.height;
    this.makeCircles(amount);
    this.animate(event);
  }
}

export default canvas1;
