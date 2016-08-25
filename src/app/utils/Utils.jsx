export function createConstants(args) {
  const actions = {}
  args.forEach(arg => {
    actions[arg] = arg
  })
  return actions
}
