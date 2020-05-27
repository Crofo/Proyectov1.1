from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required



class InicioController(): 
    @login_required  
    def inicio(request):
        return render(request, 'views/index/inicio.html')


