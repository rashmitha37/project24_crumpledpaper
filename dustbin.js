class Dustbin{

    constructor(x,y){

        this.bin1=Bodies.rectangle(650,475,100,20,{isStatic:true});
        World.add(world,this.bin1);

        this.bin2=Bodies.rectangle(560,415,20,100,{isStatic:true}); 
        this.bin3=Bodies.rectangle(740,415,20,100,{isStatic:true}); 

        World.add(world,this.bin1);
        World.add(world,this.bin2);
        World.add(world,this.bin3);
    }

    display(){
        rectMode(CENTER);
        noStroke();
        fill("white");
        rect(this.bin1.position.x,this.bin1.position.y,200,20);
        rect(this.bin2.position.x,this.bin2.position.y,20,100);
        rect(this.bin3.position.x,this.bin3.position.y,20,100);

    }
}