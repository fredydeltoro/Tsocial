from django.contrib import admin
from .models import Paciente, DatosPaciente, DomicilioPaciente

admin.site.register(Paciente)
admin.site.register(DatosPaciente)
admin.site.register(DomicilioPaciente)
