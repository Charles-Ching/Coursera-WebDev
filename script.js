function submitForm() {
   /* Check if name and email address entered. */
   let v_error = false;
   if(document.getElementById("name").value == "") {
      alert("Name is required!");
      v_error = true;
   }
   if (document.getElementById("email").value == "") {
      alert("Email address is required!");
      v_error = true;
   }
   /* Check if radio button selected. */
   if(document.querySelector('input[name="rating"]:checked') == null) {
      alert("You need to choose a rating!");
      v_error = true;
   }
   /* Feedback submitted if no error. */
   if (!v_error) {
      alert("Your feedback is submitted.")
   }
}