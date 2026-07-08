---
title: "Контакты | aiaiaiads"
description: "Поговорите с живым человеком. Свяжитесь с поддержкой рекламодателей, паблишеров или отделом партнёрств."
translationKey: "contact"
draft: false
h1: "Поговорите с живым человеком."
---

### Поддержка рекламодателей

{{< v "SUPPORT_EMAIL_ADV" >}}

### Поддержка паблишеров

{{< v "SUPPORT_EMAIL_PUB" >}}

### Партнёрство и пресса

{{< v "SUPPORT_EMAIL_BIZ" >}}

### Отправьте нам сообщение

<form class="contact-form" action="{{< v "FORM_ENDPOINT" >}}" method="POST">
  <div class="form-field">
    <label for="name">Ваше имя</label>
    <input type="text" id="name" name="name" required>
  </div>
  <div class="form-field">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div class="form-field">
    <label for="role">Я —</label>
    <select id="role" name="role">
      <option value="advertiser">Рекламодатель</option>
      <option value="publisher">Паблишер</option>
      <option value="other">Другое</option>
    </select>
  </div>
  <div class="form-field">
    <label for="message">Сообщение</label>
    <textarea id="message" name="message" required></textarea>
  </div>
  <button type="submit" class="btn btn--primary">Отправить</button>
</form>

### Сообщить о плохой рекламе

Увидели плохую рекламу? Отправьте URL площадки на {{< v "ABUSE_EMAIL" >}}. Мы проверяем каждое обращение в течение {{< v "ABUSE_SLA" >}}.
