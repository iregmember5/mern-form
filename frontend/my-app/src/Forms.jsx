// // // // import React, { useState } from 'react';
// // // // import { TextField, Button, Container, Typography } from '@mui/material';
// // // // import axios from 'axios';

// // // // export default function Forms() {
// // // //   const [formData, setFormData] = useState({ name: '', email: '', message: '' });

// // // //   const handleChange = (e) => {
// // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       await axios.post('http://localhost:5000/api/form', formData);
// // // //       alert("Form submitted successfully!");
// // // //       setFormData({ name: '', email: '', message: '' });
// // // //     } catch (error) {
// // // //       alert("Error submitting form", error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
// // // //       <Typography variant="h4" gutterBottom>Contact Form</Typography>
// // // //       <form onSubmit={handleSubmit}>
// // // //         <TextField
// // // //           label="Name"
// // // //           name="name"
// // // //           value={formData.name}
// // // //           fullWidth
// // // //           margin="normal"
// // // //           onChange={handleChange}
// // // //         />
// // // //         <TextField
// // // //           label="Email"
// // // //           name="email"
// // // //           value={formData.email}
// // // //           fullWidth
// // // //           margin="normal"
// // // //           onChange={handleChange}
// // // //         />
// // // //         <TextField
// // // //           label="Message"
// // // //           name="message"
// // // //           value={formData.message}
// // // //           fullWidth
// // // //           margin="normal"
// // // //           multiline
// // // //           rows={4}
// // // //           onChange={handleChange}
// // // //         />
// // // //         <Button variant="contained" color="primary" type="submit">
// // // //           Submit
// // // //         </Button>
// // // //       </form>
// // // //     </Container>
// // // //   );
// // // // }
// // // // .............2

// // // import React, { useState, useEffect } from 'react';
// // // import { TextField, Button, Container, Typography, Card, CardContent } from '@mui/material';
// // // import axios from 'axios';

// // // export default function Form() {
// // //   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
// // //   const [messages, setMessages] = useState([]);

// // //   // Fetch messages on load
// // //   useEffect(() => {
// // //     fetchMessages();
// // //   }, []);

// // //   const fetchMessages = async () => {
// // //     try {
// // //       const res = await axios.get('http://localhost:5000/api/form');
// // //       setMessages(res.data);
// // //     } catch (err) {
// // //       console.error("Error fetching messages", err);
// // //     }
// // //   };

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await axios.post('http://localhost:5000/api/form', formData);
// // //       alert("Form submitted!");
// // //       setFormData({ name: '', email: '', message: '' });
// // //       fetchMessages(); // Refresh messages
// // //     } catch (err) {
// // //       alert("Error submitting form", err);
// // //     }
// // //   };

// // //   return (
// // //     <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
// // //       <Typography variant="h4" gutterBottom>Contact Form</Typography>
// // //       <form onSubmit={handleSubmit}>
// // //         <TextField label="Name" name="name" value={formData.name} fullWidth margin="normal" onChange={handleChange} />
// // //         <TextField label="Email" name="email" value={formData.email} fullWidth margin="normal" onChange={handleChange} />
// // //         <TextField label="Message" name="message" value={formData.message} fullWidth margin="normal" multiline rows={4} onChange={handleChange} />
// // //         <Button variant="contained" color="primary" type="submit" style={{ marginTop: '1rem' }}>
// // //           Submit
// // //         </Button>
// // //       </form>

// // //       {/* Display Messages */}
// // //       <Typography variant="h5" gutterBottom style={{ marginTop: '2rem' }}>Submitted Messages</Typography>
// // //       {messages.map((msg) => (
// // //         <Card key={msg._id} style={{ marginBottom: '1rem' }}>
// // //           <CardContent>
// // //             <Typography variant="subtitle1"><strong>Name:</strong> {msg.name}</Typography>
// // //             <Typography variant="subtitle2"><strong>Email:</strong> {msg.email}</Typography>
// // //             <Typography variant="body1" style={{ marginTop: '0.5rem' }}>{msg.message}</Typography>
// // //           </CardContent>
// // //         </Card>
// // //       ))}
// // //     </Container>
// // //   );
// // // }


// // //........3

// // import React, { useState, useEffect } from 'react';
// // import {
// //   TextField,
// //   Button,
// //   Container,
// //   Typography,
// //   Card,
// //   CardContent,
// //   Grid
// // } from '@mui/material';
// // import axios from 'axios';

// // export default function Form() {
// //   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
// //   const [messages, setMessages] = useState([]);
// //   const [editingId, setEditingId] = useState(null);

// //   // Fetch messages on component mount
// //   useEffect(() => {
// //     fetchMessages();
// //   }, []);

// //   const fetchMessages = async () => {
// //     try {
// //       const res = await axios.get('http://localhost:5000/api/form');
// //       setMessages(res.data);
// //     } catch (err) {
// //       console.error("Error fetching messages", err);
// //     }
// //   };

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       if (editingId) {
// //         await axios.put(`http://localhost:5000/api/form/${editingId}`, formData);
// //         setEditingId(null);
// //       } else {
// //         await axios.post('http://localhost:5000/api/form', formData);
// //       }
// //       setFormData({ name: '', email: '', message: '' });
// //       fetchMessages();
// //     } catch (err) {
// //       console.error("Error submitting form", err);
// //       alert("Error submitting form");
// //     }
// //   };

// //   const handleEdit = (msg) => {
// //     setFormData({ name: msg.name, email: msg.email, message: msg.message });
// //     setEditingId(msg._id);
// //   };

// //   const handleDelete = async (id) => {
// //     if (window.confirm("Are you sure you want to delete this message?")) {
// //       try {
// //         await axios.delete(`http://localhost:5000/api/form/${id}`);
// //         fetchMessages();
// //       } catch (err) {
// //         console.error("Error deleting message", err);
// //       }
// //     }
// //   };

// //   const handleCancelEdit = () => {
// //     setFormData({ name: '', email: '', message: '' });
// //     setEditingId(null);
// //   };

// //   return (
// //     <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
// //       <Typography variant="h4" gutterBottom>
// //         {editingId ? 'Edit Message' : 'Contact Form'}
// //       </Typography>

// //       <form onSubmit={handleSubmit}>
// //         <TextField
// //           label="Name"
// //           name="name"
// //           value={formData.name}
// //           fullWidth
// //           margin="normal"
// //           onChange={handleChange}
// //           required
// //         />
// //         <TextField
// //           label="Email"
// //           name="email"
// //           value={formData.email}
// //           fullWidth
// //           margin="normal"
// //           onChange={handleChange}
// //           required
// //         />
// //         <TextField
// //           label="Message"
// //           name="message"
// //           value={formData.message}
// //           fullWidth
// //           margin="normal"
// //           multiline
// //           rows={4}
// //           onChange={handleChange}
// //           required
// //         />

// //         <Grid container spacing={2} style={{ marginTop: '1rem' }}>
// //           <Grid item>
// //             <Button type="submit" variant="contained" color="primary">
// //               {editingId ? 'Update' : 'Submit'}
// //             </Button>
// //           </Grid>
// //           {editingId && (
// //             <Grid item>
// //               <Button variant="outlined" onClick={handleCancelEdit}>
// //                 Cancel
// //               </Button>
// //             </Grid>
// //           )}
// //         </Grid>
// //       </form>

// //       <Typography variant="h5" gutterBottom style={{ marginTop: '2rem' }}>
// //         Submitted Messages
// //       </Typography>

// //       {messages.map((msg) => (
// //         <Card key={msg._id} style={{ marginBottom: '1rem' }}>
// //           <CardContent>
// //             <Typography variant="subtitle1">
// //               <strong>Name:</strong> {msg.name}
// //             </Typography>
// //             <Typography variant="subtitle2">
// //               <strong>Email:</strong> {msg.email}
// //             </Typography>
// //             <Typography variant="body1" style={{ marginTop: '0.5rem' }}>
// //               {msg.message}
// //             </Typography>
// //             <div style={{ marginTop: '0.5rem' }}>
// //               <Button
// //                 variant="outlined"
// //                 color="primary"
// //                 size="small"
// //                 onClick={() => handleEdit(msg)}
// //                 style={{ marginRight: '0.5rem' }}
// //               >
// //                 Edit
// //               </Button>
// //               <Button
// //                 variant="outlined"
// //                 color="error"
// //                 size="small"
// //                 onClick={() => handleDelete(msg._id)}
// //               >
// //                 Delete
// //               </Button>
// //             </div>
// //           </CardContent>
// //         </Card>
// //       ))}
// //     </Container>
// //   );
// // }

// //.........4

// import React, { useState, useEffect } from 'react';
// import {
//   TextField,
//   Button,
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   Grid,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   IconButton,
//   Box
// } from '@mui/material';
// import { Edit, Delete } from '@mui/icons-material';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function Form() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [messages, setMessages] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [openModal, setOpenModal] = useState(false);

//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   const fetchMessages = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/form');
//       setMessages(res.data);
//     } catch (err) {
//       toast.error("Error fetching messages", err);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingId) {
//         await axios.put(`http://localhost:5000/api/form/${editingId}`, formData);
//         toast.success("Message updated successfully");
//       } else {
//         await axios.post('http://localhost:5000/api/form', formData);
//         toast.success("Message submitted successfully");
//       }
//       setFormData({ name: '', email: '', message: '' });
//       setEditingId(null);
//       setOpenModal(false);
//       fetchMessages();
//     } catch (err) {
//       toast.error("Error submitting the form", err);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this message?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/form/${id}`);
//         toast.info("Message deleted");
//         fetchMessages();
//       } catch (err) {
//         toast.error("Error deleting message", err);
//       }
//     }
//   };

//   const handleEdit = (msg) => {
//     setFormData({ name: msg.name, email: msg.email, message: msg.message });
//     setEditingId(msg._id);
//     setOpenModal(true);
//   };

//   const handleModalClose = () => {
//     setOpenModal(false);
//     setEditingId(null);
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 4 }}>
//       <ToastContainer position="top-right" autoClose={3000} />
//       <Typography variant="h4" gutterBottom align="center" fontWeight="bold">
//         Contact Form
//       </Typography>

//       {/* Submit Form */}
//       <form onSubmit={handleSubmit}>
//         <Box display="flex" flexDirection="column" gap={2}>
//           <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required />
//           <TextField label="Email" name="email" value={formData.email} onChange={handleChange} required />
//           <TextField
//             label="Message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             multiline
//             rows={4}
//             required
//           />
//           <Button type="submit" variant="contained" color="primary">
//             Submit
//           </Button>
//         </Box>
//       </form>

//       {/* List of Messages */}
//       <Typography variant="h5" gutterBottom mt={4}>
//         Submitted Messages
//       </Typography>

//       {messages.length === 0 ? (
//         <Typography>No messages found.</Typography>
//       ) : (
//         messages.map((msg) => (
//           <Card key={msg._id} sx={{ mb: 2, boxShadow: 2 }}>
//             <CardContent>
//               <Typography variant="h6">{msg.name}</Typography>
//               <Typography variant="subtitle2" color="text.secondary">
//                 {msg.email}
//               </Typography>
//               <Typography variant="body1" sx={{ mt: 1 }}>{msg.message}</Typography>
//               <Box mt={2} display="flex" gap={1}>
//                 <IconButton color="primary" onClick={() => handleEdit(msg)}>
//                   <Edit />
//                 </IconButton>
//                 <IconButton color="error" onClick={() => handleDelete(msg._id)}>
//                   <Delete />
//                 </IconButton>
//               </Box>
//             </CardContent>
//           </Card>
//         ))
//       )}

//       {/* Modal for Editing */}
//       <Dialog open={openModal} onClose={handleModalClose} fullWidth>
//         <DialogTitle>Edit Message</DialogTitle>
//         <DialogContent>
//           <Box display="flex" flexDirection="column" gap={2} mt={1}>
//             <TextField
//               label="Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               fullWidth
//             />
//             <TextField
//               label="Email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               fullWidth
//             />
//             <TextField
//               label="Message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               multiline
//               rows={4}
//               fullWidth
//             />
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleModalClose}>Cancel</Button>
//           <Button onClick={handleSubmit} variant="contained" color="primary">
//             Update
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// }


//..........5

// import React, { useState, useEffect } from 'react';

// import {
//   Container, Typography, TextField, Button, Card, CardContent,
//   IconButton, Dialog, DialogTitle, DialogContent, DialogActions,
//   Box, useTheme, createTheme, ThemeProvider, CssBaseline,
//   Pagination, Switch
// } from '@mui/material';
// import { Edit, Delete } from '@mui/icons-material';
// import axios from 'axios';
// import dayjs from 'dayjs';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const lightTheme = createTheme({ palette: { mode: 'light' } });
// const darkTheme = createTheme({ palette: { mode: 'dark' } });


// export default function Form() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [messages, setMessages] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [openModal, setOpenModal] = useState(false);
//   const [deleteId, setDeleteId] = useState(null);
//   const [themeMode, setThemeMode] = useState('light');

//   // Pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 3;

//     const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   const fetchMessages = async () => {
//     try {
//       const res = await axios.get(`${BACKEND_URL}/api/form`);
//       const sorted = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//       setMessages(sorted);
//     } catch (err) {
//       toast.error("Error fetching messages", err);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingId) {
//         await axios.put(`https://mern-form-production.up.railway.app/api/form/${editingId}`, formData);
//         toast.success("Message updated successfully");
//       } else {
//         await axios.post('https://mern-form-production.up.railway.app/api/form', formData);
//         toast.success("Message submitted successfully");
//       }
//       setFormData({ name: '', email: '', message: '' });
//       setEditingId(null);
//       setOpenModal(false);
//       fetchMessages();
//     } catch (err) {
//       toast.error("Error submitting the form", err);
//     }
//   };

//   const handleEdit = (msg) => {
//     setFormData({ name: msg.name, email: msg.email, message: msg.message });
//     setEditingId(msg._id);
//     setOpenModal(true);
//   };

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`https://mern-form-production.up.railway.app/api/form/${deleteId}`);
//       toast.info("Message deleted");
//       setDeleteId(null);
//       fetchMessages();
//     } catch (err) {
//       toast.error("Error deleting message", err);
//     }
//   };

//   const handlePageChange = (_, value) => {
//     setCurrentPage(value);
//   };

//   const paginatedMessages = messages.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
//       <CssBaseline />
//       <Container maxWidth="sm" sx={{ mt: 4 }}>
//         <ToastContainer position="top-right" autoClose={3000} />
//         <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//           <Typography variant="h4" fontWeight="bold">
//             Contact Form
//           </Typography>
//           <Box display="flex" alignItems="center">
//             <Typography variant="body2">Dark Mode</Typography>
//             <Switch
//               checked={themeMode === 'dark'}
//               onChange={() => setThemeMode(prev => prev === 'dark' ? 'light' : 'dark')}
//             />
//           </Box>
//         </Box>

//         {/* Form */}
//         <form onSubmit={handleSubmit}>
//           <Box display="flex" flexDirection="column" gap={2}>
//             <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required />
//             <TextField label="Email" name="email" value={formData.email} onChange={handleChange} required />
//             <TextField
//               label="Message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               multiline rows={4}
//               required
//             />
//             <Button type="submit" variant="contained" color="primary">
//               {editingId ? 'Update' : 'Submit'}
//             </Button>
//           </Box>
//         </form>

//         {/* Messages */}
//         <Typography variant="h5" gutterBottom mt={4}>
//           Submitted Messages
//         </Typography>
//         {paginatedMessages.length === 0 ? (
//           <Typography>No messages found.</Typography>
//         ) : (
//           paginatedMessages.map((msg) => (
//             <Card key={msg._id} sx={{ mb: 2, boxShadow: 2 }}>
//               <CardContent>
//                 <Typography variant="h6">{msg.name}</Typography>
//                 <Typography variant="subtitle2" color="text.secondary">
//                   {msg.email} • {dayjs(msg.createdAt).format('MMM D, YYYY h:mm A')}
//                 </Typography>
//                 <Typography variant="body1" sx={{ mt: 1 }}>{msg.message}</Typography>
//                 <Box mt={2} display="flex" gap={1}>
//                   <IconButton color="primary" onClick={() => handleEdit(msg)}><Edit /></IconButton>
//                   <IconButton color="error" onClick={() => setDeleteId(msg._id)}><Delete /></IconButton>
//                 </Box>
//               </CardContent>
//             </Card>
//           ))
//         )}

//         {/* Pagination */}
//         <Box display="flex" justifyContent="center" mt={3}>
//           <Pagination
//             count={Math.ceil(messages.length / itemsPerPage)}
//             page={currentPage}
//             onChange={handlePageChange}
//             color="primary"
//           />
//         </Box>

//         {/* Edit Modal */}
//         <Dialog open={openModal} onClose={() => setOpenModal(false)} fullWidth>
//           <DialogTitle>Edit Message</DialogTitle>
//           <DialogContent>
//             <Box display="flex" flexDirection="column" gap={2} mt={1}>
//               <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth />
//               <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth />
//               <TextField
//                 label="Message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 multiline
//                 rows={4}
//                 fullWidth
//               />
//             </Box>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={() => setOpenModal(false)}>Cancel</Button>
//             <Button onClick={handleSubmit} variant="contained" color="primary">Update</Button>
//           </DialogActions>
//         </Dialog>

//         {/* Delete Confirmation Dialog */}
//         <Dialog open={Boolean(deleteId)} onClose={() => setDeleteId(null)}>
//           <DialogTitle>Confirm Deletion</DialogTitle>
//           <DialogContent>
//             Are you sure you want to delete this message?
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={() => setDeleteId(null)}>Cancel</Button>
//             <Button onClick={handleDelete} color="error" variant="contained">Delete</Button>
//           </DialogActions>
//         </Dialog>
//       </Container>
//     </ThemeProvider>
//   );
// }



//..................


import React, { useState, useEffect } from 'react';
import {
  Container, Typography, TextField, Button, Card, CardContent,
  IconButton, Dialog, DialogTitle, DialogContent, DialogActions,
  Box, createTheme, ThemeProvider, CssBaseline,
  Pagination, Switch
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import axios from 'axios';
import dayjs from 'dayjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const lightTheme = createTheme({ palette: { mode: 'light' } });
const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function Form() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [messages, setMessages] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [themeMode, setThemeMode] = useState('light');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
console.log('BACKEND_URL:', BACKEND_URL);


  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/form`);
      const sorted = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setMessages(sorted);
    } catch (err) {
      toast.error("Error fetching messages", err);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${BACKEND_URL}/api/form/${editingId}`, formData);
        toast.success("Message updated successfully");
      } else {
        await axios.post(`${BACKEND_URL}/api/form`, formData);
        toast.success("Message submitted successfully");
      }
      setFormData({ name: '', email: '', message: '' });
      setEditingId(null);
      setOpenModal(false);
      fetchMessages();
    } catch (err) {
      toast.error("Error submitting the form", err);
    }
  };

  const handleEdit = (msg) => {
    setFormData({ name: msg.name, email: msg.email, message: msg.message });
    setEditingId(msg._id);
    setOpenModal(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${BACKEND_URL}/api/form/${deleteId}`);
      toast.info("Message deleted");
      setDeleteId(null);
      fetchMessages();
    } catch (err) {
      toast.error("Error deleting message", err);
    }
  };

  const handlePageChange = (_, value) => {
    setCurrentPage(value);
  };

  const paginatedMessages = messages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <ToastContainer position="top-right" autoClose={3000} />
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h4" fontWeight="bold">Contact Form</Typography>
          <Box display="flex" alignItems="center">
            <Typography variant="body2">Dark Mode</Typography>
            <Switch
              checked={themeMode === 'dark'}
              onChange={() => setThemeMode(prev => prev === 'dark' ? 'light' : 'dark')}
            />
          </Box>
        </Box>

        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required />
            <TextField label="Email" name="email" value={formData.email} onChange={handleChange} required />
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              required
            />
            <Button type="submit" variant="contained" color="primary">
              {editingId ? 'Update' : 'Submit'}
            </Button>
          </Box>
        </form>

        <Typography variant="h5" gutterBottom mt={4}>Submitted Messages</Typography>
        {paginatedMessages.length === 0 ? (
          <Typography>No messages found.</Typography>
        ) : (
          paginatedMessages.map((msg) => (
            <Card key={msg._id} sx={{ mb: 2, boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6">{msg.name}</Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {msg.email} • {dayjs(msg.createdAt).format('MMM D, YYYY h:mm A')}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>{msg.message}</Typography>
                <Box mt={2} display="flex" gap={1}>
                  <IconButton color="primary" onClick={() => handleEdit(msg)}><Edit /></IconButton>
                  <IconButton color="error" onClick={() => setDeleteId(msg._id)}><Delete /></IconButton>
                </Box>
              </CardContent>
            </Card>
          ))
        )}

        <Box display="flex" justifyContent="center" mt={3}>
          <Pagination
            count={Math.ceil(messages.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>

        <Dialog open={openModal} onClose={() => setOpenModal(false)} fullWidth>
          <DialogTitle>Edit Message</DialogTitle>
          <DialogContent>
            <Box display="flex" flexDirection="column" gap={2} mt={1}>
              <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth />
              <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth />
              <TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                fullWidth
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenModal(false)}>Cancel</Button>
            <Button onClick={handleSubmit} variant="contained" color="primary">Update</Button>
          </DialogActions>
        </Dialog>

        <Dialog open={Boolean(deleteId)} onClose={() => setDeleteId(null)}>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            Are you sure you want to delete this message?
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteId(null)}>Cancel</Button>
            <Button onClick={handleDelete} color="error" variant="contained">Delete</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
}
