from rest_framework import serializers
from .models import Comment, Meeting
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _

class CommentSerializer(serializers.ModelSerializer):
	username = serializers.CharField(source='user.username', read_only=True)
	time = serializers.ReadOnlyField()
	
	class Meta:		
		model = Comment
		read_only_fields=('time',)
		fields = ('comment', 'user', 'meet', 'time', 'username')

class UserSerializer(serializers.ModelSerializer):
	#meetings = serializers.PrimaryKeyRelatedField(many=True, queryset=Meeting.objects.all())
	class Meta:
		model = User
		fields = ('id', 'username', 'email', 'first_name', 'is_staff', 'password')
		extra_kwargs = {'password': {'write_only': True}}

class MeetingSerializer(serializers.ModelSerializer):
	created_by = serializers.ReadOnlyField(source='created_by.username')
	created_on = serializers.ReadOnlyField()
	comments = CommentSerializer(many=True, read_only=True)
	#user = serializers.SlugRelatedField(slug_field='username')
	class Meta:
		model = Meeting
		read_only_fields = ('created_by', 'created_on')
		fields = ('meeting_id','created_by', 'created_on', 'purpose', 'meeting_on', 'venue', 'participants', 'meet_type', 'comments')