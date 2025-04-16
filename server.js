import jsonServer from 'json-server';
import auth from 'json-server-auth';
import cors from 'cors';

const app = jsonServer.create();
const router = jsonServer.router("src/data/db.json");

app.db = router.db;

app.use(cors());
app.use(jsonServer.bodyParser);
app.use(auth);
app.use(router);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor JSON con auth corriendo en http://localhost:${PORT}`);
});
