var cacheName = 'apppwa-v1';
var filesToCache = [
    './',
    './index.html',
    'https://blogger.googleusercontent.com/img/a/AVvXsEiEUcfYIdJ3MVJYzxc6QfMzLVZudUaRB_g6C6oRiOovxfEvyRzVWIHFSoMktfg9qACY7uXzo090XaxOstRHIfgk1NWdhbgLAYv9MQSx9dPilGN3I4oQI2zsrmJpXY5dw600uiUlliA4ZPranGVofH9HkiaqYAiOCncKuLcAzqaehzw-F_FgwCVLM5MMJQ=s36',
    'https://blogger.googleusercontent.com/img/a/AVvXsEiEUcfYIdJ3MVJYzxc6QfMzLVZudUaRB_g6C6oRiOovxfEvyRzVWIHFSoMktfg9qACY7uXzo090XaxOstRHIfgk1NWdhbgLAYv9MQSx9dPilGN3I4oQI2zsrmJpXY5dw600uiUlliA4ZPranGVofH9HkiaqYAiOCncKuLcAzqaehzw-F_FgwCVLM5MMJQ=s48',
    'https://blogger.googleusercontent.com/img/a/AVvXsEiEUcfYIdJ3MVJYzxc6QfMzLVZudUaRB_g6C6oRiOovxfEvyRzVWIHFSoMktfg9qACY7uXzo090XaxOstRHIfgk1NWdhbgLAYv9MQSx9dPilGN3I4oQI2zsrmJpXY5dw600uiUlliA4ZPranGVofH9HkiaqYAiOCncKuLcAzqaehzw-F_FgwCVLM5MMJQ=s72',
    'https://blogger.googleusercontent.com/img/a/AVvXsEiEUcfYIdJ3MVJYzxc6QfMzLVZudUaRB_g6C6oRiOovxfEvyRzVWIHFSoMktfg9qACY7uXzo090XaxOstRHIfgk1NWdhbgLAYv9MQSx9dPilGN3I4oQI2zsrmJpXY5dw600uiUlliA4ZPranGVofH9HkiaqYAiOCncKuLcAzqaehzw-F_FgwCVLM5MMJQ=s96',
    'https://blogger.googleusercontent.com/img/a/AVvXsEiEUcfYIdJ3MVJYzxc6QfMzLVZudUaRB_g6C6oRiOovxfEvyRzVWIHFSoMktfg9qACY7uXzo090XaxOstRHIfgk1NWdhbgLAYv9MQSx9dPilGN3I4oQI2zsrmJpXY5dw600uiUlliA4ZPranGVofH9HkiaqYAiOCncKuLcAzqaehzw-F_FgwCVLM5MMJQ=s144',
    'https://blogger.googleusercontent.com/img/a/AVvXsEiEUcfYIdJ3MVJYzxc6QfMzLVZudUaRB_g6C6oRiOovxfEvyRzVWIHFSoMktfg9qACY7uXzo090XaxOstRHIfgk1NWdhbgLAYv9MQSx9dPilGN3I4oQI2zsrmJpXY5dw600uiUlliA4ZPranGVofH9HkiaqYAiOCncKuLcAzqaehzw-F_FgwCVLM5MMJQ=s192',
    'https://blogger.googleusercontent.com/img/a/AVvXsEiEUcfYIdJ3MVJYzxc6QfMzLVZudUaRB_g6C6oRiOovxfEvyRzVWIHFSoMktfg9qACY7uXzo090XaxOstRHIfgk1NWdhbgLAYv9MQSx9dPilGN3I4oQI2zsrmJpXY5dw600uiUlliA4ZPranGVofH9HkiaqYAiOCncKuLcAzqaehzw-F_FgwCVLM5MMJQ=s512',
    './manifest.json'
];
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
