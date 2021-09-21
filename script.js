const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");
const width = window.innerWidth;
const height = window.innerHeight;
cvs.height = height;
cvs.width = width;
const radius = 2;
let particles = [] ;
function Particles(x, y) {
    this.x = x;
    this.y = y;
    this.vx = -1 + Math.random()*2;
    this.vy = -1 + Math.random()*2;
    this.create = () => {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(this.x, this.y, radius, 0, 2*Math.PI);
        ctx.fill();
    }
    this.update = () => {
        if(this.x>= cvs.width || this.x<=0) {
            this.vx*=-1;
        }
        if(this.y>= cvs.height || this.y<=0) {
            this.vy*=-1;
        }
        this.x+=this.vx;
        this.y+=this.vy;
    }
}
function makeParticle() {
    for(i=0; i<100; i++) {
        particles.push(new Particles(Math.random()*width, Math.random()*height))
        particles[i].create();
    }
}
function Motion() {
    ctx.fillStyle = "rgb(0,0,0,0.1)";
    ctx.fillRect(0,0,cvs.width,cvs.height);
    for(i=0; i<100; i++) {
        particles[i].create();
        particles[i].update();
    }
    window.requestAnimationFrame(Motion)
}
makeParticle();
Motion();
window.addEventListener("resize", ()=>{
    cvs.width = innerWidth;
    cvs.height = innerHeight;
});