$(function () {
    $("#example1").DataTable({
        "paging": false,
        "lengthChange": false,
        "searching": false,
        "ordering": false,
        "info": false,
        "autoWidth": false,
        "responsive": true
    })
        //Initialize Select2 Elements
        $('.select2').select2()
    
        //Initialize Select2 Elements
        $('.select2bs4').select2({
            theme: 'bootstrap4'
        })
});
function guardar(){
    var _user = document.getElementById("user").value;
    var _pass = document.getElementById("pass").value;
    var _rol = document.getElementById("rol").value;

    var fila="<tr><td>"+_user+"</td><td>"+_rol+"</td><td><div class='btn-group btn-group-sm' style='float: none;'></div><button type='button' class='btn btn-sm btn-warning' data-toggle='modal' data-target='#modal-editar' onclick=''><i class='fas fa-pencil-alt'></i></button><button type='button' class='btn btn-sm btn-danger btn-eliminar' onclick='Delete()'><i class='fas fa-trash'></i></button></div></td></tr>";

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tbody-config").appendChild(btn);
    CloseInput();
}
function CloseInput() {
    $('.modal').modal('hide');
    $('body').removeClass('modal-open');
    $('body').css('padding-right', '0px');
    $('.modal-backdrop').remove();
}
$(function() {
    $('.toastrSuccessGuardar').click(function() {
      toastr.success('Se Agregó el usuario correctamente.')
    });
    $('.toastrSuccessEditar').click(function() {
      toastr.success('El producto fue modificado correctamente.')
    });
  });