from django.db import models
from catalogos.estadisticos.geograficos.models import Nacionalidad, Entidad, Municipio
from choices import SEXOS, DIAGNOSTICOS_CHOICES, ESTSALUD_CHOICES, SERVSELECT_CHOICES

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
	def __unicode__(self):
		return self.expediente

class DatosPaciente(models.Model):
	paciente = models.OneToOneField('Paciente',primary_key=True)
	numero_cel = models.CharField(max_length=100)
	num_tel_casa = models.CharField(max_length=10)
	estado_civil = models.CharField(max_length=100)
	escolaridad = models.CharField(max_length=100)
	ocupacion = models.CharField(max_length=100)
	religion = models.CharField(max_length=100)
	dialecto = models.CharField(max_length=100)
	grupo_etnico = models.CharField(max_length=100)
	def __unicode__(self):
		return self.paciente.expediente

class DomicilioPaciente(models.Model):
	paciente = models.ForeignKey('Paciente')
	calle = models.CharField(max_length=100)
	Num_int = models.CharField(max_length=100)
	Num_Ext = models.CharField(max_length=100)
	colonia = models.CharField(max_length=100)
	def __unicode__(self):
		return self.paciente.expediente

class Info_Clinica(models.Model):
	paciente = models.OneToOneField('Paciente',primary_key=True)
	fecha_internado = models.DateField()
	diagnostico_ingreso = models.CharField(max_length=100,choices=DIAGNOSTICOS_CHOICES)
	estado_Salud = models.CharField(max_length=100,choices=ESTSALUD_CHOICES)
	servicios = models.CharField(max_length=100,choices=SERVSELECT_CHOICES)
	cama = models.CharField(max_length=100)
	def __unicode__(self):
		return self.paciente.expediente
