from django.contrib import admin
from .models import Venue
from .models import Booking

admin.site.register(Booking)
admin.site.register(Venue)
