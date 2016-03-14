from __future__ import unicode_literals

from django.db import models

from apps.catalogos.medicos.causes.models import Causes
from apps.catalogos.medicos.cies.models import Cie10, Cie9MC
from apps.catalogos.medicos.medicamentos.models import Medicamento
from apps.catalogos.medicos.documentacionmedica.models import GuiaPracticaClinica
from apps.catalogos.medicos.auxiliaresdx.models import AuxiliarDx

class CatalogoCAUSES(models.Model):
	""" Catalogos CAUSES """
	caus = models.OneToOneField(Causes)
	diags = models.ManyToManyField(Cie10,null=True,blank=True)
	procs = models.ManyToManyField(Cie9MC,null=True,blank=True)
	meds = models.ManyToManyField(Medicamento,null=True,blank=True)
	gpcs = models.ManyToManyField(GuiaPracticaClinica,null=True,blank=True)
	auxdx = models.ManyToManyField(AuxiliarDx,null=True,blank=True)

	def __unicode__(self):
		return str(self.caus.clave) + ' - ' + self.caus.nombre

	def nomcauses(self):
		return str(self.caus.clave) + ' - ' + self.caus.nombre