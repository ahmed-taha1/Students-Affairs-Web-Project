# Generated by Django 4.2.1 on 2023-05-24 16:48

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BusinessLogic', '0003_student_dateofbirth'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='dateOfBirth',
            field=models.DateField(default=datetime.datetime(2003, 1, 1, 0, 0)),
        ),
    ]
