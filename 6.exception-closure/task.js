function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
    if (isNaN(parsedValue)) {
      throw new Error("Невалидное значение");
    }
    return parsedValue;
  }
  
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch (error) {
      return error;
    }
  }

// Вторая задача

class Triangle {
    constructor(a, b, c) {
      if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
      this.a = a;
      this.b = b;
      this.c = c;
  
      this._perimeter = null;
      this._area = null;
    }
  
    get perimeter() {
      if (this._perimeter === null) {
        this._perimeter = this.a + this.b + this.c;
      }
      return this._perimeter;
    }
  
    get area() {
      if (this._area === null) {
        const p = this.perimeter / 2;
        this._area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      }
      return Number(this._area.toFixed(3));
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      return {
        get area() {
          return "Ошибка! Треугольник не существует";
        },
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        }
      }
    }
  }
  
  
  