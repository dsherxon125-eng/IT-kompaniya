document.addEventListener('DOMContentLoaded', () => {
    const authModal = document.getElementById('authModal');
    const videoModal = document.getElementById('videoModal');
    const loginBtn = document.getElementById('loginBtn');
    const getStartedBtn = document.getElementById('getStartedBtn');
    const watchVideoBtn = document.getElementById('watchVideoBtn');
    const enrollBtns = document.querySelectorAll('.enroll-btn');
    const closeBtns = document.querySelectorAll('.close-btn');

    // Toggle Modals
    const openModal = (modalNode) => modalNode.classList.add('active');
    const closeModal = (modalNode) => modalNode.classList.remove('active');

    // Events for opening modals
    loginBtn.addEventListener('click', () => openModal(authModal));
    watchVideoBtn.addEventListener('click', () => openModal(videoModal));

    // Event for scroll
    getStartedBtn.addEventListener('click', () => {
        document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
    });

    // Close functionality
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(authModal);
            closeModal(videoModal);
        });
    });

    // Click outside to close
    window.addEventListener('click', (e) => {
        if (e.target === authModal) closeModal(authModal);
        if (e.target === videoModal) closeModal(videoModal);
    });

    // Course enrollment form
    enrollBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const course = e.target.getAttribute('data-course');
            const confirmEnroll = confirm(`Haqiqatan ham "${course}" kursiga yozilmoqchimisiz?`);
            if (confirmEnroll) {
                alert('Tabriklaymiz! Siz kursga ro\'yxatdan o\'tdingiz. Tez orada menejerlarimiz aloqaga chiqadi.');
            }
        });
    });

    // Form Submission Simulation
    const authForm = document.getElementById('authForm');
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Muvaffaqiyatli tizimga kirdingiz!');
        closeModal(authModal);
        loginBtn.innerHTML = '<i class="fa-solid fa-user"></i> Sizning Profilingiz';
        loginBtn.style.background = 'var(--primary)';
        loginBtn.style.color = 'white';
        loginBtn.style.border = 'none';
    });
});
