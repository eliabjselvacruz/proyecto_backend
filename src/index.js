import app from './app.js';
import {PORT} from './config.js';

app.listen(PORT);
console.log("Servidor ejecutandose en el puerto ",PORT);