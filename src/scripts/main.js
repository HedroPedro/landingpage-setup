class Slider {
    sourceArray = [""];
    index = 0;

    /**
     * @constructor
     * @param {string[]} sourceArray 
     */
    constructor(sourceArray){
        this.sourceArray = sourceArray;
    };

    /** 
    * @param {number} modifier
    * @return {string}
    */
    changeSlideImage(modifier){
        this.index += modifier; 
            if(this.index === this.sourceArray.length){
                this.index = 0;
                return this.sourceArray[0];
            }
    
            if(this.index < 0){
                this.index = this.sourceArray.length - 1;
                return this.sourceArray[this.index];
            }
    
            return this.sourceArray[this.index];
    }
}

const slidersMap = {ccpSlider : new Slider(["src/imgs/ccp1.jpg", "src/imgs/ccp2.jpg", "src/imgs/ccp3.jpg"]),
    cjSlider : new Slider(["src/imgs/cj1.jpg", "src/imgs/cj2.jpg", "src/imgs/cj3.jpg"]),
    clmSlider : new Slider(["src/imgs/clm1.jpg", "src/imgs/clm2.jpg", "src/imgs/clm3.jpg"])};

/**
 * @param {number} modifier 
 */
const changeCCPImage = (modifier) => {
    const img = document.getElementById("ccp-image");
    img.src = slidersMap.ccpSlider.changeSlideImage(modifier);
}

/**
 * @param {number} modifier 
 */
const changeCJImage = (modifier) => {
    const img = document.getElementById("cj-image");
    img.src = slidersMap.cjSlider.changeSlideImage(modifier);
}

/**
 * @param {number} modifier 
 */
const changeCLMImage = (modifier) => {
    const img = document.getElementById("clm-image");
    img.src = slidersMap.clmSlider.changeSlideImage(modifier);
}