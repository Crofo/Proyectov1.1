from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required


class CajaController():
    @login_required     
    def caja(request):
        return render(request, 'views/index/caja.html')
