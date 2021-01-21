const { deployUpdate } = require('./pm2')

const Query = {
  deployUpdateStatus: function (root, args, context, info) {
    return context.deployUpdateStatus
  },
}

const Mutation = {
  deployUpdate: async function (root, args, context, info) {
    return deployUpdate(context)
  },
}

const Subscription = {
  deployUpdateStatus: {
    subscribe: (root, args, context) => {
      return context.pubsub.asyncIterator(`deployUpdateStatus`)
    },
  },
}

module.exports = {
  Query,
  Mutation,
  Subscription,
}
