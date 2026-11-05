//====================================================================
//  ui.js: todo lo que se dibuja en pantalla (Por ej: galería y modal).
//====================================================================

export function abrirModal(pizza){
Swal.fire({
  title: pizza.nombre.toUpperCase(),
  html: `<img src="${pizza.imagen}" style="width:100%;border-radius:8px; margin-bottom:12px"> <p style="color:#555;font-size:1rem;margin-bottom:0.75rem">${pizza.descripcion}</p> <p style="color:#135D76;font-size:2rem;font-weight:bold;margin:0">$ ${pizza.precio.toLocaleString('es-AR')}</p>`,
  confirmButtonText: 'Cerrar',
  confirmButtonColor: '#0D7139',
  width: '500px',
})
}