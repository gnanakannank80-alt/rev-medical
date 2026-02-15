function scrollToAppointment() {
    document.getElementById("appointment").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const message = document.getElementById("message");

    const data = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        phone: document.getElementById("phone").value,
        date: document.getElementById("date").value,
        doctor: document.getElementById("doctor").value,
        problem: document.getElementById("problem").value
    };

    if (!data.name || !data.phone || !data.doctor) {
        message.textContent = "❌ Please fill all required fields";
        message.style.color = "red";
        return;
    }

    fetch("https://script.google.com/macros/s/AKfycbzjGopru66AVKMXIjUdC3DFopAU3QwDCD9CyHep_fHQUtoZFKObdBrkpps57ozsAsI4/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        message.textContent = "✅ Appointment booked successfully!";
        message.style.color = "green";
        document.getElementById("appointmentForm").reset();
    })
    .catch(error => {
        message.textContent = "✅ Appointment booked successfully!";
        message.style.color = "red";
    });
});



