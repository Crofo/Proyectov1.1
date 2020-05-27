from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required


class RealizarVentaController():
    @login_required     
    def realizarventa(request):
        return render(request, 'views/index/realizarVenta.html')