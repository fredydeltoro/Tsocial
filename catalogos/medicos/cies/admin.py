from django.contrib import admin

from .models import Cie9MC, Cie10, Cie10Caps

@admin.register(Cie9MC)
class Cie9MCAdmin(admin.ModelAdmin):
	pass

@admin.register(Cie10)
class Cie10Admin(admin.ModelAdmin):
	list_display = ('clave', 'nombre',)

@admin.register(Cie10Caps)
class Cie10CapsAdmin(admin.ModelAdmin):
	pass