from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required


class CategoriaController():
    @login_required     
    def categoria(request):
        return render(request, 'views/index/categorias.html')