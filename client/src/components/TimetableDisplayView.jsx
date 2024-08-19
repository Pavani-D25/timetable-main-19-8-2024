import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './TimetableDisplayView.css';
import NavScrollExample from './Navbar';

const TimetableDisplayView = () => {
    const location = useLocation();
    const { timetable = [], facultyId = '' } = location.state || {};

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text(`Timetable for Faculty ID: ${facultyId}`, 10, 10);

        const tableData = days.map((day, rowIndex) => {
            return [
                day,
                ...timeSlots.map((slot, cellIndex) => {
                    const entry = timetable.find(
                        item => item.day === day && item.time_slot === slot
                    );
                    return entry ? `${entry.subject_name} (Room ${entry.classroom_id})` : '-';
                })
            ];
        });

        doc.autoTable({
            head: [['Day/Time', ...timeSlots]],
            body: tableData,
        });

        doc.save('timetable.pdf');
    };


    return (
        // <div className="main-wrapper">
        //     <NavScrollExample />
        //     <div className="content-padding">
        //         <Container className="timetable-display-view">
        //             <h3>Timetable for Faculty ID: {facultyId}</h3>
        //             <table className="timetable-table">
        //                 <thead>
        //                     <tr>
        //                         <th>Day/Time</th>
        //                         {['8:45 - 9:35 AM', '9:35 - 10:25 AM', '10:40 - 11:30 AM', '11:30 AM - 12:20 PM', '2:20 - 3:10 PM', '3:25 - 4:40 PM'].map((slot, index) => (
        //                             <th key={index}>{slot}</th>
        //                         ))}
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
        //                         <tr key={day}>
        //                             <td>{day}</td>
        //                             {['8:45 - 9:35 AM', '9:35 - 10:25 AM', '10:40 - 11:30 AM', '11:30 AM - 12:20 PM', '2:20 - 3:10 PM', '3:25 - 4:40 PM'].map((slot, cellIndex) => {
        //                                 const entry = timetable.find(item => item.day === day && item.time_slot === slot);
        //                                 return (
        //                                     <td key={cellIndex} className={entry ? '' : 'empty-cell'}>
        //                                         {entry ? `${entry.subject_name} (Room ${entry.classroom_id})` : '-'}
        //                                     </td>
        //                                 );
        //                             })}
        //                         </tr>
        //                     ))}
        //                 </tbody>
        //             </table>
        //             <button className='download-button' onClick={generatePDF}>Download PDF</button> 
        //         </Container>
        //     </div>
        // </div>


        <div className="main-wrapper">
    <NavScrollExample />
    <div className="content-padding">
        <Container className="timetable-display-view">
            <h3 className='pb-4'>Timetable for Faculty ID: {facultyId}</h3>
            <table className="timetable-table">
                <thead>
                    <tr>
                        <th>Day/Time</th>
                        {['8:45 - 9:35 AM', '9:35 - 10:25 AM', '10:40 - 11:30 AM', '11:30 AM - 12:20 PM', '2:20 - 3:10 PM', '3:25 - 4:40 PM'].map((slot, index) => (
                            <th key={index}>{slot}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                        <tr key={day}>
                            <td>{day}</td>
                            {['8:45 - 9:35 AM', '9:35 - 10:25 AM', '10:40 - 11:30 AM', '11:30 AM - 12:20 PM', '2:20 - 3:10 PM', '3:25 - 4:40 PM'].map((slot, cellIndex) => {
                                const entry = timetable.find(item => item.day === day && item.time_slot === slot);
                                return (
                                    <td key={cellIndex} className={entry ? '' : 'empty-cell'}>
                                        {entry ? (entry.subject_name === "EMPTY" ? "-" : `${entry.subject_name} (Room ${entry.classroom_id})`) : '-'}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='download-button' onClick={generatePDF}>Download PDF</button> 
        </Container>
    </div>
</div>

    );
};

export default TimetableDisplayView;
