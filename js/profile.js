const profile = document.querySelector('.profile');

if (profile) {

    window.addEventListener('scroll', () => {

        const rect = profile.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const startPoint = windowHeight;
        const endPoint = windowHeight * 0.3;

        let progress =
            (startPoint - rect.top) /
            (startPoint - endPoint);

        progress = Math.max(0, Math.min(1, progress));

        const initialAngle = -10;

        const currentAngle =
            initialAngle * (1 - progress);

        profile.style.transform =
            `rotate(${currentAngle}deg)`;

    });

}