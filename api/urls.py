from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DoctorViewSet

router = DefaultRouter()
router.register(r'doctor', DoctorViewSet, basename='doctor')


urlpatterns = [
    path('', include(router.urls)),
    # path(
    #     'doctor/', DoctorViewSet.as_view({'get': 'list'}), name='doctor-create'),
    path(
        'view/', DoctorViewSet.as_view({'get': 'list'}), name='doctor-create'),
]
