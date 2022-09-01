from django.contrib import admin
from django.urls import path,include

app_name = 'todo'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include("todo.urls"))
]

