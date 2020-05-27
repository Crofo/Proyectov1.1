$(function () {
    $("#example1").DataTable({
        "responsive": true,
        "autoWidth": false,
    });
    $("#example2").DataTable({
        "responsive": true,
        "autoWidth": false,
    });

  });
function guardar(){
    
    toastr.success('Abono registrado correctamente.');
}
