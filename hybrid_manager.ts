export class HybridService {
  private state: number;

  constructor(seed: number = 74) {
    this.state = seed;
  }

  dispatch_dispatcher(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 74) % 997;
    }
    return value;
  }
}

const obj = new HybridService();
console.log(obj.dispatch_dispatcher(74));
