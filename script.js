function scrollToAppointment() {
    document.getElementById("appointment").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const doctor = document.getElementById("doctor").value;

    const message = document.getElementById("message");

    if (name === "" || phone === "" || doctor === "") {
        message.textContent = "❌ Please fill all required fields";
        message.style.color = "red";
        return;
    }

    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    appointments.push({
        name,
        phone,
        doctor,
        date: document.getElementById("date").value
    });

    localStorage.setItem("appointments", JSON.stringify(appointments));

    message.textContent = "✅ Appointment booked successfully!";
    message.style.color = "green";

    this.reset();
});
