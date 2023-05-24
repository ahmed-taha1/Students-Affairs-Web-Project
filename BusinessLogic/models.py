from django.db import models
from datetime import datetime


class Student(models.Model):
    id = models.IntegerField(primary_key=True)
    firstName = models.CharField(max_length=20, null=False)
    lastName = models.CharField(max_length=20, null=False)
    dateOfBirth = models.DateField(default=datetime(2003, 1, 1))
    gpa = models.DecimalField(max_digits=3, decimal_places=2, default=2)
    department = models.CharField(max_length=12, null=False)
    level = models.IntegerField(null= False)
    email = models.CharField(max_length=25, default="N/A", unique=True)
    phone = models.CharField(max_length=12, null=False)
    status = models.CharField(max_length=10, null=False)
    def __str__(self):
        return self.firstName+self.lastName+f" {str(self.id)}"
