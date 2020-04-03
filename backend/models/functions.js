const db = require("./conn.js");

class Functions {
  constructor(id, author, title, content) {
    this.author = author;
    this.id = id;
    this.title = title;
    this.content = content;
  }
  //functions

  static async getAll() {
    try {
      const response = await db.any(`select * from posts;`);
      return response;
    } catch (err) {
      return err.message;
    }
  }
  static async getById(user_id) {
    try {
      const response = await db.one(
        `select * from posts where id = ${user_id}`
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async addComment(title, author_id, content) {
    const query = `INSERT INTO posts (title, author_id, content) VALUES ('${title}', ${author_id}, '${content}')`;
    console.log("add comment fired.", query);
    try {
      const response = await db.result(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Functions;
