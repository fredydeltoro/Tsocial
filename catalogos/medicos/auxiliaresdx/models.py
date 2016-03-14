from __future__ import unicode_literals

from django.db import models

from apps.catalogos.institucionales.servicios.models import Servicio
from apps.catalogos.medicos.causes.models import Causes

class AuxiliarDx(models.Model):
	""" Auxiliares de Diagnostico """
	codigo = models.CharField(max_length=20, primary_key=True,unique=True)
	nombre = models.CharField(max_length=250)
	nombcorto = models.CharField(max_length=50,null=True,blank=True)
	servicio = models.ForeignKey(Servicio)
	causes = models.ManyToManyField(Causes,related_name='auxdx_causes',null=True,blank=True)

	def __unicode__(self):
		return self.nombre




""" NOTA: Mas adelante agregar la opcion de agrupar por quimica sanguinea """