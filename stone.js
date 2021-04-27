class Stone {
    constructor(x, y, w, h) {
        var options = {
            restitution: 0.5,
            isStatic: false,
            friction: 1.4
        }
        this.image = loadImage("polygon.png");

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        fill("red")
        rect(pos.x, pos.y, this.width, this.height);
        image(this.image, pos.x - 50, pos.y - 50, 100, 90);

    }
}