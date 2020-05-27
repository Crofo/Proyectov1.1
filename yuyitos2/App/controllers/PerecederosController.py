from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required


class PerecederosController():
    @login_required     
    def perecederos(request):
        return render(request, 'views/index/perecederos.html')