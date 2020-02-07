from django.urls import path
from . import views

app_name = 'sendmail'

urlpatterns = [
	path('contact/', views.contact, name='mail'),
	path('contactSuccess/', views.contactSuccess, name='success'),
]