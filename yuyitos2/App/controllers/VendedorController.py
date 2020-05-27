from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required



class VendedorController():
    @login_required     
    def vendedor(request):
        return render(request, 'views/index/vendedor.html')