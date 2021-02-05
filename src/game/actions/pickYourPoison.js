import { getRandomActions } from "./generateAction";
import executeAction from "engine/executeAction";
import { getRandomInclusiveInteger } from "utils/math";
import createNotification, {
  dismissNotification,
} from "engine/createNotification";

const label = "Pick your poision";

const pickYourPoison = async () => {
  const rand = getRandomInclusiveInteger(2, 4);
  const chosenActions = getRandomActions(rand).filter(
    (action) => action.label !== label
  );

  const nid = createNotification({
    message: "Pick your poison",
    duration: -1,
    delay: true,
  });

  return chosenActions.map((action) => {
    const trigger = async () => {
      dismissNotification(nid);
      await executeAction(action);
    };
    trigger.label = action.label;

    return trigger;
  });
};
pickYourPoison.label = label;

export default pickYourPoison;
