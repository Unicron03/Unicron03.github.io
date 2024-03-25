document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('hide-checkbox');
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            document.body.style.backgroundImage = "url('../Image/backgroundWhite.jpg')";
        } else {
            document.body.style.backgroundImage = "url('../Image/background.jpg')";
        }
    });
});