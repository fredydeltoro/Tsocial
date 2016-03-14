from django.contrib import admin

from .models import  Causes, AtencionIncluida, Conglomerado, TabuladorCauses, Intervencion

@admin.register(Causes)
class CausesAdmin(admin.ModelAdmin):
	list_display = ('clave', 'nombre','descripcion',)

@admin.register(AtencionIncluida)
class AtencionIncluidaAdmin(admin.ModelAdmin):
	list_display = ('nombre',)

@admin.register(Conglomerado)
class ConglomeradoAdmin(admin.ModelAdmin):
	list_display = ('id','nombre',)

@admin.register(TabuladorCauses)
class TabuladorCausesAdmin(admin.ModelAdmin):
	pass

@admin.register(Intervencion)
class IntervencionAdmin(admin.ModelAdmin):
	pass