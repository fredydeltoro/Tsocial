from django.contrib import admin
from .models import Paciente, DatosPaciente, DomicilioPaciente, Info_Clinica

admin.site.register(Paciente)
admin.site.register(DatosPaciente)
admin.site.register(DomicilioPaciente)
admin.site.register(Info_Clinica)
