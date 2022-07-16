"""musicplayer URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.play, name='player'),
    path('song/<name>',views.playsong,name='songplay'),
    path('songtype/<type2>',views.playsongtype,name='songplaytype'),
    path('songlanguage/<language2>',views.playlanguage,name='songlanuage'),
    path('songalbum/<album>',views.playalbum,name='songalbum'),
    path('search/',views.search,name='search'),
    path('all/<name>',views.allthings,name='allthing'),
]+ static(settings.MEDIA_URL ,document_root=settings.MEDIA_ROOT)
