from django.db import models
# Create your models here.
class songs(models.Model):
    song_id=models.AutoField
    name=models.CharField(max_length=100 , default='')
    language=models.CharField(max_length=200,default='Hindi')
    singername=models.CharField(max_length=200,default='Mika') 
    movie=models.CharField(max_length=500,default='unknown') 
    type1=models.CharField(max_length=200,default='Romantic')
    image=models.ImageField(upload_to="images",default='images/banner.png')
    song=models.FileField( upload_to="songs",default="")

    def __str__(self):
        return self.name