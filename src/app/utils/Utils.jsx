export default (args) => {
  const actions = {};
  args.forEach(arg => {
    actions[arg] = arg;
  });
  return actions;
};
