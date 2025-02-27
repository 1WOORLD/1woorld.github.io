#!/bin/bash

# خطوة 1: حذف node_modules القديمة (اختياري)  
rm -rf node_modules  

# خطوة 2: تثبيت التبعيات  
npm install  

# خطوة 3: حفظ التغييرات يدويًا لكل ملف  
git add index.html styles.css scripts.js package.json .gitignore  

# خطوة 4: Commit مع رسالة  
git commit -m "رفع الملفات الأساسية وتجاهل node_modules"  

# خطوة 5: رفع إلى GitHub  
git push origin main  