from django.contrib import auth
from django.shortcuts import render
from django.shortcuts import render_to_response ,redirect , HttpResponse #render
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.http.response import HttpResponse , Http404
from django.template import Context
from .models import Products,Phone,Comments , Category
# Create your views here.
import json

def phones_view(request):
    f = Phone.objects.all()
    response_data = [i.dict() for i in f]
    return HttpResponse(json.dumps({'phones': response_data}), content_type="application/json")


def phones_view_api(request):
     result = "OK!"
     error_api = "Error"
     if request.method == "POST" and request.POST['title'] and request.POST['desc'] and request.POST['price']  and request.POST['rate']:

         f1 = Phone.objects.create(
                              id = request.POST['id'],
                              title=request.POST['title'],
                              desc=request.POST['desc'],
                              price=request.POST['price'],
                              rate=request.POST['rate'],
                              date = '2001-01-01',
                                  )
         response_data = f1.dict()
         request.session['has_posted_already'] = True
         return HttpResponse(json.dumps({'phone': response_data}), content_type="application/json" )
     return HttpResponse(json.dumps({'Status' : 'error2'}) , content_type="application/json")

def phone_del_api(request, id):
     if request.method == "POST":
         phone = Phone.objects.get(id=id)
         Phone.objects.get(id=id).delete()
         response_data = phone.dict()
         return HttpResponse(json.dumps({'phone': response_data, 'status': 'deleted ok'}),
                             content_type="application/json")
     return HttpResponse(json.dumps({'Status': 'error2'}), content_type="application/json")


