import React from 'react'
import userfeed from "./../Assets/Images/userfeed.jpg";
function Contact() {
  return (
    <div>
      <div>
        <h1 className='text-center' >Contact us</h1>
      </div>
      <div class="contact-form-parent d-flex">
<div class="form-side-box w-50">
  <div class="form-side-content ">
<h1>Contact Us</h1>
<p>We're open for any suggestion or just to have a chat
</p>
<div class="inside-form-content-parent d-flex">
<div class="first-section-custom w-50">
<h1>Email:</h1>
<p>Enter Your Email</p>
</div>
<div class="second-section-custom w-50">
<h1>Phone No:</h1>
<p>xxxx-xxxx-xxx</p>
</div>
</div>
  </div>
  <div class="form__group field">
  <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
  <label for="name" class="form__label">Name</label>
</div>
</div>
<div class="image-side-box w-50">
<img src={userfeed}/>
</div>
      </div>
    </div>
  )
}

export default Contact
