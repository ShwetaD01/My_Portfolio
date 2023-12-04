import React from 'react'

const Contact = () => {
  return (
    <div>
      <section class="contact" id="contact">
        <div class="max-width">
            <h2 class="title">Contact me</h2>
            <div class="contact-content">
                <div class="column left">
                    <div class="text">Get in Touch</div>
                    <p>If you are interested in working together? Please fill out the form aside with some info about your project and I will get back to you as soon as I can. Please allow a couple days for me to respond.</p>
                    <div class="icons">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Shweta Donode</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info">
                                <div class="head">Mobile No.</div>
                                <div class="sub-title">9922420948</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">shwetadonode819@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    <div class="text">Message me</div>
                    <form action="/post">
                        <div class="fields">
                            <div class="field name">
                                <input type="text" placeholder="Name" required/>
                            </div>
                            <div class="field email">
                                <input type="email" placeholder="Email" required/>
                            </div>
                        </div>
                        <div class="field">
                            <input type="text" placeholder="Subject" required/>
                        </div>
                        <div class="field textarea">
                            <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                        </div>
                        <div class="button-area">
                            <button type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contact
