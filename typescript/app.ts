
import { Spacecraft, MilleniumFalcon } from './classes';
import { Containership } from './interfaces';
import * as _ from 'lodash';

new (class Main {
  public ship: Spacecraft;
  public falcon: MilleniumFalcon;

  constructor() {

    this.ship = new Spacecraft('hyperdrive');
    this.falcon = new MilleniumFalcon();

    this.ship.jumpIntoHyperspace();
    this.falcon.jumpIntoHyperspace();

    let goodForTheJob = (ship: Containership) => {
      return ship.cargoContainers > 2;
    }

    console.log(`Is good for the job: ${goodForTheJob(this.falcon)}`);

    console.log(_.pad(' Typescript Examples ', 40, '='))

  }
});


/// <reference path="Utilities.ts" />
// Namespace não ta funcionando:
// Utilities.ShipCleaner.metodoEstatico();
