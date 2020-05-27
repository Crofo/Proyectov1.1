from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required


class RealizarCompraController():
    @login_required     
    def realizarcompra(request):
        return render(request, 'views/index/realizarCompra.html')