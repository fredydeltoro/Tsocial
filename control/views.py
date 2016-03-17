from django.shortcuts import render
from .models import Paciente
from .forms import PacienteForm, DatosPacienteForm, DomicilioPacienteForm

def add_paciente(request):
    if request.method ==  'POST':
        paciente = PacienteForm(request.POST or None, prefix='form-1')
        if paciente.is_valid():
            a = paciente.save()
            if Paciente.objects.get(expediente = a):
                datos = DatosPacienteForm(request.POST or None, prefix='form-2')
                domicilio = DomicilioPacienteForm(request.POST or None, prefix='form-3')
                b =  datos.is_valid()
                c =  domicilio.is_valid()
                if b and c:
                    datos.save()
                    domicilio.save()
                else:
                    print datos.errors.as_json(escape_html=False)
                    print domicilio.errors.as_json(escape_html=False)
                    Paciente.objects.get(expediente = a).delete()
            else:
                print "No existe el paciente"
        else:
            print paciente.errors.as_json(escape_html=False)
            datos = DatosPacienteForm(prefix='form-2')
            domicilio = DomicilioPacienteForm(prefix='form-3')
    else:
        paciente = PacienteForm(prefix='form-1')
        datos = DatosPacienteForm(prefix='form-2')
        domicilio = DomicilioPacienteForm(prefix='form-3')
    return render(request,'add_paciente.html', locals())
