from django.urls import path
from . import views


urlpatterns = [
    path('', views.homePage, name = 'homePage'),
    path('home/', views.homePage, name = 'homePage'),
    path('registration/', views.registration, name = 'registration'),
    path('departmentAssignment/', views.departmentAssignment, name = 'departmentAssignment'),
    path('updateData/', views.updateData, name = 'updateData'),
    path('studentsList/', views.studentsList, name = 'studentsList'),
    path('info/', views.info, name = 'info'),
]