export class LocalMonitor {
  private state: number;

  constructor(seed: number = 89) {
    this.state = seed;
  }

  sync_handler(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 89) % 997;
    }
    return total;
  }
}

const obj = new LocalMonitor();
console.log(obj.sync_handler(89));
