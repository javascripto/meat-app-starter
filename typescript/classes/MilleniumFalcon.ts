import { Spacecraft } from './Spacecraft';
import { Containership } from '../interfaces';

class MilleniumFalcon extends Spacecraft implements Containership {

  cargoContainers: number;

  constructor() {
    super('hyperdrive');
    this.cargoContainers = 4;
  }

  public jumpIntoHyperspace() {
    if (Math.random() > 0.5) {
      super.jumpIntoHyperspace();
    } else {
      console.log('Failed to jump into hyperspace');
    }
  }
}

export { MilleniumFalcon }
export { MilleniumFalcon as Millenium }
