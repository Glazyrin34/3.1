"use strict";

//Задача 1

function parseCount(parseNumber) {
    let number = Number.parseInt(parseNumber, 10);
    
    if (isNaN(number) === true) {
        throw new Error("Невалидное значение");
    }

    return number;
}

function validateCount (unParseNumber) {

    try {
        return parseCount(unParseNumber);
    } catch (error) {
        return Error("Невалидное значение");
    }
}

// Задача 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    triangleExistence() {
        if (((this.a + this.b) < this.c) || ((this.a + this.c) < this.b) || ((this.b + this.c) < this.a)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter(P) {
        P = this.P;
        this.P = this.a + this.b + this.c;
        return this.P;
    }

    getArea(S) {
        S = this.S;
        this.S = Math.sqrt((this.P / 2 * (this.P / 2 - this.a) * (this.P / 2 - this.b) * (this.P / 2 - this.c)));
        return this.S.toFixed(3);
    }
}

function getTriangle(a,b,c) {
    const triangle = new Triangle(a,b,c);
    try {
        return `Такой треугольник существует. \n Его периметр равен ${triangle.getPerimeter()}. \n Его площадь равна ${triangle.getArea()}`;
    } catch (error) {
        return "Ошибка! Треугольник не существует";
    }
}

console.log(getTriangle(5, 6, 5));
