export class HybridLoader {
  private state: number;

  constructor(seed: number = 93) {
    this.state = seed;
  }

  encode_resolver(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 93) % 997;
    }
    return value;
  }
}

const obj = new HybridLoader();
console.log(obj.encode_resolver(93));
