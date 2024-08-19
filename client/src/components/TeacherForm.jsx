// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavScrollExample from '../components/Navbar';
// import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';
// import axios from 'axios';
// import './TeacherForm.css';

// const TeacherForm = () => {
//     const [facultyId, setFacultyId] = useState('');
//     const [subject1, setSubject1] = useState('');
//     const [subject2, setSubject2] = useState('');
//     const [labSubject, setLabSubject] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:4000/submit', { facultyId, subject1, subject2, labSubject });
//             const { teacherId } = response.data;
//             // Call the endpoint to generate the timetable
//             await axios.post('http://localhost:4000/generate-timetable', { teacherId });
//             navigate(`/timetable/${teacherId}`);
//         } catch (error) {
//             console.error('Error generating timetable', error);
//             alert('Error generating timetable');
//         }
//     };

//     return (
//         <div>
//             <NavScrollExample />
//             <Container className="form-container pt-2">
//                 <h2>Teacher Information Form</h2>
//                 <Form onSubmit={handleSubmit}>
//                     <FloatingLabel controlId="floatingFacultyId" label="Faculty ID" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Faculty ID"
//                             value={facultyId}
//                             onChange={(e) => setFacultyId(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingSubject1" label="Subject 1" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Subject 1"
//                             value={subject1}
//                             onChange={(e) => setSubject1(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingSubject2" label="Subject 2" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Subject 2"
//                             value={subject2}
//                             onChange={(e) => setSubject2(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingLabSubject" label="Lab Subject" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Lab Subject"
//                             value={labSubject}
//                             onChange={(e) => setLabSubject(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <Button className='btn1' variant="primary" type="submit">
//                         Submit
//                     </Button>
//                 </Form>
//             </Container>
//         </div>
//     );
// };

// export default TeacherForm;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavScrollExample from '../components/Navbar';
// import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';
// import axios from 'axios';
// import './TeacherForm.css';

// const TeacherForm = () => {
//     const [facultyId, setFacultyId] = useState('');
//     const [subject1, setSubject1] = useState('');
//     const [subject2, setSubject2] = useState('');
//     const [labSubject, setLabSubject] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:4000/submit', { facultyId, subject1, subject2, labSubject });
//             const { teacherId } = response.data;
//             // Call the endpoint to generate the timetable and get the timetable data
//             const timetableResponse = await axios.post('http://localhost:4000/generate-timetable', { teacherId });
//             const { timetable } = timetableResponse.data;
//             // Store timetable data in localStorage (or handle as needed)
//             localStorage.setItem('timetable', JSON.stringify(timetable));
//             navigate(`/timetable/${teacherId}`);
//         } catch (error) {
//             console.error('Error generating timetable', error);
//             alert('Error generating timetable');
//         }
//     };

//     return (
//         <div>
//             <NavScrollExample />
//             <Container className="form-container pt-2">
//                 <h2>Teacher Information Form</h2>
//                 <Form onSubmit={handleSubmit}>
//                     <FloatingLabel controlId="floatingFacultyId" label="Faculty ID" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Faculty ID"
//                             value={facultyId}
//                             onChange={(e) => setFacultyId(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingSubject1" label="Subject 1" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Subject 1"
//                             value={subject1}
//                             onChange={(e) => setSubject1(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingSubject2" label="Subject 2" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Subject 2"
//                             value={subject2}
//                             onChange={(e) => setSubject2(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingLabSubject" label="Lab Subject" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Lab Subject"
//                             value={labSubject}
//                             onChange={(e) => setLabSubject(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <Button className='btn1' variant="primary" type="submit">
//                         Submit
//                     </Button>
//                 </Form>
//             </Container>
//         </div>
//     );
// };

// export default TeacherForm;




















// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavScrollExample from '../components/Navbar';
// import { Container, FloatingLabel, Form, Button, Alert } from 'react-bootstrap';
// import axios from 'axios';
// import './TeacherForm.css';

// const TeacherForm = () => {
//     const [faculty_id, setFacultyId] = useState('');
//     const [subject1, setSubject1] = useState('');
//     const [faculty_name, setFacultyName] = useState('');

//     const [subject2, setSubject2] = useState('');
//     const [lab_subject, setLabSubject] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setError(''); // Clear any previous errors
//         try {
//             // Send data to the backend to save teacher information
//             const response = await axios.post('http://localhost:5000/submit', {faculty_id, subject1, subject2,lab_subject });
//             const { teacherId } = response.data;

//             // Generate timetable for the teacher
//             await axios.post('http://localhost:5000/generate-timetable', { teacherId });

//             // Redirect to the timetable page
//             navigate(`/timetable/${teacherId}`);
//         } catch (error) {
//             console.error('Error generating timetable', error);
//             setError('There was an error generating the timetable. Please try again.');
//         }
//     };

//     return (
//         <div>
//             <NavScrollExample />
//             <Container className="form-container pt-2">
//                 <h2>Teacher Information Form</h2>
//                 {error && <Alert variant="danger">{error}</Alert>}
//                 <Form onSubmit={handleSubmit}>
//                     <FloatingLabel controlId="floatingFacultyId" label="Faculty ID" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Faculty ID"
//                             value={faculty_id}
//                             onChange={(e) => setFacultyId(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingFacultyId" label="Faculty Name" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Faculty Name"
//                             value={faculty_name}
//                             onChange={(e) => setFacultyName(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>

                    


//                     <FloatingLabel controlId="floatingSubject1" label="Subject 1" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Subject 1"
//                             value={subject1}
//                             onChange={(e) => setSubject1(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingSubject2" label="Subject 2" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Subject 2"
//                             value={subject2}
//                             onChange={(e) => setSubject2(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingLabSubject" label="Lab Subject" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Lab Subject"
//                             value={lab_subject}
//                             onChange={(e) => setLabSubject(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <Button className='btn1' variant="primary" type="submit">
//                         Submit
//                     </Button>
//                 </Form>
//             </Container>
//         </div>
//     );
// };

// export default TeacherForm;












//correct code ___________________----













// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavScrollExample from '../components/Navbar';
// import { Container, FloatingLabel, Form, Button, Alert } from 'react-bootstrap';
// import axios from 'axios';
// import './TeacherForm.css';

// const TeacherForm = () => {
//     const [faculty_id, setFacultyId] = useState('');
//     const [faculty_name, setFacultyName] = useState('');
//     const [subject1, setSubject1] = useState('');
//     const [subject2, setSubject2] = useState('');
//     const [lab_subject, setLabSubject] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setError(''); // Clear any previous errors
//         try {
//             // Send data to the backend to save teacher information
//             const response = await axios.post('http://localhost:5000/submit', { faculty_id, faculty_name, subject1, subject2, lab_subject });
//             const { teacherId } = response.data;

//             // Generate timetable for the teacher
//             await axios.post('http://localhost:5000/generate-timetable', { teacherId });

//             // Redirect to the timetable page
//             navigate(`/timetable/${teacherId}`);
//         } catch (error) {
//             console.error('Error generating timetable', error);
//             setError('There was an error generating the timetable. Please try again.');
//         }
//     };

//     return (
//         <div>
//             <NavScrollExample />
//             <Container className="form-container pt-2">
//                 <h2>Teacher Information Form</h2>
//                 {error && <Alert variant="danger">{error}</Alert>}
//                 <Form onSubmit={handleSubmit}>
//                     <FloatingLabel controlId="floatingFacultyId" label="Faculty ID" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Faculty ID"
//                             value={faculty_id}
//                             onChange={(e) => setFacultyId(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingFacultyName" label="Faculty Name" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Faculty Name"
//                             value={faculty_name}
//                             onChange={(e) => setFacultyName(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingSubject1" label="Subject 1" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Subject 1"
//                             value={subject1}
//                             onChange={(e) => setSubject1(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingSubject2" label="Subject 2" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Subject 2"
//                             value={subject2}
//                             onChange={(e) => setSubject2(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingLabSubject" label="Lab Subject" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Lab Subject"
//                             value={lab_subject}
//                             onChange={(e) => setLabSubject(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <Button className='btn1' variant="primary" type="submit">
//                         Submit
//                     </Button>
//                 </Form> 
//             </Container>
//         </div>
//     );
// };

// export default TeacherForm;





// _________________________________________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________________________________________

// ____________________________________________________________________________________________________________________________________________________________________


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavScrollExample from '../components/Navbar';
// import { Container, FloatingLabel, Form, Button, Alert } from 'react-bootstrap';
// import axios from 'axios';
// import './TeacherForm.css';

// const TeacherForm = () => {
//     const [faculty_id, setFacultyId] = useState('');
//     const [faculty_name, setFacultyName] = useState('');
//     const [subject1, setSubject1] = useState('');
//     const [subject2, setSubject2] = useState('');
//     const [lab_subject, setLabSubject] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setError(''); // Clear any previous errors
//         try {
//             // Send data to the backend to save teacher information
//             const response = await axios.post('http://localhost:5000/submit', { faculty_id, faculty_name, subject1, subject2, lab_subject });
//             const { teacherId } = response.data;

//             // Generate timetable for the teacher
//             await axios.post('http://localhost:5000/generate-timetable', { teacherId });

//             // Redirect to the timetable page
//             navigate(`/timetable/${teacherId}`);
//         } catch (error) {
//             console.error('Error generating timetable', error);
//             setError('There was an error generating the timetable. Please try again.');
//         }
//     };

//     return (
//         <div>
//             <NavScrollExample />
//             <Container className="form-container pt-2">
//                 <h2>Teacher Information Form</h2>
//                 {error && <Alert variant="danger">{error}</Alert>}
//                 <Form onSubmit={handleSubmit}>
//                     <FloatingLabel controlId="floatingFacultyId" label="Faculty ID" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Faculty ID"
//                             value={faculty_id}
//                             onChange={(e) => setFacultyId(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingFacultyName" label="Faculty Name" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Faculty Name"
//                             value={faculty_name}
//                             onChange={(e) => setFacultyName(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingSubject1" label="Subject 1" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Subject 1"
//                             value={subject1}
//                             onChange={(e) => setSubject1(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingSubject2" label="Subject 2" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Subject 2"
//                             value={subject2}
//                             onChange={(e) => setSubject2(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <FloatingLabel controlId="floatingLabSubject" label="Lab Subject" className="mb-3">
//                         <Form.Control
//                             type="text"
//                             placeholder="Lab Subject"
//                             value={lab_subject}
//                             onChange={(e) => setLabSubject(e.target.value)}
//                             required
//                         />
//                     </FloatingLabel>
//                     <Button className='btn1' variant="primary" type="submit">
//                         Submit
//                     </Button>
//                 </Form> 
//             </Container>
//         </div>
//     );
// };

// export default TeacherForm;


// _________________________________________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________________________________________


















import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavScrollExample from '../components/Navbar';
import { Container, FloatingLabel, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './TeacherForm.css';

const TeacherForm = () => {
    const [faculty_id, setFacultyId] = useState('');
    const [faculty_name, setFacultyName] = useState('');

    // Subject 1
    const [subject1, setSubject1] = useState('');
    const [subject1Year, setSubject1Year] = useState('');
    const [subject1Department, setSubject1Department] = useState('');

    // Subject 2
    const [subject2, setSubject2] = useState('');
    const [subject2Year, setSubject2Year] = useState('');
    const [subject2Department, setSubject2Department] = useState('');

    // Lab Subject
    const [lab_subject, setLabSubject] = useState('');
    const [labYear, setLabYear] = useState('');
    const [labDepartment, setLabDepartment] = useState('');

    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); // Clear any previous errors
    
        try {
            // Send the data to the backend
            const response = await axios.post('http://localhost:5000/submit', {
                faculty_id,
                faculty_name,
                subject1,
                subject1Year: parseInt(subject1Year, 10), // Ensures it is an integer
                subject1Department,
                subject2,
                subject2Year: parseInt(subject2Year, 10), // Ensures it is an integer
                subject2Department,
                lab_subject,
                labYear: parseInt(labYear, 10), // Ensures it is an integer
                labDepartment
            });
            
            
            // Extract teacherId from the response
            const { teacherId } = response.data;
    
            // Generate timetable based on teacherId
            await axios.post('http://localhost:5000/generate-timetable', { teacherId });
            navigate(`/timetable/${teacherId}`);
        } catch (error) {
            console.error('Error generating timetable', error);
            setError('There was an error generating the timetable. Please try again.');
        }
    };

    return (
        <div>
            <NavScrollExample />
            <Container className="form-container pt-2">
                <h2>Teacher Information Form</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <FloatingLabel controlId="floatingFacultyId" label="Faculty ID" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Faculty ID"
                            value={faculty_id}
                            onChange={(e) => setFacultyId(e.target.value)}
                            required
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingFacultyName" label="Faculty Name" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Faculty Name"
                            value={faculty_name}
                            onChange={(e) => setFacultyName(e.target.value)}
                            required
                        />
                    </FloatingLabel>
                    
                    {/* Subject 1 */}
                    <Row className="mb-3">
                        <Col>
                            <FloatingLabel controlId="floatingSubject1" label="Subject 1">
                                <Form.Control
                                    type="text"
                                    placeholder="Subject 1"
                                    value={subject1}
                                    onChange={(e) => setSubject1(e.target.value)}
                                    required
                                />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingSubject1Year" label="Year">
                                <Form.Control
                                    type="text"
                                    placeholder="Year"
                                    value={subject1Year}
                                    onChange={(e) => setSubject1Year(e.target.value)}
                                    required
                                />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingSubject1Department" label="Department">
                                <Form.Control
                                    type="text"
                                    placeholder="Department"
                                    value={subject1Department}
                                    onChange={(e) => setSubject1Department(e.target.value)}
                                    required
                                />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    {/* Subject 2 */}
                    <Row className="mb-3">
                        <Col>
                            <FloatingLabel controlId="floatingSubject2" label="Subject 2">
                                <Form.Control
                                    type="text"
                                    placeholder="Subject 2"
                                    value={subject2}
                                    onChange={(e) => setSubject2(e.target.value)}
                                    required
                                />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingSubject2Year" label="Year">
                                <Form.Control
                                    type="text"
                                    placeholder="Year"
                                    value={subject2Year}
                                    onChange={(e) => setSubject2Year(e.target.value)}
                                    required
                                />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingSubject2Department" label="Department">
                                <Form.Control
                                    type="text"
                                    placeholder="Department"
                                    value={subject2Department}
                                    onChange={(e) => setSubject2Department(e.target.value)}
                                    required
                                />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    {/* Lab Subject */}
                    <Row className="mb-3">
                        <Col>
                            <FloatingLabel controlId="floatingLabSubject" label="Lab Subject">
                                <Form.Control
                                    type="text"
                                    placeholder="Lab Subject"
                                    value={lab_subject}
                                    onChange={(e) => setLabSubject(e.target.value)}
                                    required
                                />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingLabYear" label="Year">
                                <Form.Control
                                    type="text"
                                    placeholder="Year"
                                    value={labYear}
                                    onChange={(e) => setLabYear(e.target.value)}
                                    required
                                />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingLabDepartment" label="Department">
                                <Form.Control
                                    type="text"
                                    placeholder="Department"
                                    value={labDepartment}
                                    onChange={(e) => setLabDepartment(e.target.value)}
                                    required
                                />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Button className='btn1' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form> 
            </Container>
        </div>
    );
};

export default TeacherForm;
