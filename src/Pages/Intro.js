import { Typography ,Container, Button, } from '@mui/material';
import React from 'react';
import Intro_img from '../images/linkedin-sales-solutions-Xh_MFNzpEDw-unsplash.jpg';

function Intro() {
    return(
<div style={{backgroundColor:'#021C2C',width:'100%' ,height:'714px'}}>
<Container
          style={{
            width: '100%',
            height: '87px',
            maxWidth: '100%',
            
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            alignContent: 'space-between',
          }}
        >
          <Typography
            style={{
              color: '#FFF',
              fontFamily: 'Noto Serif',
              fontSize: '32px',
              fontWeight: 400,
              marginLeft:'70px'
            }}
          >
            AfroJobs
          </Typography>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
          <div style={{ marginLeft: '700px',display:'flex',flexDirection:'row',justifyContent:'space-between' }}>
            <Button
              style={{
                color: 'white',
                fontFamily: 'Noto Serif',
                fontSize: '19px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
              }}
              size="large"
            >
              Home
            </Button>
            <Button
              style={{
                color: 'white',
                fontFamily: 'Noto Serif',
                fontSize: '19px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
              }}
              size="large"
            >
              ABOUT US
            </Button>
          </div>
          <div><Button
            variant="contained"
            style={{
              width: '75px',
              height: '34px',
              color: 'white',
              backgroundColor: '#F3C300',
              fontWeight: '100',
              fontSize: '12px',
              fontFamily: 'Noto Serif',
             
            }}
          >
            Signup
          </Button></div>
        </div>
        </Container>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
       <Container style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
            <Typography
             style={{
                color: '#DBBF03',
                fontFamily: 'Noto Serif',
                fontSize: '31px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                marginTop:'45px'
              }}>Digital. scalable product</Typography>
               <Typography
             style={{
                color: '#FFF',
                fontFamily: 'Noto Serif',
                fontSize: '52px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                width:'426px',
                height: '259px'
              }}>Revolutionizing Job<br></br> Onboarding</Typography>
               <Typography
             style={{
                color: '#FFF',
                fontFamily: 'Noto Serif',
                fontSize: '23px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                width:'426px',
                height: '189px'
              }}>To a whole next level. join afro-jobs to get the job of you dream and recruiters meet your prospect employees</Typography>
              <a href="/home">
              <Button
  variant="outlined"
  style={{
    width: "220px",
    height: '60px',
    marginBottom: '300px',
    borderColor: '#EDCA6D',  // Set the border color
    color: 'white', 
    borderWidth: '4px'        // Set the text color
  }}
>
  Explore Opportunity
</Button></a>

        </Container>
        <div >
       <img style={{ width: '597px', height: '486px', marginTop:'55px',marginRight:'150px' }} src={Intro_img} alt="intro image 1" />
       </div>
</div>

        

</div>
    );
}
export default Intro;