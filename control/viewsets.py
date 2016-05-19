from .models import Info_Clinica, Paciente, DatosPaciente, DomicilioPaciente
from .serializers import PacienteSerializer, PerfilSerializer, DatosSerializer, DomicilioSerializer, InfoSerializer
from rest_framework import viewsets

class PacientesViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = PacienteSerializer
    queryset = Info_Clinica.objects.all()

class PerfilViewSet(viewsets.ModelViewSet):
    serializer_class = PerfilSerializer
    queryset = Paciente.objects.all()

class DatosViewSet(viewsets.ModelViewSet):
    serializer_class = DatosSerializer
    queryset = DatosPaciente.objects.all()

class DomicilioViewSet(viewsets.ModelViewSet):
    serializer_class = DomicilioSerializer
    queryset = DomicilioPaciente.objects.all()

class InfoViewSet(viewsets.ModelViewSet):
    serializer_class = InfoSerializer
    queryset = Info_Clinica.objects.all()
