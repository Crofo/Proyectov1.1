from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required


class ConsultarCompraController():
    @login_required     
    def consultarcompra(request):
        return render(request, 'views/index/consultarCompra.html')