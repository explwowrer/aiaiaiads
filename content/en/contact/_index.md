---
title: "Contact Us | aiaiaiads"
description: "Talk to a real human. Reach our advertiser support, publisher support, or partnerships team."
translationKey: "contact"
draft: false
---

## Talk to a human.

### Advertiser support

[[SUPPORT_EMAIL_ADV]]

### Publisher support

[[SUPPORT_EMAIL_PUB]]

### Partnerships & press

[[SUPPORT_EMAIL_BIZ]]

### Send us a message

<form class="contact-form" action="[[FORM_ENDPOINT]]" method="POST">
  <div class="form-field">
    <label for="name">Your name</label>
    <input type="text" id="name" name="name" required>
  </div>
  <div class="form-field">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div class="form-field">
    <label for="role">I am a…</label>
    <select id="role" name="role">
      <option value="advertiser">Advertiser</option>
      <option value="publisher">Publisher</option>
      <option value="other">Other</option>
    </select>
  </div>
  <div class="form-field">
    <label for="message">Message</label>
    <textarea id="message" name="message" required></textarea>
  </div>
  <button type="submit" class="btn btn--primary">Send message</button>
</form>

### Report a bad ad

Found a bad ad? Report it with the placement URL to [[ABUSE_EMAIL]]. We investigate every report within [[ABUSE_SLA]].
