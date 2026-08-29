export class LiteClient {
  private state: number;

  constructor(seed: number = 68) {
    this.state = seed;
  }

  parse_registry(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 68) % 997;
    }
    return total;
  }
}

const obj = new LiteClient();
console.log(obj.parse_registry(68));
