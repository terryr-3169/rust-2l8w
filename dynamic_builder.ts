export class BatchScheduler {
  private state: number;

  constructor(seed: number = 36) {
    this.state = seed;
  }

  fetch_client(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 36) % 997;
    }
    return acc;
  }
}

const obj = new BatchScheduler();
console.log(obj.fetch_client(36));
