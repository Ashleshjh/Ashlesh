import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './employeetable.css'; // Import the CSS file

function Employee() {
  const [show, setShow] = useState(false);
  const [employees, setEmployees] = useState([
    { id: '001', name: 'Ashlesh', department: 'Marketing', salary: '50000' },
    { id: '002', name: 'Jack Sparrow', department: 'Production', salary: '55000' },
    { id: '003', name: 'John', department: 'Manager', salary: '60000' },
  ]);
  const [newEmployee, setNewEmployee] = useState({
    id: '',
    name: '',
    department: '',
    salary: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleClose = () => {
    setShow(false);
    resetForm();
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = () => {
    if (isEditing) {
      // Update existing employee
      setEmployees(employees.map(emp => emp.id === newEmployee.id ? newEmployee : emp));
    } else {
      // Add new employee
      setEmployees([...employees, newEmployee]);
    }
    handleClose();
  };

  const handleEdit = (employee) => {
    setNewEmployee(employee);
    setIsEditing(true);
    handleShow();
  };

  const handleDelete = (id) => {
    setDeleteId(id)
      ;
    setShowConfirmDelete(true);
  };

  const confirmDelete = () => {
    setEmployees(employees.filter(emp => emp.id !== deleteId));
    setShowConfirmDelete(false);
    setDeleteId(null);
  };

  const cancelDelete = () => {
    setShowConfirmDelete(false);
    setDeleteId(null);
  };

  const resetForm = () => {
    setNewEmployee({ id: '', name: '', department: '', salary: '' });
    setIsEditing(false);
  };

  return (
    <div className="employee-container">
      <div className="sticky">
        <h1 className="employee-title">Employee Details</h1>
        <div className="button-container">
          <Button className="button" variant="primary" onClick={() => { resetForm(); handleShow(); }}>
            Add
          </Button>
        </div>
      </div>

      {/* Add Edit Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? "Edit Employee Details" : "New Employee Details"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            name="id"
            value={newEmployee.id}
            onChange={handleChange}
            placeholder="Enter ID"
            // disabled={isEditing}  // Disable ID field for editing
            className="input-field"
          />
          <input
            type="text"
            name="name"
            value={newEmployee.name}
            onChange={handleChange}
            placeholder="Enter the Name"
            className="input-field"
          />
          <input
            type="text"
            name="department"
            value={newEmployee.department}
            onChange={handleChange}
            placeholder="Enter the Department"
            className="input-field"
          />
          <input
            type="text"
            name="salary"
            value={newEmployee.salary}
            onChange={handleChange}
            placeholder="Enter the Salary"
            className="input-field"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className="button" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="button" variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showConfirmDelete} onHide={cancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this employee?
        </Modal.Body>
        <Modal.Footer>
          <Button className="button" variant="secondary" onClick={cancelDelete}>
            Cancel
          </Button>
          <Button className="button" variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.salary}</td>
                <td>
                  <Button className="button" variant="warning" onClick={() => handleEdit(employee)}>Edit</Button>
                </td>
                <td>
                  <Button className="button" variant="danger" onClick={() => handleDelete(employee.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Employee;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './employeetable.css';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

// function EmployeeTable() {
//   const [employees, setEmployees] = useState([]);
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   useEffect(() => {
//     alert('Fetching data...');
//     axios.get('/api/employees')
//       .then(response => {
//         alert('Data fetched successfully!');
//         console.log(response.data);
//         setEmployees(response.data);
//       })
//       .catch(error => {
//         alert('Error fetching data');
//         console.error("There was an error fetching the employee data!", error);
//       });
//   }, []);

//   return (
//     <>
//       <div className='empclass'>
//         <h1>Employee Details</h1>
//         <Button variant="primary" onClick={handleShow}>
//           Add
//         </Button>
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>

//         {employees.length > 0 ? (
//           <table>
//             <thead>
//               <tr>
//                 <th>Employee Name</th>
//                 <th>Employee ID</th>
//                 <th>Employee Mobile</th>
//                 <th>Employee Salary</th>
//                 <th>Edit</th>
//                 <th>Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {employees.map(employee => (
//                 <tr key={employee.Employeeid}>
//                   <td>{employee.Employeename}</td>
//                   <td>{employee.Employeeid}</td>
//                   <td>{employee.Employeemob}</td>
//                   <td>{employee.Employeesalary}</td>
//                   <td><button>Edit</button></td>
//                   <td><button>Delete</button></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No employees found.</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default EmployeeTable;



// function EmployeeTable() {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     // Fetching data from the server
//     axios.get('/api/employees')
//       .then(response => {
//         setEmployees(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the employee data!", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Employee Details</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Employee Name</th>
//             <th>Employee ID</th>
//             <th>Employee Mobile</th>
//             <th>Employee Salary</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map(employee => (
//             <tr key={employee.Employeeid}>
//               <td>{employee.Employeename}</td>
//               <td>{employee.Employeeid}</td>
//               <td>{employee.Employeemob}</td>
//               <td>{employee.Employeesalary}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }







// import Table from 'react-bootstrap/Table';

// function EmployeeTable() {
//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Username</th>
//         </tr>
//       </thead>
//       <tbody>
// <tr>
//   <td>1</td>
//   <td>Mark</td>
//   <td>Otto</td>
//   <td>@mdo</td>
// </tr>
// <tr>
//   <td>2</td>
//   <td>Jacob</td>
//   <td>Thornton</td>
//   <td>@fat</td>
// </tr>
// <tr>
//   <td>3</td>
//   <td colSpan={2}>Larry the Bird</td>
//   <td>@twitter</td>
// </tr>
//       </tbody>
//     </Table>
//   );
// }

