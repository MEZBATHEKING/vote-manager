---
description: Create a new timer
---

# Create

{% swagger method="post" path="https://timers.votemanager.xyz/new" baseUrl="" summary="Create" %}
{% swagger-description %}
Set a new timer
{% endswagger-description %}

{% swagger-parameter in="body" required="true" name="key" type="String" %}
API key
{% endswagger-parameter %}

{% swagger-parameter in="body" name="url" required="true" type="String" %}
Webhook URL to send request to when timer is up
{% endswagger-parameter %}

{% swagger-parameter in="body" required="true" name="method" type="String" %}
HTTPS method to use for webhook
{% endswagger-parameter %}

{% swagger-parameter in="body" name="duration" required="true" type="Integer" %}
Duration of the timer
{% endswagger-parameter %}

{% swagger-parameter in="body" name="payload" type="Object" %}
Payload data to send with request
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    error: false,
    message: timer_id,
    scheduled: date
}
```
{% endswagger-response %}
{% endswagger %}
