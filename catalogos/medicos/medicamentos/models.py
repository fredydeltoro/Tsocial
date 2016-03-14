from __future__ import unicode_literals

from django.db import models

from apps.catalogos.medicos.causes.models import Causes

class Medicamento(models.Model):
	""" Cuadro Basico de Medicamentos """
	clave = models.CharField(max_length=20,primary_key=True,unique=True)
	nombre = models.TextField()
	descripcion = models.TextField()
	cantidad = models.TextField()
	presentacion = models.TextField()
	grupoterapeutico = models.ForeignKey('GrupoTerapeutico')
	causes = models.ManyToManyField(Causes,related_name='medicamento_causes',null=True,blank=True)
	def __unicode__(self):
		return '(' + self.clave + ') ' + self.nombre

class GrupoTerapeutico(models.Model):
	""" Grupos Terapeutico """
	nombre = models.CharField(max_length=250)
	def __unicode__(self):
		return self.nombre