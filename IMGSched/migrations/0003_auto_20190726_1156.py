# Generated by Django 2.2.3 on 2019-07-26 11:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('IMGSched', '0002_auto_20190726_0913'),
    ]

    operations = [
        migrations.AlterField(
            model_name='meeting',
            name='meet_type',
            field=models.CharField(default='General', max_length=10),
        ),
    ]
