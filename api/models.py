from django.db import models

# Create your models here.


class Doctor(models.Model):
    name = models.CharField(max_length=100)
    specialist = models.CharField(max_length=100)
    practise = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.name}'
