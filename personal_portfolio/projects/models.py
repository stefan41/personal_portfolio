from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.

class Project(models.Model):
	title = models.CharField(max_length=100)
	#description = models.TextField()
	description = RichTextField()
	technology = models.CharField(max_length=20)
	screenshot = models.ImageField(default='default.png', blank=True)
	created_on = models.DateTimeField(auto_now_add=True)
	modified_on = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.title