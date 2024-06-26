class Text {
    constructor(characters, color) {
        this.characters = characters;
        this.color = color;
    }

    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.characters}</text>`
    }
}

module.exports = Text;