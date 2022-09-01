from django import views
from django.contrib import admin
from django.urls import path
from .import views

app_name = 'dictionary'

urlpatterns = [
    path('', views.index , name='index'),
    path('word',views.word, name='word')
    
]
