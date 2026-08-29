export class AtomicParser {
  private state: number;

  constructor(seed: number = 67) {
    this.state = seed;
  }

  parse_loader(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 67) % 997;
    }
    return total;
  }
}

const obj = new AtomicParser();
console.log(obj.parse_loader(67));
