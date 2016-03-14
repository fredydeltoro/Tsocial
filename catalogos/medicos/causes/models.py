#encoding:utf-8
from __future__ import unicode_literals

from django.db import models

class Causes(models.Model):
	""" Catalogo de CAUSES """
	clave = models.IntegerField(primary_key=True,unique=True)
	nombre = models.CharField(max_length=250)
	descripcion = models.CharField(max_length=250,null=True,blank=True)
	atenciones = models.ManyToManyField('AtencionIncluida',null=True,blank=True)
	conglomerado = models.ForeignKey('Conglomerado')

	def __unicode__(self):
		return '(' + str(self.clave) + ') ' + self.nombre

	def __str__(self):
		return '(' + str(self.clave) + ') ' + self.nombre


class AtencionIncluida(models.Model):
	""" Atenciones Incluidas en CAUSES """
	nombre = models.CharField(max_length=250)

	def __unicode__(self):
		return self.nombre
		
		
class Conglomerado(models.Model):
	""" Conglomerados de CAUSES """
	nombre = models.CharField(max_length=250)

	def __unicode__(self):
		return self.nombres


class TabuladorCauses(models.Model):
	""" Tabulador de CAUSES """
	causes = models.ForeignKey('Causes')
	costofijo = models.DecimalField(max_digits=8, decimal_places=2)
	costovariable = models.DecimalField(max_digits=8, decimal_places=2)
	costototal = models.DecimalField(max_digits=8, decimal_places=2)
	terapiaintensiva = models.BooleanField(default=False)

	def __unicode__(self):
		return '(' + str(self.causes.clave) + ') ' + self.causes.nombre


class Intervencion(models.Model):
	""" Intervenciones en CAUSES """
	nombre = models.CharField(max_length=250)

	def __unicode__(self):
		return self.nombre