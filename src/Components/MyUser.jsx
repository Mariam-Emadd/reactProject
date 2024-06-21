import Dropdown from "react-bootstrap/Dropdown";

function MyUser() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic" >
        My Account
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> Delete Account</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Share the app</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MyUser;
