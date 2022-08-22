

import "./contact.css"

function Contact() {
    return (
        <div className="contact">
         

            <div className="gird">
                <div class="cellContainer-one">
                    <div className="head-text">Let's talk about</div>
                    <div className="head-text" style={{marginBottom:'32px'}}>everything!</div>
                    <div className="detail-text">La Ceylon Global(pvt)Ltd</div>
                    <div className="detail-text">Kanugala,Muruthenge,SriLanka</div>
                    <div className="detail-text">salse@laceloyn.com</div>
                    <div className="image">
                        <img src={require("../assets/contact.png")} alt="Contact" width={400} />
                    </div>
                </div>
                <div class="cellContainer-two" >
                    <form>
                        <div className="input-text"><input type="text" placeholder="Your Name" require /></div>
                        <div className="input-text"><input type="email" placeholder="Email"  require/></div>
                        <div className="input-text"><input type="text" placeholder="Subject" require/></div>
                        <div className="input-text"><textarea placeholder="Write your message" require></textarea></div>
                        <div className="div-btn"><input type="reset" value="Send Message" className="btn-submit"/></div>
                    </form>

                </div>

            </div>


        </div>

    );
}

export default Contact;