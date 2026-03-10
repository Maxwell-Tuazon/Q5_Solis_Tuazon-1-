from django.db import models

class Conversation(models.Model):
    _id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    def __str__(self):
        return self.title

class Message(models.Model):
    _id = models.AutoField(primary_key=True)
    conversation = models.ForeignKey(Conversation, on_delete=models.CASCADE)
    role = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)



# Create your models here.
