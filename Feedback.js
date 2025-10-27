document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.querySelector('input[name="rating"]:checked')?.value || '1';
    const comments = document.getElementById('comments').value;
    
    let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    feedbacks.push({ name, email, rating: parseInt(rating), comments, date: new Date().toISOString() });
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
    
    alert('Terima kasih atas feedback Anda! Kami akan mempertimbangkannya untuk meningkatkan layanan kesehatan.');
    this.reset();
});