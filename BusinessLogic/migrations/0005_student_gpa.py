# Generated by Django 4.2.1 on 2023-05-24 16:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BusinessLogic', '0004_alter_student_dateofbirth'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='gpa',
            field=models.DecimalField(decimal_places=2, default=2, max_digits=3),
        ),
    ]
