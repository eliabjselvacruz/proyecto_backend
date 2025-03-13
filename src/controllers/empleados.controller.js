import { pool } from '../db.js';

// Obtener todos los empleados
export const obtenerEmpleados = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM employees');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de los empleados.',
      error: error
    });
  }
};

// Obtener un empleado por su ID
export const obtenerEmpleado = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM employees WHERE id = ?', [req.params.id]);
    
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. El ID ${req.params.id} del empleado no fue encontrado.`
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos del empleado.'
    });
  }
};

// Crear un empleado
export const crearEmpleado = async (req, res) => {
  try {
    const { id, name, salary } = req.body;
    const [result] = await pool.query(
      'INSERT INTO employees (id, name, salary) VALUES (?,?,?)',
      [id, name, salary]
    );
    
    if (result.affectedRows <= 0) {
      return res.status(500).json({
        mensaje: 'Error al guardar los datos del empleado.'
      });
    } else {
      console.log(result);
      return res.status(200).json({
        mensaje: `Los datos del empleado con ID ${result.insertId} se han guardado exitosamente.`
      });
    }
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al guardar los datos del empleado.',
      error: error
    });
  }
};

// Eliminar un empleado
export const eliminarEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query('DELETE FROM employees WHERE id = ?', [id]);
    console.log(result);

    if (result.affectedRows <= 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar. Empleado con ID ${id} no encontrado.`
      });
    } else {
      return res.status(200).json({
        mensaje: `Los datos del empleado con ID ${id} se han eliminado exitosamente.`
      });
    }
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar los datos del empleado.'
    });
  }
};

// Actualizar un empleado
export const actualizarEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;
  
    const [result] = await pool.query(
      'UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?',
      [name, salary, id]
    );
  
    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al actualizar. Empleado con ID ${id} no encontrado.`
      });
    }
  
    const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [id]);
  
    console.log(result);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al actualizar los datos del empleado.'
    });
  }
};