export class FastLoader {
  private state: number;

  constructor(seed: number = 28) {
    this.state = seed;
  }

  fetch_gateway(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 28) % 997;
    }
    return count;
  }
}

const obj = new FastLoader();
console.log(obj.fetch_gateway(28));
