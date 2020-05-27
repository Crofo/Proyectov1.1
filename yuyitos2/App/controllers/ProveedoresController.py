from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required


class ProveedoresController():
    @login_required     
    def proveedores(request):
        return render(request, 'views/index/proveedores.html')