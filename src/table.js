class Table {
    constructor(init) {
      this.init = init;
    }
  
    createTable(data) {
      let table = `
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
      `;
      data.forEach((d) => {
        table += `
          <tr>
            <td>${d.name}</td>
            <td>${d.price}</td>
            <td>${d.description}</td>
          </tr>
        `;
      });
      table += `
          </tbody>
        </table>
      `;
  
      return table;
    }
  
    render(element) {
      let table = this.createTable(this.init.data);
      element.innerHTML = table;
    }
  }
  
  export { Table };