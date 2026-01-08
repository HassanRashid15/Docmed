import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit'
import footerheadimg from "./../Assets/Images/footerheadimg.png"

function Footer() {
  // All footer data in one object
  const footerData = {
    socialLinks: [
      { icon: "facebook-f", url: "" },
      { icon: "twitter", url: "" },
      { icon: "google", url: "" },
      { icon: "instagram", url: "" },
      { icon: "linkedin", url: "" },
      { icon: "github", url: "" }
    ],
    sections: [
      {
        title: "Products",
        links: [
          { name: "Angular", url: "#!" },
          { name: "React", url: "#!" },
          { name: "Vue", url: "#!" },
          { name: "Laravel", url: "#!" }
        ]
      },
      {
        title: "Useful links",
        links: [
          { name: "Pricing", url: "#!" },
          { name: "Settings", url: "#!" },
          { name: "Orders", url: "#!" },
          { name: "Help", url: "#!" }
        ]
      },
      {
        title: "Contact",
        info: [
          { icon: "home", text: "New York, NY 10012, US" },
          { icon: "envelope", text: "info@example.com" },
          { icon: "phone", text: "+ 01 234 567 88" },
          { icon: "print", text: "+ 01 234 567 89" }
        ]
      }
    ]
  }

  return (
    <>
      <div className='footer-page-custom footer-page'>
        <section className='footer-parent-custom'>
          <MDBContainer className='footer-alignment-custom text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              {/* Logo Section */}
              <div className='footer-logo-section d-flex align-items-center gap-1 ps-0 pb-2'>
                <img src={footerheadimg} alt="Docmed Logo" width={80} height={80} />
                <h6 className='fs-4 text-uppercase fw-bold mb-0'>DOCMED</h6>
              </div>

              {/* Company Info & Social Media */}
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                </p>
                <div className='me-5 d-none d-lg-block'>
                  <span>Get connected with us on social networks:</span>
                </div>
                <div className="connected-section-custom">
                  {footerData.socialLinks.map((link, index) => (
                    <a key={index} href={link.url} className='me-4 text-reset'>
                      <MDBIcon fab icon={link.icon} />
                    </a>
                  ))}
                </div>
              </MDBCol>

              {/* Dynamic Sections */}
              {footerData.sections.map((section, index) => (
                <MDBCol 
                  key={index} 
                  md={section.title === "Contact" ? "4" : section.title === "Useful links" ? "3" : "2"} 
                  lg={section.title === "Contact" ? "3" : "2"} 
                  xl={section.title === "Contact" ? "3" : "2"} 
                  className='mx-auto mb-4'
                >
                  <h6 className='text-uppercase fw-bold mb-4'>{section.title}</h6>
                  
                  {section.links ? (
                    section.links.map((link, linkIndex) => (
                      <p key={linkIndex}>
                        <a href={link.url} className='text-reset'>
                          {link.name}
                        </a>
                      </p>
                    ))
                  ) : (
                    section.info.map((info, infoIndex) => (
                      <p key={infoIndex}>
                        <MDBIcon icon={info.icon} className="me-2" />
                        {info.text}
                      </p>
                    ))
                  )}
                </MDBCol>
              ))}
            </MDBRow>
          </MDBContainer>
        </section>
        
        {/* Footer Copyright */}
        <MDBFooter className='connected-section-custom-parent text-center text-lg-start text-muted'>
          <section className='connected-section-custom d-flex justify-content-center justify-content-lg-between py-0 border-bottom'>
            {/* Empty section - you can add content here if needed */}
          </section>
          
          <div className='text-end p-4 text-white'>
            Copyright © 2024 
            <em>
              <a className='text-reset footer-copyright-area fw-bold'>
                HR TECH All rights reserved
              </a>
            </em>
          </div>
        </MDBFooter>
      </div>
    </>
  )
}

export default Footer