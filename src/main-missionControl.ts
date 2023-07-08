import { TransceiverActive } from "./Mission_Controle/TransceiverActive";

const missionControl = new TransceiverActive();
missionControl.emitAction("F");
missionControl.handleState();
