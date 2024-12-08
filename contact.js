<script>
function saveFormData() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    let data = '';

    formData.forEach((value, key) => {
        data += `${key}: ${value}\n`;
    });

    const blob = new Blob([data], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'contact_form_data.txt';

    document.body.appendChild(a);
    a.click();
}
</script>