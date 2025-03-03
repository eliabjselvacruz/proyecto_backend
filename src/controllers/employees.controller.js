import {pool} from '../db.js';

//Obtener todos los empleados
export const getEmployees = async (req, res) => {
  try{
    const [result] = await pool.query('SELECT * FROM employees');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: 'Ha ocurrido un error al leer los datos de los clientes.',
      error: error
    });
  }
};

//Obtener un empleado por el id
export const getEmployee = async (req, res) => {
  try{
    const [result] = await pool.query('SELECT * FROM employees WHERE id = ?', [req.params.id]);
    
    if(result.length <= 0){
      return res.status(404).json({
        message: `Error al leer los datos. Id ${id} de empleado no encontrado`
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      message: 'Ha ocurrido un error al leer los datos del cliente.'
    });
  }
};

//Insertar un empleado
export const createEmployee = async (req, res) => {
  try{
    const {id, name, salary} = req.body;
    const [result] = await pool.query('INSERT INTO employees (id, name, salary) VALUES (?,?,?)', [id, name, salary]);
    
    if(result.affectedRows <= 0){
      return res.status(500).json({
        message: `Error al guardar datos del empleado.`
      });
    } else {
      console.log(result);
      return res.status(200).json({
        message: `Los datos del empleado con id ${result.insertId} se han guardado exitosamente.`
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: 'Ha ocurrido un error al guardar los datos del cliente.',
      error: error
    });
  }
};

//Eliminar un empleado
export const deleteEmployee = async (req, res) => {
  try{
    const {id} = req.params;
    const [result] = await pool.query('DELETE FROM employees WHERE id = ?', [id]);
    console.log(result);

    if(result.affectedRows <= 0){
      return res.status(404).json({
        message: `Error al eliminar. Empleado con id ${id} no encontrado.`
      });
    } else {
      return res.status(200).json({
        message: `Los datos del empleado con id ${id} se han eliminado exitosamente.`
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: 'Ha ocurrido un error al eliminar los datos del cliente.'
    });
  }
};

//Actualizar un empleado
export const updateEmployee = async (req, res) => {
  try{
    //throw new Error('Error al actualizar.');
    const {id} = req.params;
    const {name, salary} = req.body;
  
    const [result] = await pool.query('UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id]);
  
    if(result.affectedRows === 0){
      return res.status(404).json({
      message: `Error al actualizar. Empleado con id ${id} no encontrado.`
      });
    }
  
    const [rows] = await pool.query('SELECT * FROM Employees WHERE id = ?', [id])
  
    console.log(result);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: 'Ha ocurrido un error al actualizar los datos del cliente.'
    });
  }
};

