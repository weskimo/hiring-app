import * as React from 'react';
import { useState } from "react"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';


export default function Manager() {

    // list for the jobs
    const [list, setList] = useState([])

    // states to add new jobs to the list
    const [newJobName, setNewJobName] = useState('')
    const [newJobMonComp, setNewJobMonComp] = useState('')
    const [newJobNonMonComp, setNewJobNonMonComp] = useState('')

    // for the accordian to be expanded
    const [expanded, setExpanded] = React.useState(false);

    // handles the accordian being opened.
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // function to add a new job item to the list of jobs
    function addItem(e) {
        setList(prevList => {
            return [...prevList, {name: newJobName, monComp: newJobMonComp, nonMonComp: newJobNonMonComp}]
        })
        setNewJobMonComp('')
        setNewJobName('')
        setNewJobNonMonComp('')
     } 

    return(
        <>

        <h1> Add Jobs Here:</h1>
        <div className='add-Job'>
        </div>
       
       
        <div className='add-Job'>
        <input
            type="text"
            placeholder="Job Name"
            onChange={ (event) => setNewJobName(event.target.value) }
            value={newJobName}
            maxLength="40"
        />
        <input

            type="text"
            placeholder="Monetary Compensation"
            onChange={ (event) => setNewJobMonComp(event.target.value) }
            value={newJobMonComp}
            maxLength="40"
        />
        <input

            type="text"
            placeholder="Non-Monetary Compensation"
            onChange={ (event) => setNewJobNonMonComp(event.target.value) }
            value={newJobNonMonComp}
            maxLength="100"
        />
        <button onClick={addItem}>Add Item</button>
        </div>




        <List children={list} sx={{ width: '100%', bgcolor: 'background.paper' }} >
            {list.map((item) =>
                <ListItem alignItems="center">
                     <Accordion expanded={expanded === list.indexOf(item)} onChange={handleChange(list.indexOf(item))}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Job Title:
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}> {item.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Salary: {item.monComp}
                    </Typography>
                    <Typography>
                        Other: {item.nonMonComp}
                    </Typography>
                    </AccordionDetails>
                </Accordion>


                </ListItem>


            )}
        </List>


    </>
    )
      
}