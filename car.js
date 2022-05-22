class Car{
    constructor(x,y,width,height){
        this.x = x;//for position
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 0;//Speed = pixels per frame movement in direction(event.key)
        this.accleration=0.2;
        this.maxSpeed = 3;
        this.friction = 0.05;//
        this.controls = new Controls();//attachs direction, keylisteners
    }
    update(){
        if(this.controls.forward){//moving toward (_, 0);
            this.speed += this.accleration;
        }
        if(this.controls.reverse){//moving toward(_,y);
            this.speed -= this.accleration;
        }
        if(this.speed > this.maxSpeed){
            this.speed = this.maxSpeed;
        }
        if(this.speed < -this.maxSpeed/1.2){
            this.speed = -this.maxSpeed/1.2;
        }
        if(this.speed > 0 ){
            this.speed -= this.friction;
        }
        if(this.speed < 0){
            this.speed += this.friction;
        }
        this.y -= this.speed;

    }
    draw(cntx){
        cntx.beginPath();
        cntx.rect(
            this.x-this.width/2,//location center
            this.y-this.height/2,
            this.width,//size is preffered
            this.height
        );
        cntx.fill();
    }
}