class Logo {
    
    constructor(textObj, shapeObj) {
        this.textObj = textObj;
        this.shapeObj = shapeObj;
    }

    //methods
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            ${this.shapeObj.render()}
          
            ${this.textObj.render()}
          
        </svg>
        `
    }
}

module.exports = Logo;