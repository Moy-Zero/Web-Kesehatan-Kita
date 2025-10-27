const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.style.display === 'block';
        
        document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
        
        answer.style.display = isOpen ? 'none' : 'block';
    });
});