from django import forms
from .models import Paciente, DatosPaciente, DomicilioPaciente

class PacienteForm(forms.ModelForm):
    class Meta:
        fields = '__all__'
        model = Paciente
        widgets = {
            'expediente' : forms.TextInput(
                attrs = {
                    'class' : 'form-control',
                    'size' : '12',
                }
            ),
            'no_afiliacion' : forms.TextInput(
                attrs = {
                    'class' : 'form-control',
                    'size' : '12',
                }
            ),
            'nombre' : forms.TextInput(
                attrs = {
                    'class' : 'form-control',
                }
            ),
            'apaterno' : forms.TextInput(
                attrs = {
                    'class' : 'form-control',
                }
            ),
            'amaterno' : forms.TextInput(
                attrs = {
                    'class' : 'form-control',
                }
            ),
            'sexo' : forms.Select(
                attrs = {
                    'class' : 'form-control',
                }
            ),
            'fec_nac' : forms. DateTimeInput(
                attrs = {
                    'class' : 'form-control',
                }
            ),
            'entidad_nac' : forms.Select(
                attrs = {
                    'class' : 'form-control',
                }
            ),
            'curp' : forms.TextInput(
                attrs = {
                    'class' : 'form-control',
                    'size' : '18',
                }
            ),
            'municipio' : forms.Select(
                attrs = {
                    'class' : 'form-control'
                }
            ),
            'entidad' : forms.Select(
                attrs = {
                    'class' : 'form-control',
                }
            ),
            'nacionalidad' : forms.Select(
                attrs = {
                    'class' : 'form-control',
                }
            ),
         }

class DatosPacienteForm(forms.ModelForm):
    class Meta:
        fields = '__all__'
        model = DatosPaciente
        widgets = {
            'numero_cel' : forms.TextInput(
                attrs = {
                    'class' : 'form-control',
                }
            ),
            'num_tel_casa' : forms.TextInput(
                attrs = {
                    'class' : 'form-control',
                }
            ),
            'estado_civil' : forms.TextInput(
                attrs = {
                    'class' : 'form-control',
                }
            ),
            'escolaridad' : forms.TextInput(
                attrs = {
                    'class' : 'form-control',
                }
            ),
            'ocupacion' : forms.TextInput(
                attrs = {
                    'class' : 'form-control',
                }
            ),
            'religion' : forms.TextInput(
                attrs = {
                    'class' : 'form-control',
                }
            ),
            'dialecto' : forms.TextInput(
                attrs = {
                    'class' : 'form-control',
                }
            ),
            'grupo_etnico' : forms.TextInput(
                attrs = {
                    'class' : 'form-control',
                }
            ),
        }

class DomicilioPacienteForm(forms.ModelForm):
    class Meta:
        fields = '__all__'
        model = DomicilioPaciente
        widgets = {
            'calle' : forms.TextInput(
                attrs = {
                    'class' : 'form-control',
                }
            ),
            'Num_int' : forms.TextInput(
                attrs = {
                    'class' : 'form-control',
                }
            ),
            'Num_Ext' : forms.TextInput(
                attrs = {
                    'class' : 'form-control',
                }
            ),
            'colonia' : forms.TextInput(
                attrs = {
                    'class' : 'form-control',
                }
            )
        }
