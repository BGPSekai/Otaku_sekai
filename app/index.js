import Router from 'koa-router';
import resolvers from 'resolvers';
import schemas from 'schemas';

const router = new Router();

router.get('/', ctx => {
  ctx.body = 'Hello world!';
});

export default {
  router,
  resolvers,
  schemas,
};
