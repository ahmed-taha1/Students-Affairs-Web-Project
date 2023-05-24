from django.db import models
from datetime import datetime
from django import forms


class Student(models.Model):
    id = models.IntegerField(primary_key=True)
    firstName = models.CharField(max_length=20, null=False)
    lastName = models.CharField(max_length=20, null=False)
    dateOfBirth = models.DateField(null=False, default=datetime(2003, 1, 1))
    gpa = models.DecimalField(max_digits=3, decimal_places=2, null=False)
    department = models.CharField(max_length=12, null=False)
    level = models.IntegerField(null=False,default=1)
    email = models.CharField(max_length=25, null=False, unique=True)
    phone = models.CharField(max_length=12, null=False, unique=True)
    status = models.CharField(max_length=10, null=False)

    def __str__(self):
        return self.firstName+self.lastName+f" {str(self.id)}"
