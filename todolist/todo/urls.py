from django import views
from django.contrib import admin
from django.urls import path
from .import views

urlpatterns = [
    path('', views.index, name='index'),
    # ulr for delete
    path('delete/<str:pk>', views.delete , name='delete')
]
