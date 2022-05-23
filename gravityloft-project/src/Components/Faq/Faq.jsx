import React, { useState } from 'react'
import "./Faq.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
function Faq() {
    const [expanded, setExpanded] = useState(true);
    const [expanded1, setExpanded1] = useState(true);
    const [expanded2, setExpanded2] = useState(true);
    const [expanded3, setExpanded3] = useState(true);
    const [expanded4, setExpanded4] = useState(true);
    const [expanded5, setExpanded5] = useState(true);
    const [expanded6, setExpanded6] = useState(true);
  return (
    <div className='faq'>
    <br/><br/>
    <div className='Faq-heading'>FAQ</div>
    <div className='faq-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
    <br/>
    <div className="Accordian">

    <Accordion onClick={()=>setExpanded(!expanded)}>
        <AccordionSummary
          expandIcon={expanded?<AddIcon />:<RemoveIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography  padding="5px" className='typo'><b>What is Techrefic ?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="#5C5F62">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion onClick={()=>setExpanded1(!expanded1)}>
        <AccordionSummary
          expandIcon={expanded1?<AddIcon />:<RemoveIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography  padding="5px" className='typo'><b>What is Techrefic ?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="#5C5F62">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion onClick={()=>setExpanded2(!expanded2)}>
        <AccordionSummary
          expandIcon={expanded2?<AddIcon />:<RemoveIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography padding="5px"><b>What is Techrefic ?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="#5C5F62">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion onClick={()=>setExpanded3(!expanded3)}>
        <AccordionSummary
          expandIcon={expanded3?<AddIcon />:<RemoveIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography padding="5px"><b>What is Techrefic ?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="#5C5F62">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion onClick={()=>setExpanded4(!expanded4)}>
        <AccordionSummary
          expandIcon={expanded4?<AddIcon />:<RemoveIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography padding="5px"><b>What is Techrefic ?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="#5C5F62">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion onClick={()=>setExpanded5(!expanded5)}>
        <AccordionSummary
          expandIcon={expanded5?<AddIcon />:<RemoveIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography padding="5px"><b>What is Techrefic ?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="#5C5F62">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion onClick={()=>setExpanded6(!expanded6)}>
        <AccordionSummary
          expandIcon={expanded6?<AddIcon />:<RemoveIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography padding="5px"><b>What is Techrefic ?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="#5C5F62">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </AccordionDetails>
      </Accordion>

      
    </div>
    <br/><br/><br/>
    </div>
  )
}

export default Faq