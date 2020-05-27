from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required



class VendedorConsultarVentaController():
    @login_required     
    def vendedorconsultarventa(request):
        return render(request, 'views/index/vendedorconsultarventa.html')