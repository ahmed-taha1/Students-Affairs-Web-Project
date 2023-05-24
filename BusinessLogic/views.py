from django.shortcuts import render
from .models import Student
from django.http import HttpResponse

# Create your views here.


def homePage(request):
    if request.method == 'GET':
        return render(request, 'main_menu.html')


def registration(request):
    if request.method == 'GET':
        return render(request, 'add_student.html')
    elif request.method == 'POST':
        try:
            student = Student()
            student.id = int(request.POST["id"])
            student.firstName = request.POST["first"]
            student.lastName = request.POST["last"]
            student.gender = request.POST["gender"]
            student.dateOfBirth = request.POST["date"]
            student.level = int(request.POST["level"])
            student.gpa = request.POST["gpa"]
            student.department = request.POST["department"]
            student.email = request.POST["email"]
            student.status = request.POST["status"]
            student.phone = request.POST["phone"]
            if Student.objects.filter(id=student.id).exists():
                raise ValueError("This Id Already Exists")
            if Student.objects.filter(email=student.email).exists():
                raise ValueError("This Email Already Exists")
            if Student.objects.filter(phone=student.phone).exists():
                raise ValueError("This Phone Already Exists")
            student.save()
        except Exception as exception:
            print("Registration Exception " + exception.args[0])
        finally:
            return render(request, 'add_student.html')


def departmentAssignment(request):
    if request.method == 'GET':
        return render(request, 'assign_department.html')


def updateData(request):
    if request.method == 'GET':
        return render(request, 'Update.html')


def studentsList(request):
    if request.method == 'GET':
        return render(request, 'Student_list.html')


def info(request):
    if request.method == 'GET':
        return render(request, 'info.html')


