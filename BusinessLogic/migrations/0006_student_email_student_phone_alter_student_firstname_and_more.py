# Generated by Django 4.2.1 on 2023-05-24 17:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BusinessLogic', '0005_student_gpa'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='email',
            field=models.CharField(default='N/A', max_length=25, unique=True),
        ),
        migrations.AddField(
            model_name='student',
            name='phone',
            field=models.CharField(default='N?A', max_length=12),
        ),
        migrations.AlterField(
            model_name='student',
            name='firstName',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='student',
            name='lastName',
            field=models.CharField(max_length=20),
        ),
    ]