const invoice_db = require("../util/invoice_database");

class Client {
  constructor(id, name, address, city, state, phone) {
    this.client_id = id;
    this.name = name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.phone = phone;
  }

  saveClient() {
    return invoice_db.execute(
      `INSERT INTO clients(client_id,name,address,city,state,phone) VALUES('${this.client_id}','${this.name}','${this.address}','${this.city}','${this.state}','${this.phone}')`
    );
  }

  static fetchAllClients() {
    return invoice_db.execute("SELECT * FROM clients");
  }

  static fetchOneClient(id) {
    return invoice_db.execute(`SELECT * FROM clients WHERE client_id = ${id}`);
  }

  static updateClient(client_id, name, address, city, state, phone) {
    return invoice_db.execute(
      `UPDATE clients SET name ='${name}', address = '${address}', city = '${city}', state = '${state}', phone = '${phone}' WHERE client_id = ${client_id}`
    );
  }

  deleteClient() {}
}

module.exports = Client;
