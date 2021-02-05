import store from "common/store";

/**
 * Wraps dispatch around actions and maps them to the func
 * appending to the list of args.
 * @param {*} actions
 */
const mapDispatchToFunc = (actions, regularFuncs) => (func) => {
  Object.entries(actions).forEach(([key, action]) => {
    actions[key] = (...args) => store.dispatch(action.apply(null, args));
  });

  return (...args) =>
    func.apply(null, [...args, { ...actions, ...regularFuncs }]);
};

export default mapDispatchToFunc;
