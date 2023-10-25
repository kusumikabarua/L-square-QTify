import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './BaseAccordion.module.css'

export default function BasicAccordion({title,content}) {
  return (
    <div className={styles.border}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "green" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={styles.title}
        >
          <Typography >{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {content}
          </Typography>
        </AccordionDetails>
      </Accordion> 
    </div>
  );
}