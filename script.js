function showTab(tabId) {
    var sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });

    var tabs = document.querySelectorAll('nav a');
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    document.getElementById(tabId).style.display = 'block';

    var activeTab = document.querySelector('nav a[onclick="showTab(\'' + tabId + '\')"]');
    activeTab.classList.add('active');
}

function toggleAnswer(faqNumber) {
    var answer = document.querySelector('.faq-item:nth-child(' + faqNumber + ') .answer');
    answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';
}
