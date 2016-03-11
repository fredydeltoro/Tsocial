from django.db import models

class Paciente(models.Model):
	expediente = models.CharField(max_length=12, primary_key=True, unique=True)
	no_afiliacion = models.CharField(max_length=8)
	nombre = models.CharField(max_length=250)
	apaterno = models.CharField(max_length=250)
	amaterno = models.CharField(max_length=250, null=True, blank=True)
	sexo = models.CharField(max_length=10, choices=SEXOS)
	fec_nac = models.DateField()
	entidad_nac = models.ForeignKey(Entidad, related_name='entidad_nac')
	curp = models.CharField(max_length=20)
	municipio = models.ForeignKey(Municipio)
	entidad = models.ForeignKey(Entidad)
	nacionalidad = models.ForeignKey(Nacionalidad, default='223')

class DatosPaciente(models.Model):
    email = models.ForeignKey('paciente')
    Numero_cel = models.CharField(max_length=100)
    Num_Tel_Casa = models.CharField(max_length=10)
    Estado_Civil=models.CharField(max_length=100)
    Escolaridad= models.CharField(max_length=100)
    Ocupacion=models.CharField(max_length=100)
    Religion=models.CharField(max_length=100)
    Dialecto = models.CharField(max_length=100)
    Grupo_Etnico=models.CharField(max_length=100)

class DomicilioPaciente(models.Model):
	calle = models.CharField(max_length=100)
	Num_int = models.CharField(max_length=100)
	Num_Ext = models.CharField(max_length=100)
	colonia = models.CharField(max_length=100)
