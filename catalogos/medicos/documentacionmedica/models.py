from __future__ import unicode_literals

from django.db import models

from apps.catalogos.medicos.causes.models import Causes

class GuiaPracticaClinica(models.Model):
	""" Guias de Practica Clinica """
	clave = models.CharField(max_length=30,unique=True)
	nombre = models.CharField(max_length=250)
	fechapub = models.CharField(max_length=20,null=True,blank=True)
	eyrpdf = models.FileField(upload_to='gpc',null=True,blank=True)
	grrpdf = models.FileField(upload_to='gpc',null=True,blank=True)
	causes = models.ManyToManyField(Causes,related_name='normatividad_causes',null=True,blank=True)

	def __unicode__(self):
		return '(' + self.clave + ') ' + self.nombre