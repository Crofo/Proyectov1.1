from django.db import models
from django.contrib.auth.models import (BaseUserManager, AbstractUser)

# Create your models here.

class Usuario(models.Model):
    id_usuario = models.AutoField(primary_key=True)
    usuario = models.CharField(max_lenght=30)
    password = models.CharField(max_lenght=30)
    id_tipo_usuario = models.CharField(max_lenght=20)
    nombre_empresa = models.CharField(max_lenght=30)

class Tipo_usuario(models.Model):
    id_tipo_usuario = models.AutoField(primary_key=True)
    tipo_usuario = models.CharField(max_lenght=20)

class Vendedor(models.Model):
    id_usuario = models.AutoField(primary_key=True)
    usuario = models.CharField(max_lenght=30)
    password = models.CharField(max_lenght=30)
    id_tipo_usuario = models.CharField(max_lenght=20)
    nombre_empresa = models.CharField(max_lenght=30)
    permisos = [
        ("es_vendedor", "Usuario Vendedor")
    ]