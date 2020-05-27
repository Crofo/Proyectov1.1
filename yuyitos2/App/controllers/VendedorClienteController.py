from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required



class VendedorClienteController():
    @login_required     
    def vendedorcliente(request):
        return render(request, 'views/index/vendedorcliente.html')