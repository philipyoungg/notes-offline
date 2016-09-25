const createContsants = (args) => {
  const actions = {};
  args.forEach(arg => {
    actions[arg] = arg;
  });
  return actions;
};

export default createContsants;
