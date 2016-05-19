from rest_framework import serializers
from .models import Info_Clinica, Paciente, DatosPaciente, DomicilioPaciente

class PacienteSerializer(serializers.HyperlinkedModelSerializer):
    expediente = serializers.CharField(source = 'paciente.expediente', read_only=True)
    nombre = serializers.CharField(source = 'paciente.nombre', read_only=True)
    apaterno = serializers.CharField(source = 'paciente.apaterno', read_only=True)
    amaterno = serializers.CharField(source = 'paciente.amaterno', read_only=True)
    class Meta:
        model = Info_Clinica
        fields = ('expediente', 'nombre', 'apaterno', 'amaterno', 'fecha_internado', 'servicios', 'cama')

class PerfilSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paciente
        fields = '__all__'

class DatosSerializer(serializers.ModelSerializer):
    class Meta:
        model = DatosPaciente
        fields = '__all__'

class DomicilioSerializer(serializers.ModelSerializer):
    class Meta:
        model = DomicilioPaciente
        fields = '__all__'


class InfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Info_Clinica
        fields = '__all__'
