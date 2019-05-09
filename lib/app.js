import Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import PrettyError from 'pretty-error';
import MainApp from '../app';

const server = new ApolloServer({
  typeDefs: MainApp.schemas,
  resolvers: MainApp.resolvers,
});

const app = new Koa();

server.applyMiddleware({ app });

const prettyError = new PrettyError();
prettyError.skipNodeFiles();
prettyError.skipPackage('koa');

app.use(MainApp.router.routes());

app.on('error', err => {
  process.stderr.write(prettyError.render(err));
});

export default app;
