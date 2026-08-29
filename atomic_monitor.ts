export class CoreBuffer {
  private state: number;

  constructor(seed: number = 49) {
    this.state = seed;
  }

  render_registry(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 49) % 997;
    }
    return value;
  }
}

const obj = new CoreBuffer();
console.log(obj.render_registry(49));
