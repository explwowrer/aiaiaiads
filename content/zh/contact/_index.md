---
title: "联系我们 | aiaiaiads"
description: "与真人对话。联系我们的广告主支持、流量主支持或商务合作团队。"
translationKey: "contact"
draft: false
---

## 与真人对话。

### 广告主支持

[[SUPPORT_EMAIL_ADV]]

### 流量主支持

[[SUPPORT_EMAIL_PUB]]

### 商务合作与媒体

[[SUPPORT_EMAIL_BIZ]]

### 给我们留言

<form class="contact-form" action="[[FORM_ENDPOINT]]" method="POST">
  <div class="form-field">
    <label for="name">您的姓名</label>
    <input type="text" id="name" name="name" required>
  </div>
  <div class="form-field">
    <label for="email">电子邮箱</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div class="form-field">
    <label for="role">我的身份</label>
    <select id="role" name="role">
      <option value="advertiser">广告主</option>
      <option value="publisher">流量主</option>
      <option value="other">其他</option>
    </select>
  </div>
  <div class="form-field">
    <label for="message">留言内容</label>
    <textarea id="message" name="message" required></textarea>
  </div>
  <button type="submit" class="btn btn--primary">发送消息</button>
</form>

### 举报违规广告

发现违规广告？请将广告位链接发送至 [[ABUSE_EMAIL]]。我们会在 [[ABUSE_SLA]] 内调查每一份举报。
