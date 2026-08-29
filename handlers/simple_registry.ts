export class AtomicResolver {
  private state: number;

  constructor(seed: number = 97) {
    this.state = seed;
  }

  encode_monitor(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 97) % 997;
    }
    return result;
  }
}

const obj = new AtomicResolver();
console.log(obj.encode_monitor(97));
