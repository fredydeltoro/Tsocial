from django.contrib import admin

from .models import UnidadMedica

@admin.register(UnidadMedica)
class UnidadMedicaAdmin(admin.ModelAdmin):
	list_display = ('clues','nombre','jurisdiccion','municipio','entidad_clues',)
	list_filter = ('jurisdiccion',)
	search_fields = ('clues','nombre','jurisdiccion','municipio',)