class Rectangle {
    width: number
    height: number
    square: number

    constructor(width: number, height: number, square: number) {
        this.width = width
        this.height = height
        this.square = square
    }

    getArea(): number {
        this.square = this.height * this.width
        return this.square
    }
}

const rect = new Rectangle(5, 10)
console.log(rect.getArea()) // After fixing: will print 50
