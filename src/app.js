import express from 'express';
import rutasEmpleados from './routes/empleados.routes.js';

const app = express();

app.use(express.json());

app.use('/api', rutasEmpleados);

app.use((req, res, next)=>{
    res.status(404).json({
        message: 'La ruta que ha especificado no se encuentra registrada.'
    });
});

export default app;