import mutations from './mutations/index.js';
import queries from './queries/index.js';
const resolvers = {
  Query: {
    ...queries,
  },
  Mutation: {
    ...mutations,
  },
};

export default resolvers;
