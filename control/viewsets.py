from .models import Info_Clinica
from .serializers import PacienteSerializer
from rest_framework import viewsets

class PacientesViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = PacienteSerializer
    queryset = Info_Clinica.objects.all()
