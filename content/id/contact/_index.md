---
title: "Hubungi Kami | aiaiaiads"
description: "Bicara dengan manusia sungguhan. Hubungi tim support advertiser, publisher, atau kemitraan kami."
translationKey: "contact"
draft: false
---

## Bicara dengan manusia.

### Support advertiser

{{< v "SUPPORT_EMAIL_ADV" >}}

### Support publisher

{{< v "SUPPORT_EMAIL_PUB" >}}

### Kemitraan & pers

{{< v "SUPPORT_EMAIL_BIZ" >}}

### Kirim pesan kepada kami

<form class="contact-form" action="{{< v "FORM_ENDPOINT" >}}" method="POST">
  <div class="form-field">
    <label for="name">Nama Anda</label>
    <input type="text" id="name" name="name" required>
  </div>
  <div class="form-field">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div class="form-field">
    <label for="role">Saya adalah...</label>
    <select id="role" name="role">
      <option value="advertiser">Advertiser</option>
      <option value="publisher">Publisher</option>
      <option value="other">Lainnya</option>
    </select>
  </div>
  <div class="form-field">
    <label for="message">Pesan</label>
    <textarea id="message" name="message" required></textarea>
  </div>
  <button type="submit" class="btn btn--primary">Kirim pesan</button>
</form>

### Laporkan iklan buruk

Menemukan iklan buruk? Laporkan beserta URL penempatannya ke {{< v "ABUSE_EMAIL" >}}. Kami menyelidiki setiap laporan dalam {{< v "ABUSE_SLA" >}}.
