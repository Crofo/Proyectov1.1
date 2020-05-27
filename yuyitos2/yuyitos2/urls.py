"""yuyitos2 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from App.controllers.IndexController import IndexController
from App.controllers.LoginController import LoginController
from App.controllers.InicioController import InicioController
from App.controllers.CajaController import CajaController
from App.controllers.ProductosController import ProductosController
from App.controllers.CategoriaController import CategoriaController
from App.controllers.PerecederosController import PerecederosController
from App.controllers.RealizarVentaController import RealizarVentaController
from App.controllers.ConsultarVentaController import ConsultarVentaController
from App.controllers.ClientesController import ClientesController
from App.controllers.VentasAlCreditoController import VentasAlCreditoController
from App.controllers.ConsultarCompraController import ConsultarCompraController
from App.controllers.ProveedoresController import ProveedoresController
from App.controllers.RealizarCompraController import RealizarCompraController
from App.controllers.InventarioController import InventarioController
from App.controllers.UsuarioController import UsuarioController
from App.controllers.VendedorController import VendedorController
from App.controllers.VendedorClienteController import VendedorClienteController
from App.controllers.VendedorVentaAlCreditoController import VendedorVentaAlCreditoController
from App.controllers.VendedorRealizarVentaController import VendedorRealizarVentaController
from App.controllers.VendedorConsultarVentaController import VendedorConsultarVentaController
from django.views.generic.base import TemplateView



urlpatterns = [
    path('admin/', admin.site.urls),
    path('login2/', IndexController.index, name='index'),
    path('login/', LoginController.login, name="login"),
    path('accounts/', include('django.contrib.auth.urls')),
    path('', TemplateView.as_view(template_name='home.html'), name='home'),
    path('inicio/', InicioController.inicio, name='inicio'),
    path('caja/', CajaController.caja, name='caja'),
    path('productos/', ProductosController.productos, name='productos'),
    path('categorias/', CategoriaController.categoria, name='categorias'),
    path('perecederos/', PerecederosController.perecederos, name='perecederos'),
    path('realizarVenta/', RealizarVentaController.realizarventa, name='realizarVenta'),
    path('consultarVenta/', ConsultarVentaController.consultarventa, name='consultarVenta'),
    path('clientes/', ClientesController.clientes, name='clientes'),
    path('credito/', VentasAlCreditoController.ventasalcredito, name='credito'),
    path('consultarCompra/', ConsultarCompraController.consultarcompra, name='consultarCompra'),
    path('proveedores/', ProveedoresController.proveedores, name='proveedores'),
    path('realizarCompra/', RealizarCompraController.realizarcompra, name='realizarCompra'),
    path('inventario/', InventarioController.inventario, name='inventario'),
    path('usuario/', UsuarioController.usuario, name='usuario'),
    path('vendedor/', VendedorController.vendedor, name='vendedor'),
    path('vendedorcliente/', VendedorClienteController.vendedorcliente, name='vendedorcliente'),
    path('vendedorventaalcredito/', VendedorVentaAlCreditoController.vendedorventaalcredito, name='vendedorventaalcredito'),
    path('vendedorrealizarventa/', VendedorRealizarVentaController.vendedorrealizarventa, name='vendedorrealizarventa'),
    path('vendedorconsultarventa/', VendedorConsultarVentaController.vendedorconsultarventa, name='vendedorconsultarventa'),



]
    


