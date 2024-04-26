

class Shape {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color) {
        super();
        this.color = color;
    }

    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super();
        this.color = color;
    }

    render() {
        return `<polygon points="150,20 250,180 50,180" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(color) {
        super();
        this.color = color;
    }

    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
}


module.exports = {
    Circle,
    Triangle,
    Square
};
