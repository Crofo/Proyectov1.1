from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required


class ClientesController():
    @login_required     
    def clientes(request):
        return render(request, 'views/index/clientes.html')