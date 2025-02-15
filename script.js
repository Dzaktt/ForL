const displayName = document.getElementById('displayName');
        const messageContainer = document.getElementById('messageContainer');
        const nextPageButton = document.getElementById('nextPageButton');
        const loveEffect = document.querySelector('.love-effect');

        const crushName = "Lintang-ku "; // Ganti dengan nama pacarmu
        const messages = [
            "Happy Valentine's Day!",
            "Stay here, don't leave, and accompany me until we grow old together.",
            "You are my destination in both happiness and sorrow.",
            "I can't imagine how shattered my days would be if you were no longer here.",
            "If you ever feel bored, stay here.",
            "Let me fix everything to make you comfortable and never want to leave for someone else."
        ];

        let currentMessageIndex = 0;

        function showMessageWithTypingAnimation() {
            if (currentMessageIndex < messages.length) {
                const text = messages[currentMessageIndex];
                const messageElement = document.createElement('p'); 
                messageElement.classList.add('message'); 
                messageContainer.appendChild(messageElement); 

                let charIndex = 0;
                const typingInterval = setInterval(() => {
                    if (charIndex < text.length) {
                        messageElement.textContent += text.charAt(charIndex);
                        charIndex++;
                    } else {
                        clearInterval(typingInterval);
                        currentMessageIndex++;
                        if (currentMessageIndex < messages.length) {
                            setTimeout(showMessageWithTypingAnimation, 1000); 
                        }
                    }
                }, 100); 
            }
        }

        function createLoveEffect() {
            const emojis = ["💖", "😍", "💌", "🥰", "💕", "💘", "💓", "💞"];
            for (let i = 0; i < 50; i++) { 
                const span = document.createElement('span');
                span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                span.style.left = Math.random() * 100 + '%';
                span.style.animationDuration = Math.random() * 3 + 2 + 's';
                loveEffect.appendChild(span);
            }
        }

        nextPageButton.addEventListener('click', () => {
            window.location.href = 'Flower.html';
        });

        // Set nama langsung
        displayName.textContent = crushName;
        showMessageWithTypingAnimation();
        createLoveEffect();