from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required
from django.core.exceptions import PermissionDenied


class UsuarioController():
    @login_required     
    def usuario(request):
        return render(request, 'views/index/usuario.html')