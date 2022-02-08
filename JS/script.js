// const form = document.querySelector("form"),
// statusTxt = form.querySelector(".button-area span");

// function SendMail() {
//     var name = $('#name').val();
//     var email = $('#email').val();
//     var subject = $('#subject').val();
//     var message = $('#message').val();

//     var body = 'Name: '+name + '<br>From: '+email + '<br>Subject: '+subject +'<br><br>'+message;

//     Email.send({
//         SecureToken:"5f998273-dbcc-45ea-b2d6-c9efafe8725f",
//         To : 'tushar.lalawat7781@gmail.com',
//         From : "tk3850132@gmail.com",
//         Subject : "From: "+name,
//         Body : body
//     }).then(
//       message => {
//           if(message == 'OK'){
//             statusTxt.style.color = "green";
//             statusTxt.style.display = "block";
//             statusTxt.innerText = "Your message has been sent.";
//           }
//           else {
//             statusTxt.style.color = "red";
//             statusTxt.style.display = "block";
//             statusTxt.innerText = "Sorry, failed to send your message!";
//           }
//       }
//     );
// }

// const token = "152f05a1-3548-4b2c-9b40-ab1b24fabb0a";
// const $formContact = document.querySelector("#contact");
// statusTxt = $formContact.querySelector(".button-area span");

// const sendForm = event => {
//   event.preventDefault();
//   const message = {
//     name: document.querySelector("#name").value,
//     email: document.querySelector("#email").value,
//     subject: document.querySelector("#subject").value,
//     text: document.querySelector("#message").value
//   };
//   smtpJS(message);
// };

// const smtpJS = message => {
//   try {
//     Email.send(
//       "tushar.lalawat7781@gmail.com",
//       "tk3850132@gmail.com",
//       `${message.name} - ${message.subject}`,
//       message.text,
//       { token }
//     );
//     statusTxt.style.color = "green";
//     statusTxt.style.display = "block";
//     statusTxt.innerText = "Your message has been sent.";
//   } catch (e) {
//     statusTxt.style.color = "red";
//     statusTxt.style.display = "block";
//     statusTxt.innerText = "Sorry, failed to send your message!";
//   }
// };

// $formContact.addEventListener("submit", sendForm);

$(function() {
    AOS.init();
});

function sendEmail(){
    Email.send({
        SecureToken: "06650e55-e626-4321-a696-b5664cef9913",
        To : 'rk3850132@gmail.com',
        From : document.getElementById("email"),
        Subject : "Email from portfolio",
        Body : "And this is the body"
    }).then(
        message => alert(message)
    );
}
