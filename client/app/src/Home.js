

import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Home = () => {
  return (
    
   
  <div>
    <section class="custom-solution">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-sm-6">
                <div class="section-heading">
                    <h1 className='text'>Land registration  <span class="text-primary"></span> Platform </h1>
                    <br/>
                    <p>The Government of India is trying its best to modernize the old process by updating the technologies. This Web Built Using Blockchain eliminate  the traditional issue of visting the sub registrar office LRP is a Approach to make it    possible</p>
                    <Button className="gettouchbtn" variant="primary" href="/">Get In Touch</Button>
                </div>
            </div>
            <div class="col-md-5 col-sm-5 mx-auto">
                <img src="https://ffmsonline.com/img/customize-2.svg" class="img-fluid" alt=""/>
            </div>
        </div>
    </div>
</section>
<div className="container">
      <div className="row">
        <div className="col-md-4">
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://img.icons8.com/clouds/256/user.png" />
            <Card.Body>
              <Card.Title><b>User</b></Card.Title>
              <Card.Text>
                View your properties and their details, update your profile, and more.
              </Card.Text>
              <Button variant="primary" href="/user" className='btnlogin'>Login</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/256/external-inspector-professions-woman-diversity-flaticons-lineal-color-flat-icons.png" />
            <Card.Body>
              <Card.Title><b>Land Inspector</b></Card.Title>
              <Card.Text>
                Verify and manage land and property information, update records, and more.
              </Card.Text>
              <Button variant="primary" href="/inspector" className='btnlogin'>Login</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://img.icons8.com/ios/256/landlord.png" />
            <Card.Body>
              <Card.Title><b>Manager</b></Card.Title>
              <Card.Text>
                View your properties and their details, update your profile, and more.
              </Card.Text>
              <Button variant="primary" href="/manager" className='btnlogin'>Login</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>      
    </div>
    
   
  );
};

export default Home;