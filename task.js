"use strict";

//Задача 1

function parseCount(parseNumber) {
    let number = Number.parseInt(parseNumber, 10);
    
    if (isNaN(number)) {
        throw new Error("Невалидное значение");
    }

    return number;
}

function validateCount (unParseNumber) {
    try {
        return parseCount(unParseNumber);
    } catch (error) {
        return error;
    }
}

// Задача 2

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует!");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let halfPerimeter = this.getPerimeter() / 2;
        return String(Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c)).toFixed(3));
    }
}

function getTriangle(aSide, bSide, cSide) {
    
    
    try {
        const triangle = new Triangle(aSide, bSide, cSide);
        return triangle;
    } catch (error) {
        const noTriangle = {
            getPerimeter() {
                return "Ошибка! Такой треугольник не существует";
            },

            getArea() {
                return "Ошибка! Такой треугольник не существует";
            }
        }
        return noTriangle.getArea(), noTriangle.getPerimeter();
    }
}

console.log(getTriangle(5, 10, 4));


