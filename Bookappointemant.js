
$(document).ready(function () {
    $(".custom-nav").load("nav.html");
    $(".footer").load("footer.html");

    $("#appointmentForm").submit(function (event) {
        let isValid = true;
        $(".err_msg").text("");

        // Validate Name
        const name = $("#Name").val().trim();
        if (name === "") {
            $("#name_err").text("Name is required.");
            isValid = false;
        }
        else if (!/^[a-zA-Z]+$/.test(name)) {
            $("#name_err").text("name is not vaild.")
            isValid = false;
        }

        // Validate Phone
        const phone = $("#Phone").val().trim();
        if (phone === "") {
            $("#phone_err").text("Phone number is required.");
            isValid = false;
        } else if (!/^\d{10}$/.test(phone)) {
            $("#phone_err").text("Enter a valid 10-digit phone number.");
            isValid = false;
        }

        // Validate Email
        const email = $("#Email").val().trim();
        if (email === "") {
            $("#email_err").text("Email is required.");
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            $("#email_err").text("Enter a valid email address.");
            isValid = false;
        }

        // Validate Age
        const age = $("#age").val().trim();
        if (age === "") {
            $("#age_err").text("Age is required.");
            isValid = false;
        } else if (!/^\d+$/.test(age) || parseInt(age) < 0) {
            $("#age_err").text("Enter a valid age.");
            isValid = false;
        }

        // Validate DateTime
        const datetime = $("#datetime").val().trim();
        if (datetime === "") {
            $("#datetime_err").text("Date and time are required.");
            isValid = false;
        }

        // Validate Course
        const course = $("#course").val();
        if (course === "select") {
            $("#course_err").text("Please select a course.");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
