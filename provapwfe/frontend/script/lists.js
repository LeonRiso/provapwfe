const table = document.querySelector("#tablebody")
const sales = document.querySelector("#sales")


fetch("http://localhost:3000/vendedores", { method: 'GET' })
.then(response => response.json())
.then(data => {
  list(data);})
.catch(error => console.error(error));

function list(tableData){
    tableData.forEach(e =>{
        let line = document.createElement('tr')
        let col1 = document.createElement('td')
        let col2 = document.createElement('td')
        let col3 = document.createElement('td')
        let col4 = document.createElement('td')
        let editButton = document.createElement('button');

        
        col1.innerHTML = e.id
        col2.innerHTML = e.nome
        col3.innerHTML = e.matricula
        editButton.innerHTML = 'editar'
   
        editButton.addEventListener('click', function() {
            window.location.href = `./edituser.html?id=${e.id}&nome_produto=${e.nome_produto}&data=${e.data}&quantidade=${e.quantidade}&produtoId=${e.produtoId}&vendedorId=${e.vendedorId}`;
          });
  
        col4.appendChild(editButton);
        line.appendChild(col1)
        line.appendChild(col2)
        line.appendChild(col3)
        line.appendChild(col4)
        table.appendChild(line)
    })
}

fetch("http://localhost:3000/rvendas", { method: 'GET' })
.then(response => response.json())
.then(vendasdata => {
  rsales(vendasdata);
})
.catch(error => console.error(error));

function rsales(vData){
    vData.forEach(e=>{
        let l = document.createElement('tr')
        let c1 = document.createElement('td')
        let c2 = document.createElement('td')
        let c3 = document.createElement('td')
        let c4 = document.createElement('td')

        c1.innerHTML = e.data
        c2.innerHTML = e.vendedor
        c3.innerHTML = e.produto
        c4.innerHTML = e.quantidade

        l.appendChild(c1)
        l.appendChild(c2)
        l.appendChild(c3)
        l.appendChild(c4)
        sales.appendChild(l)
    })
}
