const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const nome_produtoParam = urlParams.get('nome_produto');
const dataParam = urlParams.get('data');
const quantidadeParam = urlParams.get('quantidade');
const produtoIdParam = urlParams.get('produtoId');
const vendedorIdParam = urlParams.get('vendedorId');


if (nameParam && matriculaParam) {
  document.querySelector('#name').value = nameParam;
  document.querySelector('#matricula').value = matriculaParam;
}

useredit.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const matricula = document.querySelector('#matricula').value;
    const data = {nome: name, matricula: matricula };
    console.log(data);

    fetch(`http://localhost:3000/vendedor/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data); 
      window.location.href = `./home.html`;
    })
    .catch(error => console.error(error));
  }); 

  if (nome_produtoParam && dataParam && quantidadeParam && produtoIdParam && vendedorIdParam) {
    // Prefill the form with existing values
    document.querySelector('#id').value = id;
    document.querySelector('#nome_produto').value = nome_produtoParam;
    document.querySelector('#data').value = dataParam;
    document.querySelector('#quantidade').value = quantidadeParam;
    document.querySelector('#produtoId').value = produtoIdParam;
    document.querySelector('#vendedorId').value = vendedorIdParam;
  }

  fetch(`http://localhost:3000/vendasuser/${id}`)
  .then(response => response.json())
  .then(vdata => {
    console.log(vdata);
    menu(vdata); // call the menu function here
  })
  .catch(error => console.error(error));

  function menu(vdata) {
    vdata.forEach(e => {
      console.log(vdata); // debug output
  
      let id = document.createElement('p');
      let productname = document.createElement('h1');
      let date = document.createElement('p');
      let quantity = document.createElement('p');
      let productid = document.createElement('p');
      let userid = document.createElement('p');
      let editButton = document.createElement('button');
  
      productname.innerHTML = 'Nome ' + e.nome_produto;
      id.innerHTML = 'ID: ' + e.id;
      date.innerHTML = 'DATA ' + e.data;
      quantity.innerHTML = 'Quantidade: ' + e.quantidade;
      productid.innerHTML = 'Produto ID: ' + e.produtoId;
      userid.innerHTML = 'USER ID: ' + e.vendedorId;
      editButton.innerHTML = 'Editar';
      editButton.dataset.id = e.id;
  
      editButton.addEventListener('click', function() {
        window.location.href = `./editsale.html?id=${this.dataset.id}&nome_produto=${e.nome_produto}&data=${e.data}&quantidade=${e.quantidade}&produtoId=${e.produtoId}&vendedorId=${e.vendedorId}`;
      });
  
      body.appendChild(productname);
      body.appendChild(date);
      body.appendChild(id);
      body.appendChild(quantity);
      body.appendChild(productid);
      body.appendChild(userid);
      body.appendChild(editButton);
    });
  }

