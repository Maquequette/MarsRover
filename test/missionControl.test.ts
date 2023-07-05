import { TransceiverActive } from "../src/Mission_Controle/TransceiverActive";
describe("Mission Control", () => {
  it("Etant donné un transceiver qui emet des Actions a notre rover, notre rover doit recevoir ces élément et agir en fonction", () => {
    const transceiverActive = new TransceiverActive();
    // const planet = new Planet(new Size(new Coordinate(2), new Coordinate(2)));
    // const ui = new Present();
    // const sortie = ui.show(planet);
    // expect(sortie).toBe("+-+" + "| |" + "+-+");
  });
});
