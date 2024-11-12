function parseCount(number){
    Number.parseFloat(number)
    if (isNaN(Number.parseFloat(number))){
        throw new Error ("Невалидное значение");
    }
    return Number.parseFloat(number)
    
}

function validateCount(number){
    try{
        return parseCount(number)
    } catch (error) {
        return error
    }   
}

class Triangle {
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b) < c || (b + c) < a || (a + c) < b){
            throw new Error ("Треугольник с такими сторонами не существует")
        };
    }

    get perimeter(){
        const P = this.a + this.b + this.c;
        return P
    };

    get area(){
        const p = 0.5 *(this.a + this.b + this.c);
        const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(s.toFixed(3))
    };

}

function getTriangle(a, b, c){
    try {
        return new Triangle(a, b, c);
    }
    catch(error) {
        return {
            get area() {
                return ("Ошибка! Треугольник не существует")
            },
            get perimeter() {
                return ("Ошибка! Треугольник не существует")
            }
        }

    }
}

