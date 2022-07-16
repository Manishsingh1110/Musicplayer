from django.shortcuts import render
from .models import songs
from math import ceil
import random
# Create your views here.
def play(request):
    song11=list(songs.objects.all())
    random.shuffle(song11)
    n=len(song11)
    nSlides=n//3+ceil(n/3-n//3)
    singers=songs.objects.values('singername')
    sing={item['singername'] for item in singers}
    allsing=[]
    for singer in sing:
        singer_name=songs.objects.filter(singername=singer)
        allsing.append(singer_name)
    lang=songs.objects.values('language')
    langs={item['language'] for item in lang}
    alllang=[]
    for languages in langs:
        languagess=songs.objects.filter(language=languages)
        alllang.append(languagess)
    alb=songs.objects.values('movie')
    albs={item['movie'] for item in alb}
    allalbums=[]
    for album in albs:
        albums=songs.objects.filter(movie=album)
        allalbums.append(albums)
    typ=songs.objects.values('type1')
    type11={item['type1'] for item in typ}
    alltypes=[]
    for typee in type11:
        songtype=songs.objects.filter(type1=typee)
        alltypes.append(songtype)
    parameter={'song11':song11,'singer':allsing,'language':alllang,'albums':allalbums,'songtype':alltypes}
    return render(request,'index.html',parameter)

def searchmatch(query,item):
    if query in item.name.lower() or query in item.language.lower() or query in item.singername.lower() or query in item.movie.lower() or query in item.type1.lower() :
        return True
    else:
        return False
def search(request):
    query= request.GET.get('search')
    song1=songs.objects.all()
    song11=[item for item in song1 if searchmatch(query,item)]
    n=len(song11)
    nSlides=n//3+ceil(n/3-n//3)
    singers=songs.objects.values('singername')
    sing={item['singername'] for item in singers}
    allsing=[]
    for singer in sing:
        singer_name1=songs.objects.filter(singername=singer)
        singer_name=[item for item in singer_name1 if searchmatch(query,item)]
        if len(singer_name)!=0:
            allsing.append(singer_name)
    print(allsing)
    alb=songs.objects.values('movie')
    albs={item['movie'] for item in alb}
    allalbums=[]
    for album in albs:
        albums1=songs.objects.filter(movie=album)
        albums=[item for item in albums1 if searchmatch(query,item)]
        if len(albums)!=0:
            allalbums.append(albums)
    parameter={'song11':song11,'singer':allsing,'albums':allalbums,}
    return render(request,'searchalt.html',parameter)
def playsong(request,name):
    song=songs.objects.filter(singername=name)
    params={'songs':song}
    return render(request,'songs.html',params)
def playsongtype(request,type2):
    song=songs.objects.filter(type1=type2)
    params={'songs':song}
    return render(request,'genre.html',params)
def playlanguage(request,language2):
    song=songs.objects.filter(language=language2)
    # print(song)
    params={'songs':song}
    return render(request,'language.html',params)
def playalbum(request,album):
    song=songs.objects.filter(movie=album)
    # print(song)
    params={'songs':song}
    return render(request,'language.html',params)
def allthings(request,name):
    if(name=='Tracks'):
        song11=songs.objects.all()
        params={'songs':song11,'title':name}
    elif(name=='Singers'):
        singers=songs.objects.values('singername')
        sing={item['singername'] for item in singers}
        allsing=[]
        for singer in sing:
            singer_name=songs.objects.filter(singername=singer)
            allsing.append(singer_name)
        params={'songs':allsing ,'title':name}
    elif(name=='movie'):
        alb=songs.objects.values('movie')
        albs={item['movie'] for item in alb}
        allalbums=[]
        for album in albs:
            albums=songs.objects.filter(movie=album)
            allalbums.append(albums)
        print(allalbums)
        params={'songs':allalbums ,'title':name}
    return render(request,'all.html',params)
