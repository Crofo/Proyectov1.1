from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required


class VentasAlCreditoController():
    @login_required     
    def ventasalcredito(request):
        return render(request, 'views/index/credito.html')