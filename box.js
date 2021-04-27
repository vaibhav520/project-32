class Box {
    constructor(x, y, width, height) {
        var options = {
            restitution: 0.5,
            isStatic: false,
            friction: 0.1
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.Visiblity = 255;
        World.add(world, this.body);
    }
    display() {
        push();
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("red");

        if (this.body.speed < 7) {
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);

        } else {

            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255, this.Visiblity);
        }
        pop();

    }
    score() {
        if (this.Visiblity < 0 && this.Visiblity > -1000) {
            score++;
        }
    }
}