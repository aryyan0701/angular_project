import { create, router as _router, defaults } from 'json-server';
import { json } from 'body-parser';
import cors from 'cors';

const server = create();
const router = _router('db.json');
const middlewares = defaults();

// Add middleware
server.use(cors());
server.use(json());

// Use default router
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
