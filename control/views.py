from django.shortcuts import render
from .forms import PacienteForm, DatosPacienteForm, DomicilioPacienteForm

def add_paciente(request):
    if request.method ==  'POST':
        paciente = PacienteForm(request.POST or None, prefix='form-1')
        datos = DatosPacienteForm(request.POST or None, prefix='form-2')
        domicilio = DomicilioPacienteForm(request.POST or None, prefix='form-3')
    else:
        paciente = PacienteForm(prefix='form-1')
        datos = DatosPacienteForm(prefix='form-2')
        domicilio = DomicilioPacienteForm(prefix='form-3')
    return render(request,'add_paciente.html', locals())
