/*
function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  );
}

export default Home;
*/



import { Card, Button } from 'react-bootstrap';
import './App.css';
function Home() {
  return (
    <div className="container">
      <div className="mt-5">
        <div className="col-md-4 mb-5">
          <Card>
            <Card.Body>
              <Card.Title>Owner</Card.Title>
              <Card.Text>
                  View your properties and their details, update your profile, and more.
              </Card.Text>
              <Button variant="primary" href="/owner/login">Login</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-5">
          <Card>
            <Card.Body>
              <Card.Title>Land Inspector</Card.Title>
              <Card.Text>
                Verify and manage land and property information, update records, and more.
              </Card.Text>
              <Button variant="primary" href="/land-inspector/login">Login</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-5">
          <Card>
            <Card.Body>
              <Card.Title>User</Card.Title>
              <Card.Text>
                  Search for properties, view property details, and make inquiries with ease.
              </Card.Text>
              <Button variant="primary" href="/user/login">Login</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='image'>
         <img src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
      </div>
    </div>
    


  );
}

export default Home;
