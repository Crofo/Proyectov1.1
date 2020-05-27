from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required



class VendedorVentaAlCreditoController():
    @login_required     
    def vendedorventaalcredito(request):
        return render(request, 'views/index/vendedorventaalcredito.html')