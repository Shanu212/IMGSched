# Generated by Django 2.2.3 on 2019-07-26 12:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('IMGSched', '0003_auto_20190726_1156'),
    ]

    operations = [
        migrations.AlterField(
            model_name='meeting',
            name='meet_type',
            field=models.CharField(max_length=10),
        ),
    ]
