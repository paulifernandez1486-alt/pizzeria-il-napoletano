function abrirModal(pizza){
    Swal.fire({
  title: pizza.nombre.toUppercase(),
  html: '<img src="${pizza.imagen"}> <p>${pizza.descripcion}</p> <p>${pizza.precio}</p>' ,
  confirmButtonText: 'Cerrar',
  confirmButtonColor: '#0D7139',
  width:'500px',
})
}

document.addEventListener('DOMContentLoaded', cargarProductos);

async function cargarProductos() {
  const response = await fetch('productos.json');
  const productos = await response.json();
  let gallery = document.querySelector('.gallery'); //Dentro del ul cargo dinamicamente li
  productos.forEach(function (pizza) {
    let li = document.createElement("li");
    li.innerHTML=`
<div class="box">
                    <figure>
                        <img src="${pizza.imagen}"/>
                        <figcaption>
                            <h3>${pizza.nombre}</h3>
                            <p>${pizza.precio}</p>
                            <time>${pizza.fecha}</time>
                        </figcaption>
                    </figure>
                    <button class="button" value="1" data-price="${pizza.precio}">
                        Añadir al carrito <i class="fa-solid fa-cart-shopping"></i>
                    </button>
</div>
 `;
    gallery.appendChild(li);
  })
}


