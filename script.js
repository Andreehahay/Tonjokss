const stickman = document.getElementById('stickman');
const healthBar = document.getElementById('health');
const message = document.getElementById('message');
const blood = document.getElementById('blood');
const apologyBox = document.getElementById('apology-box');

let health = 100;

const strongMessages = [
    "Hahaha ga kerasa cilll!",
    "Pukul lagi lahh cill yang kerasss!",
    "Ayoo, masa segini doang?"
];

const weakMessages = [
    "Ampunnn cill tadii cuma bercandaaa!",
    "Aaaaa sakittttt!",
    "Ampunnnn!"
];

stickman.addEventListener('click', () => {
    if (health > 0) {
        health -= 10;
        healthBar.style.width = health + '%';
        
        // Tampilkan darah sementara
        blood.style.display = 'block';
        blood.style.opacity = '1';
        blood.style.animation = 'blood-animation 0.5s ease-in-out';
        
        setTimeout(() => {
            blood.style.display = 'none';
        }, 500);

        // Pilih pesan acak berdasarkan kesehatan stickman
        if (health <= 0) {
            message.textContent = "KO! Stickman pingsan!";
            stickman.style.pointerEvents = 'none';
            apologyBox.style.display = 'block'; // Tampilkan kotak permintaan maaf
        } else if (health <= 30) {
            message.textContent = weakMessages[Math.floor(Math.random() * weakMessages.length)];
        } else {
            message.textContent = strongMessages[Math.floor(Math.random() * strongMessages.length)];
        }

        // Tampilkan pesan melayang ke atas
        message.style.animation = 'none';  // Reset animasi
        void message.offsetWidth;  // Trigger reflow untuk reset animasi
        message.style.animation = 'float-up 2s ease-in-out forwards';  // Mulai ulang animasi
    }
});
