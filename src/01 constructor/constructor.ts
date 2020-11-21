// ES5

export interface ConstructorType {
  new (model: string, year: number, color: string): ObjectType;
}

export interface ObjectType {
  model: string;
  year: number;
  color: string;
}

export const CarA = (function (
  this: ObjectType,
  model: string,
  year: number,
  color: string
): void {
  this.model = model;
  this.year = year;
  this.color = color;
} as unknown) as ConstructorType;

// TS/ES6+

export class CarB {
  constructor(
    public model: string,
    public year: number,
    public color: string
  ) {}
}
