from rest_framework import serializers
from .models import Info_Clinica

class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Info_Clinica
        fields = ('paciente', 'fecha_internado', 'cama')
