from django.contrib import admin

from .models import Servicio

@admin.register(Servicio)
class ServicioAdmin(admin.ModelAdmin):
	pass