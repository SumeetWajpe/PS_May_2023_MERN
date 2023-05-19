export function Add(x: number, y: number): number {
  return x + y;
}

export function Product(x: number, y: number): number {
  return x * y;
}

export function Divide(x: number, y: number): number {
  return x / y;
}

// only one default export per module !
export default function Square(x: number): number {
  return x * x;
}
