export const rootResolver = {
  Query: {
    sayHello(parent, args, context) {
      return 'Hello World!'
    },
  },
}
