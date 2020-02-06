from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.
class Category(models.Model):
	name = models.CharField(max_length=20)

	class Meta:
		verbose_name = 'Category'
		verbose_name_plural = 'Categories'

	def __str__(self):
		return self.name


class Post(models.Model):
	title = models.CharField(max_length=255)
	#description = models.TextField()
	description = RichTextField()
	#body = models.TextField()
	body = RichTextField()
	thumbnail = models.ImageField(default='default.png', blank=True)
	# author
	created_on = models.DateTimeField(auto_now_add=True)
	modified_on = models.DateTimeField(auto_now=True)
	categories = models.ManyToManyField('Category', related_name='posts')

	def __str__(self):
		return self.title

class Comment(models.Model):
	author = models.CharField(max_length=60)
	body = models.TextField()
	created_on = models.DateTimeField(auto_now_add=True)
	modified_on = models.DateTimeField(auto_now=True)
	post = models.ForeignKey('Post', on_delete=models.CASCADE)

	def __str__(self):
		return self.author