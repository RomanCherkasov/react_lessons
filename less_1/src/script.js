function button() {
    return "button";
}

class Slider {
    constructor(width, height, count) {
        this.width = width;
        this.height = height;
        this.count = count;
    }
    nextSlide() {
        console.log("Moving forward");
    }
    prewSlide() {
        console.log("Moving back");
    }
    whoAmI() {
        console.log(this.width, this.height, this.count)
    }
}

class AutoSlider extends Slider {
    constructor(width, height, count, auto) {
        super(width, height, count);
        this.auto = auto;
    }
    play(){
        console.log(`Autoplay: ${this.auto}`);
    }
}

// const slider = new AutoSlider(599, 234, 234, true);
// slider.whoAmI();
// slider.play();

export {button};
export default Slider;