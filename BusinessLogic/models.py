from django.db import models
from datetime import datetime


class Student(models.Model):
    id = models.IntegerField(primary_key=True)
    firstName = models.CharField(max_length=20, default="Not specified")
    lastName = models.CharField(max_length=20, default="Not specified")
    dateOfBirth = models.DateField(default=datetime(2003, 1, 1))
    gpa = models.DecimalField(max_digits=3, decimal_places=2, default=2)

