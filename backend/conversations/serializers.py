from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['_id', 'conversation', 'role', 'content', 'created_at']

class ConversationSerializer(serializers.ModelSerializer):
    messages = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Conversation
        fields = ['_id', 'title', 'created_at', 'updated_at', 'messages']
    def get_messages(self, obj):
        messages = Message.objects.filter(conversation=obj).order_by('created_at')
        serializer = MessageSerializer(messages, many=True)
        return serializer.data