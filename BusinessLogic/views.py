from django.http import JsonResponse
from django.shortcuts import render
from .models import Student
from django.core import serializers
# Create your views here.


def homePage(request):
    if request.method == 'GET':
        return render(request, 'main_menu.html')


def registrationPage(request):
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


def departmentAssignmentPage(request):
    if request.method == 'GET':
        return render(request, 'assign_department.html')


def updateStudentPage(request):
    if request.method == 'GET':
        return render(request, 'Update.html')
    elif request.method == 'POST':
            return render(request, 'Update.html')


def studentsListPage(request):
    if request.method == 'GET':
        return render(request, 'Student_list.html')


def infoPage(request):
    if request.method == 'GET':
        return render(request, 'info.html')


def getStudents(request):
    studentList = {}
    students = Student.objects.all()
    for student in students:
        studentData = {
            "id": student.id,
            "name": student.firstName + " " + student.lastName,
            "firstName": student.firstName,
            "lastName": student.lastName,
            "gender": student.gender,
            "dateOfBirth": student.dateOfBirth,
            "level": student.level,
            "gpa": student.gpa,
            "department": student.department,
            "email": student.email,
            "status": student.status,
            "phone": student.phone,
        }
        studentList[str(student.id)] = studentData
    return JsonResponse(studentList)
