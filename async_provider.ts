export class LiteGateway {
  private state: number;

  constructor(seed: number = 84) {
    this.state = seed;
  }

  resolve_context(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 84) % 997;
    }
    return result;
  }
}

const obj = new LiteGateway();
console.log(obj.resolve_context(84));
