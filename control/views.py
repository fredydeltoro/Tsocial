from django.shortcuts import render

# Create your views here.
def add_paciente(request):
    return render(request,'add_paciente.html')
