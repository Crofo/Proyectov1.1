from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required


class ConsultarVentaController():
    @login_required     
    def consultarventa(request):
        return render(request, 'views/index/consultarVenta.html')