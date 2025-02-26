ading content:', error);
    }
}

// حفظ البيانات محليًا
function saveDataLocally(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// التحميل الأولي
document.addEventListener('DOMContentLoaded', loadContent);
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('Service Worker Registered'))
        .catch(err => console.log('Service Worker Error:', err));
}
// إدارة المناظرات
const debates = [];

function addDebate(topic, participants) {
    debates.push({ topic, participants, timestamp: new Date() });
    saveDataLocally('debates', debates);
    updateDebatesList();
}

function updateDebatesList() {
    const list = document.getElementById('debates-list');
    list.innerHTML = debates.map(debate => 
        `<div class="debate-item">
            <h3>${debate.topic}</h3>
            <p>المشاركون: ${debate.participants.join(', ')}</p>
        </div>`
    ).join('');
}
// مراقبة التغييرات في المحتوى
setInterval(() => {
    fetch('https://api.your-platform.com/updates')
        .then(res => res.json())
        .then(updates => {
            if (updates.length > 0) {
                alert('يوجد تحديثات جديدة!');
            }
        });
}, 3600000); // كل ساعة
// مثال لمراقبة النص
document.querySelectorAll('p').forEach(element => {
    deepseek.moderate(element.textContent).then(result => {
        if (!result.isApproved) {
            element.style.color = 'red';
        }
    });
});
