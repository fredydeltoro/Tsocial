from django.contrib import admin

from .models import Entidad, Municipio, Localidad, Nacionalidad, CodigoPostal

@admin.register(Entidad)
class EntidadAdmin(admin.ModelAdmin):
	list_display = ('clave','nombre',)

@admin.register(Municipio)
class MunicipioAdmin(admin.ModelAdmin):
	list_display = ('num_mun','nombre','entidad',)
	list_filter = ('entidad',)

@admin.register(Localidad)
class LocalidadAdmin(admin.ModelAdmin):
	list_display = ('clave','nombre',)
	list_filter = ('entidad',)

@admin.register(Nacionalidad)
class NacionalidadAdmin(admin.ModelAdmin):
	list_display = ('clave','nombre','iniciales',)
	#ordening = ('nombre',)

@admin.register(CodigoPostal)
class CodigoPostalAdmin(admin.ModelAdmin):
	pass