# Generated by Django 4.2.1 on 2023-05-24 18:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BusinessLogic', '0016_alter_student_department_alter_student_email_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='phone',
            field=models.CharField(max_length=12, unique=True),
        ),
    ]
