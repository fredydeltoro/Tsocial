from django.contrib import admin

from .models import GuiaPracticaClinica

@admin.register(GuiaPracticaClinica)
class GuiaPracticaClinicaAdmin(admin.ModelAdmin):
	list_display = ('clave','nombre','fechapub',)
	search_fields = ('clave','nombre',)