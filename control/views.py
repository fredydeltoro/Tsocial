from django.shortcuts import render, redirect
import json
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Paciente, Info_Clinica
from .forms import PacienteForm, DatosPacienteForm, DomicilioPacienteForm, Info_ClinicaForm

def pacientes(request):
    def date_handler(obj):
        return obj.isoformat() if hasattr(obj, 'isoformat') else obj
    
    pacient_list = Info_Clinica.objects.all().values('paciente__expediente','paciente__nombre', 'paciente__apaterno', 'fecha_internado', 'cama')
    data =  json.dumps(list(pacient_list), default=date_handler)
    paginator = Paginator(pacient_list, 15)
    page = request.GET.get('page')
    try:
        pacients = paginator.page(page)
    except PageNotAnInteger:
        pacients = paginator.page(1)
    except EmptyPage:
        pacients = paginator.page(paginator.num_pages)
    return render(request,'pacientes.html', locals())

def add_paciente(request):
    if request.method ==  'POST':
        paciente = PacienteForm(request.POST or None, prefix='form-1')
        if paciente.is_valid():
            a = paciente.save()
            if Paciente.objects.get(expediente = a):
                datos = DatosPacienteForm(request.POST or None, prefix='form-2')
                domicilio = DomicilioPacienteForm(request.POST or None, prefix='form-3')
                info = Info_ClinicaForm(request.POST or None, prefix='form-4')
                b = datos.is_valid()
                c = domicilio.is_valid()
                d = info.is_valid()
                if b and c and d:
                    datos.save()
                    domicilio.save()
                    info.save()
                    res = redirect('/')
                else:
                    Paciente.objects.get(expediente = a).delete()
                    res = render(request,'add_paciente.html', locals())
            else:
                print "No existe el paciente"
        else:
            print paciente.errors.as_json(escape_html=False)
            datos = DatosPacienteForm(prefix='form-2')
            domicilio = DomicilioPacienteForm(prefix='form-3')
            info = Info_ClinicaForm(prefix='form-4')
            res = render(request,'add_paciente.html', locals())
    else:
        paciente = PacienteForm(prefix='form-1')
        datos = DatosPacienteForm(prefix='form-2')
        domicilio = DomicilioPacienteForm(prefix='form-3')
        info = Info_ClinicaForm(prefix='form-4')
        res = render(request,'add_paciente.html', locals())
    return res
