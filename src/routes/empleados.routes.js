import { Router } from 'express';
import { crearEmpleado, eliminarEmpleado, obtenerEmpleados, obtenerEmpleado, actualizarEmpleado } from '../controllers/empleados.controller.js';

const router = Router();

// Ruta para obtener todos los empleados
router.get('/empleados', obtenerEmpleados);

// Ruta para obtener un empleado por su ID
router.get('/empleado/:id', obtenerEmpleado);

// Ruta para crear un nuevo empleado
router.post('/empleados', crearEmpleado);

// Ruta para actualizar un empleado existente
router.patch('/empleados/:id', actualizarEmpleado);

// Ruta para eliminar un empleado
router.delete('/empleados/:id', eliminarEmpleado);

export default router;