document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // Current year automatically update
    const year = new Date().getFullYear();

    const copyright = document.querySelector(".copyright p");

    if (copyright) {
        copyright.innerHTML =
            "© " + year +
            " SAHIL T SHIRT PRINTING. All Rights Reserved.";
    }


    // Add simple animation when service cards appear
    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    cards.forEach(function (card) {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(card);

    });

});
// ---------- WHATSAPP ORDER FORM ----------

const orderForm = document.getElementById("orderForm");

if (orderForm) {

    orderForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("customerName").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const service =
            document.getElementById("service").value;

        const quantity =
            document.getElementById("quantity").value;

        const message =
            document.getElementById("message").value.trim();


        const whatsappNumber = "918250366736";


        const whatsappMessage =
`Hello SAHIL T SHIRT PRINTING 👋

I want to place an order.

👤 Name: ${name}
📱 Mobile: ${phone}
🖨️ Service: ${service}
📦 Quantity: ${quantity}

📝 Order Details:
${message || "No additional details"}

Thank you.`;


        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        window.open(whatsappURL, "_blank");

    });

}
