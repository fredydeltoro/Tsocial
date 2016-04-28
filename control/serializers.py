from rest_framework import serializers
from .models import Info_Clinica

class PacienteSerializer(serializers.HyperlinkedModelSerializer):
    expediente = serializers.CharField(source = 'paciente.expediente', read_only=True)
    nombre = serializers.CharField(source = 'paciente.nombre', read_only=True)
    apaterno = serializers.CharField(source = 'paciente.apaterno', read_only=True)
    amaterno = serializers.CharField(source = 'paciente.amaterno', read_only=True)
    class Meta:
        model = Info_Clinica
        fields = ('expediente', 'nombre', 'apaterno', 'amaterno', 'fecha_internado', 'servicios', 'cama')
