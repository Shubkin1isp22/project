from django.db import models

class Message(models.Model):
    text = models.CharField(max_length=255)
    created = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='uploads/', blank=True, null=True)
