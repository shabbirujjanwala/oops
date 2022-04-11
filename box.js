class box {
    constructor() {
        this.x = 100;
        this.y = 200;
        this.w = 60;
        this.h = 50;
    }
    show() {
        rect(this.x, this.y, this.w, this.h);

    }
    set_speed(v) {
        this.x = this.x + v;
        
    }
}