# system-bot — بوت ديسكورد + لوحة تحكم

## الإعداد (مرة واحدة)
1. Developer Portal ← Bot: فعّل Server Members Intent و Message Content Intent.
2. OAuth2: انسخ Client Secret، وأضف Redirect بالضبط: http://localhost:3000/callback
3. املأ ملف .env (TOKEN, CLIENT_ID, CLIENT_SECRET, SESSION_SECRET).
4. رتبة البوت بصلاحية Administrator وفوق كل الرتب (ضروري للاسترجاع والعقوبات).
5. في الـ Terminal داخل الفولدر:  npm install  ثم  npm start
6. افتح http://localhost:3000

## ملاحظات
- نفس ملف config.json القديم يعمل مع هذه النسخة.
- الحماية في البداية متوقفة. شغّلها بالأمر /protect all أو من اللوحة.
- أقسام الحماية (الحماية، الدرع، الموثوقين، التحقق) للأونر فقط.
