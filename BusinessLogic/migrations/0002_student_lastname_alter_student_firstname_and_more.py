# Generated by Django 4.2.1 on 2023-05-24 16:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BusinessLogic', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='lastName',
            field=models.CharField(default='Not specified', max_length=20),
        ),
        migrations.AlterField(
            model_name='student',
            name='firstName',
            field=models.CharField(default='Not specified', max_length=20),
        ),
        migrations.AlterField(
            model_name='student',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
