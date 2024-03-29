from django.urls import path
from . import views


urlpatterns = [
    path('', views.homePage, name='homePage'),
    path('home/', views.homePage, name='homePage'),
    path('registration/', views.registrationPage, name='registration'),
    path('departmentAssignment/', views.departmentAssignmentPage, name='departmentAssignment'),
    path('updateData/', views.updateStudentPage, name='updateData'),
    path('deleteData/<int:ID>/', views.deletion, name='deleteData'),
    path('studentsList/', views.studentsListPage, name='studentsList'),
    path('info/', views.infoPage, name='info'),
    path('students/', views.getStudents, name='students'),
]