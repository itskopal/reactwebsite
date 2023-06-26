import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material';


const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
        p:2,
        textAlign: 'center',
        '& h4':{
          fontWeight: 'bold',
          my:2,
          fontSize: '2rem',
        },
        '& p':{
          textAlign: 'justify',
        },
        '@media (max-width:600px)':{
          mt: 0,
          '& h4':{
            fontSize:'1.5rem',
          },
        },
      }}
      >
        <Typography variant='h4'>
          Welcome To My Resturant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio impedit aut est minima velit nihil, culpa numquam corporis saepe! Esse minus soluta aut molestiae maxime ad tempora dolor at eos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde eum harum tempora tenetur suscipit expedita excepturi labore nemo impedit. Quasi reprehenderit possimus nemo voluptas commodi ut inventore quia ullam?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolore architecto autem aliquam inventore officia dolorum aspernatur quibusdam facere fugiat officiis error id aut blanditiis unde maxime, quidem accusantium laudantium.
        </p>
        <br/>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim numquam debitis excepturi corrupti laudantium fugiat deleniti maxime minima ut placeat similique delectus unde illo, rem autem eaque, quae vero? Animi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repellat praesentium? Unde enim deserunt quas at animi perspiciatis nisi porro aliquid? Adipisci voluptatem provident exercitationem minus illum consequuntur laboriosam impedit.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
