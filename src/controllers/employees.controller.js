import { pool } from '../db.js';

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM employees');
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong',
    });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [
      req.params.id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({
        message: 'Employee not found',
      });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong',
    });
  }
};

export const createEmployees = async (req, res) => {
  const { name, lastName, country, salary } = req.body;

  try {
    const [rows] = await pool.query(
      'INSERT INTO employees(name, lastName, country, salary) VALUES (?, ?, ?, ?)',
      [name, lastName, country, salary]
    );
    res.send({
      id: rows.insertId,
      name,
      lastName,
      country,
      salary,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong',
    });
  }
};

export const deleteEmployees = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM employees WHERE id = ?', [
      req.params.id,
    ]);

    if (result.affectedRows <= 0) {
      return res.status(404).json({
        message: 'Employee not found',
      });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong',
    });
  }
};

export const updateEmployyes = async (req, res) => {
  const { id } = req.params;
  const { name, lastName, country, salary } = req.body;

  try {
    const [result] = await pool.query(
      'UPDATE employees SET name = IFNULL(?, name), lastName = IFNULL(?, lastName), country = IFNULL(?, country), salary = IFNULL(?, salary) WHERE id = ?',
      [name, lastName, country, salary, id]
    );

    if (result === 0) {
      return res.status(404).json({
        message: 'Employee not found',
      });
    }

    const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [
      id,
    ]);

    res.send(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong',
    });
  }
};
