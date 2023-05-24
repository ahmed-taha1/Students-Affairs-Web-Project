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


class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = ['id', 'firstName', 'lastName', 'dateOfBirth', 'gpa', 'department', 'level', 'email', 'phone',
                  'status']

    def clean(self):
        cleaned_data = super().clean()
        id = cleaned_data.get('id')
        email = cleaned_data.get('email')
        phone = cleaned_data.get('phone')

        if Student.objects.filter(id=id).exists():
            raise forms.ValidationError("This ID already exists.")

        if Student.objects.filter(email=email).exists():
            raise forms.ValidationError("This email already exists.")

        if Student.objects.filter(phone=phone).exists():
            raise forms.ValidationError("This phone already exists.")

        return cleaned_data