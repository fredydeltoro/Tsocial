from __future__ import unicode_literals

from django.db import models

class Nacionalidad(models.Model):
	clave = models.CharField(max_length=4, primary_key=True, unique=True)
	nombre = models.CharField(max_length=250)
	iniciales = models.CharField(max_length=3)

	def __unicode__(self):
		return self.nombre


class Entidad(models.Model):
	clave = models.CharField(max_length=2, primary_key=True,unique=True)
	nombre = models.CharField(max_length=250)

	def __unicode__(self):
		return self.nombre

	def num_ent(self):
		return self.clave


class Municipio(models.Model):
	clave = models.CharField(max_length=5)
	nombre = models.CharField(max_length=250)
	entidad = models.ForeignKey('Entidad')

	def __unicode__(self):
		return self.clave + ' - ' + self.nombre
	
	def num_mun(self):
		return self.entidad.clave + self.clave


class Localidad(models.Model):
	clave = models.CharField(max_length=6)
	nombre = models.CharField(max_length=250)
	municipio = models.ForeignKey('Municipio')
	entidad = models.ForeignKey('Entidad')

	def __unicode__(self):
		return self.nombre


class CodigoPostal(models.Model):
	codigopostal = models.CharField(max_length=10)
	nom_asenta = models.CharField(max_length=250)
	tipo_asenta = models.CharField(max_length=250)
	municipio = models.ForeignKey('Municipio')
	entidad = models.ForeignKey('Entidad')

	def __unicode__(self):
		return self.codigopostal + ' - ' + self.nom_asenta