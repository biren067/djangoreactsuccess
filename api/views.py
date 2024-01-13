from rest_framework import viewsets
from django.db.models import Q
from rest_framework.response import Response
from .models import Doctor
from .serializers import DoctorSerializer


class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

    def create(self, request, *args, **kwargs):
        name = request.data.get('name')
        specialist = request.data.get('specialist')
        practise = request.data.get('practise')
        doctor_instance = Doctor.objects.create(
            name=name, specialist=specialist, practise=practise)
        serializer = self.get_serializer(doctor_instance)
        return Response(serializer.data, status=201)

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


# class QuestionAnswerViewSet(viewsets.ModelViewSet):
#     queryset = QuestionAnswer.objects.all()
#     serializer_class = QuestionAnswerSerializer

#     def create(self, request, *args, **kwargs):
#         subject = request.data.get('subject')
#         topic = request.data.get('topic')
#         menu_ob = Menu.objects.filter(
#             Q(subject=subject) & Q(topic=topic)).first()
#         question = request.data.get('question')
#         optionA = request.data.get('optionA')
#         optionB = request.data.get('optionB')
#         optionC = request.data.get('optionC')
#         optionD = request.data.get('optionD')
#         answer = request.data.get('answer')
#         explanation = request.data.get('explanation')
#         print("Create Question::", request.data)
#         qa_instance = QuestionAnswer.objects.create(question=question,
#                                                     optionA=optionA,
#                                                     optionB=optionB,
#                                                     optionC=optionC,
#                                                     optionD=optionD,
#                                                     answer=answer,
#                                                     explanation=explanation,
#                                                     type=menu_ob)
#         serializer = self.get_serializer(qa_instance)
#         return Response(serializer.data, status=201)

#     def list(self, request, subject, topic):
#         queryset = self.filter_queryset(self.get_queryset())
#         serializer = self.get_serializer(queryset, many=True)
#         print("Get list: ", subject, topic)
#         # subject = request.data.get('subject')
#         # topic = request.data.get('topic')
#         menu_ob = Menu.objects.filter(
#             Q(subject=subject) & Q(topic=topic)).first()
#         qa_instance = QuestionAnswer.objects.filter(type=menu_ob)
#         # print(":::",qa_instance)
#         serializer = self.get_serializer(qa_instance, many=True)
#         return Response(serializer.data)
