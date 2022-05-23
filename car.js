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
        this.angle = 0;
        this.controls = new Controls(this.x,this.y);//attachs direction, keylisteners
        
    }
    update(){
       this.#movement();
    }
    draw(cntx){
        cntx.save();
        cntx.translate(this.x, this.y);
        cntx.rotate(this.angle);
        
        cntx.beginPath();
        cntx.rect(
            -this.width/2,//location center
            -this.height/2,
            this.width,//size is preffered
            this.height
        );
        cntx.fill();

        cntx.restore();
    }
    #movement(){
        if(this.controls.forward){//moving toward (_, 0);
            this.speed += this.accleration;
        }
        if(this.controls.reverse){//moving toward(_,y);
            this.speed -= this.accleration;
        }
        if(this.speed > this.maxSpeed){
            this.speed = this.maxSpeed;
        }
        if(this.speed < -this.maxSpeed/2){
            this.speed = -this.maxSpeed/2;
        }
        if(this.speed > 0 ){
            this.speed -= this.friction;
        }
        if(this.speed < 0){
            this.speed += this.friction;
        }
        if(Math.abs(this.speed)<this.friction){
            this.speed = 0;
        }
        if(this.speed != 0){
            const flip = this.speed > 0 ? 1 : -1;
            if(this.controls.left){
                this.angle+=0.03*flip;
            }
            if(this.controls.right){
                this.angle-=0.03*flip;
            }
        }
        if(this.controls.right){
            this.angle -= 0.03;
        }
        if(this.controls.left){
            this.angle += 0.03;
        }
        this.x += Math.sin(this.angle)*this.speed;
        this.y -= Math.cos(this.angle)*this.speed;
    }
}