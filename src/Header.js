import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Header()
{
 return(
     <div>

<Navbar bg="dark" variant="dark">
    
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
        <Link>Add Product</Link>
        <Link>Update Product</Link>
        <Link>Login</Link>
        <Link>Resigter</Link>

    </Nav>
  
  </Navbar>

     </div>
 )
}
export default Header;