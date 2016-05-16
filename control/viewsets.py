from .models import Info_Clinica, Paciente
from .serializers import PacienteSerializer, PerfilSerializer
from rest_framework import viewsets

class PacientesViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = PacienteSerializer
    queryset = Info_Clinica.objects.all()

class PerfilViewSet(viewsets.ModelViewSet):
    serializer_class = PerfilSerializer
    queryset = Paciente.objects.all()
