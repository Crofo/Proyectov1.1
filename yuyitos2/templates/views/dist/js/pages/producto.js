$(function () {
    $("#example1").DataTable({
        "responsive": true,
        "autoWidth": false,
    });

    //Initialize Select2 Elements
    $('.select2').select2()
    
    //Initialize Select2 Elements
    $('.select2bs4').select2({
        theme: 'bootstrap4'
    })
});
function guardar(){
   
    var _cod = '0000';
    var _desc = document.getElementById("desc").value;
    var _cat = document.getElementById("cat").value;
    var _pcompra = document.getElementById("pcompra").value;
    var _pventa = document.getElementById("pventa").value;
    var _stock = document.getElementById("stock").value;

    var fila="<tr><td>"+_cod+"</td><td>"+_desc+"</td><td>"+_cat+"</td><td>"+_pcompra+"</td><td>"+_pventa+"</td><td>"+_stock+"</td><td><div class='btn-group btn-group-sm' style='float: none;'></div><button type='button' class='btn btn-sm btn-warning' data-toggle='modal' data-target='#modal-editar' onclick=''><i class='fas fa-pencil-alt'></i></button><button type='button' class='btn btn-sm btn-danger btn-eliminar' onclick='Delete()'><i class='fas fa-trash'></i></button></div></td></tr>";

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tbody-productos").appendChild(btn);
    CloseInput();
}
function CloseInput() {
    $('.modal').modal('hide');
    $('body').removeClass('modal-open');
    $('body').css('padding-right', '0px');
    $('.modal-backdrop').remove();
}
$(function() {
    $('.toastrSuccessAgregar').click(function() {
      toastr.success('El producto fue agregado correctamente.')
    });
    $('.toastrSuccessEditar').click(function() {
      toastr.success('El producto fue modificado correctamente.')
    });
  });
 function Delete() {
    Swal.fire({
      title: "¿Está seguro que desea eliminar este Producto?",
      text: "Si no lo está puede cancelar esta acción",
      type: "warning",
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarla',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Eliminada',
          'El producto ha sido eliminado.',
          'success'
        )
      }
    })
  };
