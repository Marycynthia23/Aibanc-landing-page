import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./FAQ.css"

const FAQ = () => {
   

  return (
    <div className='faqsection'>
        <h3 className='faqheadline'>Frequently Asked Questions</h3>
        <div className='test' style={{
            margin: "auto",
            width: "60%"
        }}>
      <Accordion elevation={0}>
        <AccordionSummary
        
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography  style={{
            fontSize: "26px",
            fontWeight: "600",
            lineHeight: "31px",
            display: "flex",
            alignItems: "center",
            color: "#172B4D",
            border:"none"
          }}>Why request my BVN?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  style={{
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "30px",
            display: "flex",
            alignItems: "center",
            color: "#172B4D",
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}
      style={{
        border: "0",
            borderBottomWidth: "0",
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{
            fontSize: "26px",
            fontWeight: "600",
            lineHeight: "31px",
            display: "flex",
            alignItems: "center",
            color: "#172B4D",
          }}>How can I get my banks statement?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "30px",
            display: "flex",
            alignItems: "center",
            color: "#172B4D",
          }}>
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{
            fontSize: "26px",
            fontWeight: "600",
            lineHeight: "31px",
            display: "flex",
            alignItems: "center",
            color: "#172B4D",
            
          }}>Unable to sign in, BVN registered to another user?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "30px",
            display: "flex",
            alignItems: "center",
            color: "#172B4D",
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{
            fontSize: "26px",
            fontWeight: "600",
            lineHeight: "31px",
            display: "flex",
            alignItems: "center",
            color: "#172B4D",
          }}>What should I do if I need more help?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography 
          style={{
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "30px",
            display: "flex",
            alignItems: "center",
            color: "#172B4D",
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>


       
    </div>
  )
}

export default FAQ