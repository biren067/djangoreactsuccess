
from rest_framework import serializers


class DoctorSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=200)
    specialist = serializers.CharField(max_length=200)
    practise = serializers.CharField(max_length=200)
