$(function () {
    $('#example2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": true,
      "responsive": true,
    });
    
  });
  var app = new function() {
    this.el = document.getElementById('tbody-categoria');
    this.categorias= ['Despensa', 'Bebidas', 'Cuidado Personal', 'Limpieza', 'Mascotas', 'Lacteos'];

    this.FetchAll = function() {
      var data = '';
      if (this.categorias.length > 0) {
        for (i = 0; i < this.categorias.length; i++) {
          data += '<tr>';
          data += '<td>' + this.categorias[i] + '</td>';
          data += '<td class="project-actions text-right">';
          data += '<a class="btn btn-warning btn-sm" href="#" data-toggle="modal" data-target="#modal-editar" onclick="app.Edit(' + i + ')">';
          data += '<i class="fas fa-pencil-alt"></i></a>';
          data += '<a class="btn btn-danger btn-sm" href="#" onclick="app.Delete(' + i + ')">';
          data += '<i class="fas fa-trash"></i></a>';
          data += '</td>';
          data += '</tr>';
        }
      }
    
      return this.el.innerHTML = data;
    };

    
    this.Add = function () {
      el = document.getElementById('add-categoria');
      // Get the value
      var categoria = el.value;
      if (categoria) {
        // Add the new value
        this.categorias.push(categoria.trim());
        // Reset input value
        el.value = '';
        // Dislay the new list
        this.FetchAll();
        CloseInput();
      }
    };
    this.Edit = function (item) {
      el = document.getElementById('edit-categoria');
      // Get the value
      el.value = this.categorias[item];
        // Get value
      self = this;
      document.getElementById('saveEdit').onsubmit = function() {
      
        var categoria = el.value;
        if (categoria) {
          // Edit value
          self.categorias.splice(item, 1, categoria.trim());
          // Display the new list
          self.FetchAll();
          // Hide fields
          CloseInput();
        }
      } 
    };
   
    this.Delete = function (item) {
      Swal.fire({
        title: "¿Está seguro que desea eliminar esta Categoría?",
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
          this.categorias.splice(item, 1);
          // Display the new list
          this.FetchAll();
          Swal.fire(
            'Eliminada',
            'La categoria ha sido eliminada.',
            'success'
          )
        }
      })
    };
    
  }
  app.FetchAll();
  function CloseInput() {
    $('.modal').modal('hide');
    $('body').removeClass('modal-open');
    $('body').css('padding-right', '0px');
    $('.modal-backdrop').remove();

  }
$(function() {
  $('.toastrSuccessAgregar').click(function() {
    toastr.success('La categoría fue agregada correctamente.')
  });
  $('.toastrSuccessEditar').click(function() {
    toastr.success('La categoría fue modificada correctamente.')
  });
});

  

