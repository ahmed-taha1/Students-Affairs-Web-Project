# Generated by Django 4.2.1 on 2023-05-24 17:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BusinessLogic', '0011_alter_student_level'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='status',
            field=models.CharField(default='Active', max_length=10),
        ),
    ]
