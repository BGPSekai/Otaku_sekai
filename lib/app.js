import Koa from 'koa';
import PrettyError from 'pretty-error';
import MainApp from '../app';

const app = new Koa();

const prettyError = new PrettyError();
prettyError.skipNodeFiles();
prettyError.skipPackage('koa');

app.use(MainApp.router.routes());

// app.use(async (err, req, res, next) => {
//   process.stderr.write(prettyError.render(err));
//   await next();
// });

app.on('error', err => {
  process.stderr.write(prettyError.render(err));
});

export default app;
