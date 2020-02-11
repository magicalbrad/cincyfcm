---
title: Members
description: The membership Greater Cincinnati chapter of the Fellowship of Christian Magicians includes everything from hobbyists to full-time professionals.
featuredImage: /img/fcm-meeting.jpg
featuredImageDesc: FCM Meeting
eleventyNavigation:
  key: Members
  order: 10
---
The membership Greater Cincinnati chapter of the Fellowship of Christian Magicians includes everything from hobbyists to full-time professionals.

Here is a listing of a few of our local members who are available to perform at your church or other event.

{% for member in collections.member %}
<p style="text-align: center"><a href="{{ member.url}}"><strong>{{ member.data.title }}</strong></a></p>
{% endfor %}

_If you’re an active member, and would like to be included on this list, [just let us know](/contact/)!_
