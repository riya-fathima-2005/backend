from django.urls import path
from . import views

urlpatterns = [

    path('', views.index, name='index'),

    path('allusers/', views.allusers, name='allusers'),
    path('venues/', views.venues, name='venues'),
    path('edit-venue/<int:id>/', views.edit_venue, name='edit_venue'),
    path('delete-venue/<int:id>/', views.delete_venue, name='delete_venue'),




    # API
    path('api/venues/', views.venue_api),
   path('api/bookings/', views.booking_api),

    
    

    path('bookings/', views.bookings, name='bookings'),


    path('allusergroups/', views.allusergroups, name='allusergroups'),
    path('hosts/', views.hosts, name='hosts'),

    path('payments/', views.payments, name='payments'),

    path('messages/', views.messages, name='messages'),

    path('settings/', views.settings, name='settings'),

]