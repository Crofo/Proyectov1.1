from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required



class VendedorRealizarVentaController():
    @login_required     
    def vendedorrealizarventa(request):
        return render(request, 'views/index/vendedorrealizarventa.html')