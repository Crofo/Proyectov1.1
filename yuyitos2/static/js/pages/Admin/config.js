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
});
function guardar(){
    var _empresa = document.getElementById("txt_emp").value;
    var _moneda = document.getElementById("txt_moneda").value;
    var _file = document.getElementById("InputFile").value;

    var fila="<tr><td>"+_empresa+"</td><td>"+_moneda+"</td><td><IMG SRC='../dist/img/logo1.jpg' style='height: 60px'></td><td><div class='btn-group btn-group-sm' style='float: none;'></div><button type='button' class='btn btn-sm btn-warning' data-toggle='modal' data-target='#modal-editar' onclick=''><i class='fas fa-pencil-alt'></i></button><button type='button' class='btn btn-sm btn-danger btn-eliminar' onclick='Delete()'><i class='fas fa-trash'></i></button></div></td></tr>";

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
      toastr.success('Se configuró correctamente.')
    });
    $('.toastrSuccessEditar').click(function() {
      toastr.success('El producto fue modificado correctamente.')
    });
  });