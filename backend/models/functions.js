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
}

module.exports = Functions;
