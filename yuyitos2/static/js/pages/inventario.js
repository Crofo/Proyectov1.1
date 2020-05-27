$(function () {
    $("#example1").DataTable({
        "responsive": true,
        "autoWidth": false,
    });
    $("#example2").DataTable({
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
  const $tableID = $('#table');
 const $BTN = $('#export-btn');
 const $EXPORT = $('#export');

 const newTr = `
<tr class="hide">
  <td contenteditable="true">Ejemplo</td>
  <td contenteditable="true">Ejemplo</td>
  <td contenteditable="true">Ejemplo</td>
  <td contenteditable="true">Ejemplo</td>
  <td contenteditable="true">0</td>
  <td contenteditable="true">0</td>
  <td contenteditable="true">0</td>
  <td>
      <a class="btn btn-danger btn-sm table-remove" href="#" >
        <i class="fas fa-minus"></i>
      </a>
  </td>
</tr>`;
const addTr = `
<tr class="hide">
  <td contenteditable="true">333333333</td>
  <td contenteditable="true">Detergente omo 500g</td>
  <td contenteditable="true">Limpieza</td>
  <td contenteditable="true">02/02/2022</td>
  <td contenteditable="true">640</td>
  <td contenteditable="true">1100</td>
  <td contenteditable="true"></td>
  <td>
      <a class="btn btn-danger btn-sm table-remove" href="#" >
        <i class="fas fa-minus"></i>
      </a>
  </td>
</tr>`;
$('#sele').on('click', function (){
  $('#tbody').append(addTr);
});

 $('.table-add').on('click', 'i', () => {

   const $clone = $tableID.find('#tbody tr').last().clone(true).removeClass('hide table-line');

   if ($tableID.find('#tbody tr').length === 0) {

     $('#tbody').append(newTr);
   }

   $tableID.find('table').append($clone);
 });

 $tableID.on('click', '.table-remove', function () {
   $(this).parents('tr').detach();
   CloseInput();
 });


 // A few jQuery helpers for exporting only
 jQuery.fn.pop = [].pop;
 jQuery.fn.shift = [].shift;

 $BTN.on('click', () => {

   const $rows = $tableID.find('tr:not(:hidden)');
   const headers = [];
   const data = [];

   // Get the headers (add special header logic here)
   $($rows.shift()).find('th:not(:empty)').each(function () {

     headers.push($(this).text().toLowerCase());
   });

   // Turn all existing rows into a loopable array
   $rows.each(function () {
     const $td = $(this).find('td');
     const h = {};

     // Use the headers from earlier to name our hash keys
     headers.forEach((header, i) => {

       h[header] = $td.eq(i).text();
     });

     data.push(h);
   });

   // Output the result
   $EXPORT.text(JSON.stringify(data));
 });
