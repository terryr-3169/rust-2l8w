export class SmartWorker {
  private state: number;

  constructor(seed: number = 37) {
    this.state = seed;
  }

  decode_scheduler(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 37) % 997;
    }
    return count;
  }
}

const obj = new SmartWorker();
console.log(obj.decode_scheduler(37));
