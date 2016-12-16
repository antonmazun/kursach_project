# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-12-12 16:06
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('blog', '0015_phone_quantity'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='phone',
            name='category',
        ),
        migrations.AddField(
            model_name='phone',
            name='zakaz',
            field=models.ManyToManyField(related_name='phpones', to=settings.AUTH_USER_MODEL),
        ),
    ]
