from django.contrib import admin

from .models import CatalogoCAUSES

@admin.register(CatalogoCAUSES)
class CatalogoCAUSESAdmin(admin.ModelAdmin):
	list_display = ('id','nomcauses',)
	filter_horizontal = ('diags','procs','meds','gpcs','auxdx',)