
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

function downloadResume() {
    window.location.href = "resume/resumepdf.pdf";
}

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
}

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'C++ Developer', 'Illustrator Designer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const fullName = document.querySelector("#fullname").value;
        const email = document.querySelector("input[name='Email']").value;
        const phone = document.querySelector("input[placeholder='Phone Number']").value;
        const subject = document.querySelector("input[placeholder='Email Subject']").value;
        const message = document.querySelector("textarea[name='message']").value;

        // Validate input
        if (!fullName || !email || !phone || !subject || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // EmailJS integration
        emailjs.send("service_q5cs8fs", "template_n5o8cki", {
            from_name: fullName,
            from_email: email,
            phone_number: phone,
            email_subject: subject,
            message: message
        }, "qLN2ZK_WBYPkwX7Pa")
            .then(response => {
                alert("Message sent successfully!");
                document.querySelector("form").reset();
            })
            .catch(error => {
                console.error("Error sending message: ", error);
                alert("Failed to send message. Please try again.");
            });
    });
});

let underWorking=document.querySelectorAll(".underworking");
underWorking.forEach((val)=>{
    val.addEventListener("click",()=>{
        alert("sorry! under working");
    })
})
