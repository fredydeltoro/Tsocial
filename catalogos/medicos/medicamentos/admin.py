from django.contrib import admin

from .models import Medicamento, GrupoTerapeutico

@admin.register(Medicamento)
class MedicamentoAdmin(admin.ModelAdmin):
	list_display = ('clave','nombre','descripcion','grupoterapeutico',)
	list_filter = ('grupoterapeutico',)
	search_fields = ('clave','nombre','descripcion',)

@admin.register(GrupoTerapeutico)
class GrupoTerapeuticoAdmin(admin.ModelAdmin):
	list_display = ('id','nombre',)