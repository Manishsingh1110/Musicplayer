# Generated by Django 4.0.1 on 2022-07-10 07:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('player', '0002_alter_songs_image_alter_songs_language_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='songs',
            name='movie',
            field=models.CharField(default='unknown', max_length=500),
        ),
    ]