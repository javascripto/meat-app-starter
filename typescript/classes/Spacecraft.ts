export class Spacecraft {
  constructor(public propulsor: string) { }

  public jumpIntoHyperspace(): void {
    console.log(`Entering hyperpace with ${this.propulsor}`);
  }
}
