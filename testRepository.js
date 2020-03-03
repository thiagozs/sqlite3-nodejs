class TestRepository {
    constructor(dao) {
        this.dao = dao
    }

    createTable() {
        const sql = `
      CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT)`
        return this.dao.run(sql)
    }

    insert(name) {
        return this.dao.run(
            'INSERT INTO projects (name) VALUES (?)', [name])
    }

    getById(id) {
        return this.dao.get(
            `SELECT * FROM projects WHERE id = ?`, [id])
    }
}

module.exports = TestRepository;