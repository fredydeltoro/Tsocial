# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-03-10 19:11
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('servicios', '0001_initial'),
        ('causes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AuxiliarDx',
            fields=[
                ('codigo', models.CharField(max_length=20, primary_key=True, serialize=False, unique=True)),
                ('nombre', models.CharField(max_length=250)),
                ('nombcorto', models.CharField(blank=True, max_length=50, null=True)),
                ('causes', models.ManyToManyField(blank=True, null=True, related_name='auxdx_causes', to='causes.Causes')),
                ('servicio', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='servicios.Servicio')),
            ],
        ),
    ]
