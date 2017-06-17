
    let ctx = canvas1.ctx;
    ctx.closePath();  
    ctx.beginPath();
    ctx.lineTo(100, 100);
    ctx.arc(100, 100, 100, 0, 90*canvas1.pi/180, false);
    ctx.lineTo(100, 100);
    ctx.fillStyle = `rgba(0, 255, 0, 1)`;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();  