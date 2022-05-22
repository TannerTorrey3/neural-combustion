const canvas = document.getElementById("canvas");

canvas.width = 400;

const cntx = canvas.getContext("2d");
const car = new Car(200,window.innerHeight/2,30,50);
car.draw(cntx);

animate();

function animate(){
    car.update();
    canvas.height = window.innerHeight;
    car.draw(cntx);
    requestAnimationFrame(animate);
}