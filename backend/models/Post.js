const rowData = require("../data.json");

class Post {
  get() {
    return this.readData();
  }
  getIndividula() {}
  add() {}
  readData() {
    return rowData;
  }
}

module.exports = Post;
