from django.db import models



class User(models.Model):

    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    



class Venue(models.Model):

    name = models.CharField(max_length=100)

    location = models.CharField(max_length=100)

    price = models.IntegerField()

    image = models.ImageField(upload_to='venues/', null=True, blank=True)

    description = models.TextField(null=True, blank=True)

    created_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.name



class Booking(models.Model):

    customer_name = models.CharField(max_length=100)

    customer_email = models.EmailField()

    customer_phone = models.CharField(max_length=15)

    venue = models.ForeignKey(Venue, on_delete=models.CASCADE)

    booking_date = models.DateField()

    guests = models.IntegerField()

    total_amount = models.IntegerField()

    status = models.CharField(
        max_length=50,
        choices=[
            ('Pending', 'Pending'),
            ('Confirmed', 'Confirmed'),
            ('Cancelled', 'Cancelled')
        ],
        default='Pending'
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.customer_name
    
