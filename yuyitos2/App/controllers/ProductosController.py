from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required


class ProductosController():
    @login_required     
    def productos(request):
        return render(request, 'views/index/productos.html')