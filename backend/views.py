from django.shortcuts import render, redirect, get_object_or_404
from .models import Venue
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Venue
from .serializers import VenueSerializer
from .models import Booking
from .serializers import BookingSerializer


def index(request):

    venue_count = Venue.objects.count()

    context = {
        'venue_count': venue_count
    }

    return render(request, 'index.html', context)


from django.shortcuts import render, redirect, get_object_or_404
from .models import Venue


# ================= VENUE LIST =================

def venues(request):

    venues = Venue.objects.all()

    return render(request, 'venues.html', {
        'venues': venues
    })


def edit_venue(request, id):

    venue = get_object_or_404(Venue, id=id)


    if request.method == 'POST':

        venue.name = request.POST.get('name')

        venue.location = request.POST.get('location')

        venue.price = request.POST.get('price')

        venue.description = request.POST.get('description')



        if request.FILES.get('image'):

            venue.image = request.FILES.get('image')

      

        venue.save()

        return redirect('venues')

   

    return render(request, 'edit_venue.html', {
        'venue': venue
    })




def delete_venue(request, id):

    venue = get_object_or_404(Venue, id=id)

    venue.delete()

    return redirect('venues')


def add_venue(request):

    if request.method == 'POST':

        name = request.POST.get('name')
        location = request.POST.get('location')
        price = request.POST.get('price')
        description = request.POST.get('description')
        image = request.FILES.get('image')

        Venue.objects.create(
            name=name,
            location=location,
            price=price,
            description=description,
            image=image
        )

        return redirect('venues')

    return render(request, 'add_venue.html')




# ================= API =================
@api_view(['GET'])
def venue_api(request):

    venues = Venue.objects.all()

    serializer = VenueSerializer(venues, many=True)

    return Response(serializer.data)



# ================= BOOKINGS =================

def bookings(request):
    bookings = Booking.objects.all()
    return render(request, 'bookings.html', {'bookings': bookings})


@api_view(['GET'])
def booking_api(request):

    bookings = Booking.objects.all()

    serializer = BookingSerializer(bookings, many=True)

    return Response(serializer.data)





# ================= OTHER PAGES =================

def allusers(request):
    return render(request, 'allusers.html')



def allusergroups(request):
    return render(request, 'allusergroups.html')


def hosts(request):
    return render(request, 'hosts.html')


def payments(request):
    return render(request, 'payments.html')


def messages(request):
    return render(request, 'messages.html')


def settings(request):
    return render(request, 'settings.html')