from django.contrib import auth
from django.shortcuts import render
from django.shortcuts import render_to_response ,redirect , HttpResponse #render
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
# Create your views here.
#

def register(request):
    if request.method == "POST":
        try:
            user = User.objects.get(username=request.POST['username'])
            if user is not None:
                return render(request, 'main.html', {'login_error': 'Користувач з таким нікнеймом  вже зареєстрований. Будь ласка , зробіть повторну реєстрацію.'})
        except:
            if request.POST['password'] == request.POST['password2']:
                user = User.objects.create_user(username=request.POST['username'], password=request.POST['password'])
                user.save()
                return login(request)
            else:
                return render(request,'main.html', {'pass_error': 'Паролі не співпадають.'})
    else:
        return render(request, 'main.html', {})


def login(request):
    args = {}
    if request.method == 'POST':
        username = request.POST.get('username'  , '')
        password = request.POST.get('password' , '')
        user = auth.authenticate(username=username , password=password)
        print(username)
        print(password)
        if user is not None and user.is_active:
            auth.login(request , user)
            return redirect('/')
        else:
            args['login_error'] = "User is not found"
            print("di4b")
            return render(request , 'login.html' , args)
    else:
        return render( request , 'login.html', args)



def logout(request):
    auth.logout(request)
    return redirect('/')