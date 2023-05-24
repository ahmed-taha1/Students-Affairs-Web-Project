from django.shortcuts import render

# Create your views here.


def homePage(request):
    if request.method == 'GET':
        return render(request, 'main_menu.html')


def registration(request):
    if request.method == 'GET':
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


