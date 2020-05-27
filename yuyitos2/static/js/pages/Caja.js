/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

  'use strict'
  function validar(x){
    document.querySelector('#Label1').innerText = 'Tu Valor';
  }
})(jQuery)
function CloseInput() {
  $('.modal').modal('hide');
  $('body').removeClass('modal-open');
  $('body').css('padding-right', '0px');
  $('.modal-backdrop').remove();

}

function abrir(){
  var _caja = document.getElementById("mcaja").value;
  var _el = document.getElementById('minicial');
  _el.innerHTML = '$'+_caja;
  toastr.success('Caja abierta correctamente.')
}
