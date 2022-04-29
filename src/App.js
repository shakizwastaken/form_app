import './App.css';
import { Form,Button } from 'react-bootstrap';

function App() {

  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  }

  return (
    <div className="App">

      <Form id='form-container' onSubmit={handleSubmit}>
        
        <h1>Login</h1>
        
        <Form.Group id='form-group' >
        <Form.Label>first name:</Form.Label>
        <Form.Control name="fName" placeholder="Enter email"/>
        </Form.Group>
        
        <Form.Group id='form-group' >
        <Form.Label>last name:</Form.Label>
        <Form.Control name="lName" placeholder="Enter email"/>
        </Form.Group>

        <Form.Group id='form-group' >
        <Form.Label>email:</Form.Label>
        <Form.Control name="email" placeholder="Enter email"/>
        </Form.Group>

        <Button type='submit'>Login</Button>

      </Form>
    </div>
  );
}

export default App;
