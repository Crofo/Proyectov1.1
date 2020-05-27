from django.shortcuts import render, HttpResponse


class LoginController():
    def login(request):
        return render(request, 'views/index/login.html')


       