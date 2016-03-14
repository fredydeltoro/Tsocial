from django.contrib import admin

from .models import AuxiliarDx

@admin.register(AuxiliarDx)
class AuxiliarDxAdmin(admin.ModelAdmin):
	list_display = ('codigo','nombre','nombcorto','servicio',)
	list_filter = ('servicio',)
	search_fields = ('codigo','nombre','nombcorto',)