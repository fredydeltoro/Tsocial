from django import forms
from .models import *

class Paciente-Form(forms.ModelForm):
    class Meta:
         model = Paciente
         widgets = {
            'expediente' : forms.TextInput(
                attrs = {
                    'class' : 'form-control',
                    'size' : '12',
                }
            )
         }
