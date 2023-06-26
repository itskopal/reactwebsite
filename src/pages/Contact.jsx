import React from 'react';
import Layout from '../components/Layout/Layout';
import SupoortAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, '& h4': {fontWeight:'bold', mb:2} }}>
        <Typography variant='h4'>
          Contact My Resturant
        </Typography>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, porro praesentium? Rerum nisi neque, debitis accusamus officia a soluta incidunt eveniet dolor recusandae inventore nesciunt quas mollitia, libero odio veniam?</p>
      </Box>
      <Box sx={{ m:3, width: "600px", ml:10, '@media (max-width: 600px)': {
        width: '300px',
       },
      }}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: 'black', color:'white', }} align='center' >Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupoortAgentIcon sx={{ color:'red', pt: 1 }} /> 1800-00-00 (tollfree)
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color:'skyblue', pt: 1 }} /> help@myrest.com 
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color:'green', pt: 1 }} /> 1234567890 
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
