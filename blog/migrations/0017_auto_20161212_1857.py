# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-12-12 16:57
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0016_auto_20161212_1806'),
    ]

    operations = [
        migrations.AlterField(
            model_name='phone',
            name='zakaz',
            field=models.ManyToManyField(related_name='phones', to=settings.AUTH_USER_MODEL),
        ),
    ]
