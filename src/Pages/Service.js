import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from "../Component/Footer.js"
import { FaCheck } from "react-icons/fa";

function Service() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
  };


  
  const pricingPlans = [
    {
      id: 'personal',
      title: 'Personal',
      price: '15',
      features: [
        'Strategic Alliance',
        'Growth Expansion',
        'Business Planning',
        'Contact Negotiation',
        'Market Positioning',
      ],
    },
    {
      id: 'professional',
      title: 'Professional',
      price: '30',
      features: [
        'Strategic Alliance',
        'Growth Expansion',
        'Business Planning',
        'Contact Negotiation',
        'Market Positioning',
      ],
    },
    {
      id: 'premium',
      title: 'Premium',
      price: '50',
      features: [
        'Strategic Alliance',
        'Growth Expansion',
        'Business Planning',
        'Contact Negotiation',
        'Market Positioning',
      ],
    },
    {
      id: 'ultimate',
      title: 'Ultimate',
      price: '80',
      features: [
        'Strategic Alliance',
        'Growth Expansion',
        'Business Planning',
        'Contact Negotiation',
        'Market Positioning',
      ],
    },
  ];
 


  return (
    <div className='service-page'>
      <h2 className='text-center' >What i Do?</h2>
      <div class="d-flex px-2 justify-content-around cards-box  second-cards-box
">
      <Card>
   

      <Card.Body>
        <Card.Title className='text-center' >UI/UX Design</Card.Title>
        <Card.Text   >
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title className='text-center'  >Web Development</Card.Title>
        <Card.Text>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title className='text-center'  >Graphic Design</Card.Title>
        <Card.Text>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title className='text-center'  >IT Consultancy</Card.Title>
        <Card.Text>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div class="d-flex px-2 justify-content-around cards-box
">
      <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title className='text-center'  >Mobile App Design</Card.Title>
        <Card.Text>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title className='text-center'  >Visual Editor</Card.Title>
        <Card.Text>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title className='text-center'  >Branding</Card.Title>
        <Card.Text>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
      <Card.Title className='text-center'>Marketing</Card.Title>
        <Card.Text>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='pricing-box'>
      <div className='pricing-content-box'>
        <p>Pricing</p>
        <h2>Choose Your Pricing Plan</h2>
      </div>
      <div className='Pricing-card-box'>
        <div className="pricing-table">
          {pricingPlans.map((plan) => (
            <div className={`pricing-card ${selectedPlan === plan.id ? 'selected' : ''}`} key={plan.id} onClick={() => handleSelectPlan(plan.id)}>
              <h3 className="pricing-card-header">{plan.title}</h3>
              <div className="price"><sup>$</sup>{plan.price}</div>
              <ul>
                {plan.features.map((feature, index) => (
                  <li key={index}><FaCheck />{feature}</li>
                ))}
              </ul>
              <a href="#" className="order-btn">Order Now</a>
            </div>
          ))}
        </div>
      </div>
    </div>

<Footer/>
    </div>
    
  )
}

export default Service
