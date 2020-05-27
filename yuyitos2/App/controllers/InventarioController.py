from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required
from django.core.exceptions import PermissionDenied


class InventarioController():
    @login_required     
    def inventario(request):
        return render(request, 'views/index/inventario.html')