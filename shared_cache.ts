export class BatchSession {
  private state: number;

  constructor(seed: number = 75) {
    this.state = seed;
  }

  compute_engine(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 75) % 997;
    }
    return value;
  }
}

const obj = new BatchSession();
console.log(obj.compute_engine(75));
