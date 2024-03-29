---
description: Set timers and set a request to a webhook when its up
---

# Timers

Welcome to the Timer API. With this API you are able to set a timer and have it send a request to a webhook when the timer is up, with payload data and a custom HTTPS method

{% hint style="info" %}
API Link: https://timers.votemanager.xyz
{% endhint %}

## API Methods

{% swagger method="post" path="/new" baseUrl="" summary="Create" %}
{% swagger-description %}
Create a new timer
{% endswagger-description %}

{% swagger-parameter in="body" name="key" required="true" %}
API Key
{% endswagger-parameter %}

{% swagger-parameter in="body" name="url" required="true" %}
Webhook URL to send request to when timer is up
{% endswagger-parameter %}

{% swagger-parameter in="body" name="method" required="true" %}
HTTPS method to use when sending webhook request
{% endswagger-parameter %}

{% swagger-parameter in="body" name="duration" required="true" %}
Duration of the timer
{% endswagger-parameter %}

{% swagger-parameter in="body" name="payload" type="Object" %}
Data to send in the webhook request
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

{% swagger method="post" path="/status" baseUrl="" summary="Status" %}
{% swagger-description %}
Get the status of a timer
{% endswagger-description %}

{% swagger-parameter in="body" name="key" required="true" %}
API key
{% endswagger-parameter %}

{% swagger-parameter in="body" required="true" name="id" %}
Timer ID
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    error: false,
    message: {
    id: 'sample_id',
    date: 'Wed, 29 Jun 2022 17:12:08 GMT',
    url: 'https://some-url.com',
    method: 'POST',
    payload: {
      some: payload_data
    },
    timeLeft: '1 minute'
  }
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="/cancel" baseUrl="" summary="Cancel" %}
{% swagger-description %}
Cancel a timer
{% endswagger-description %}

{% swagger-parameter in="body" name="key" required="true" %}
API key
{% endswagger-parameter %}

{% swagger-parameter in="body" name="id" required="true" %}
ID of the timer to cancel
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    error: false,
    message: "cancelled"
}
```
{% endswagger-response %}
{% endswagger %}
