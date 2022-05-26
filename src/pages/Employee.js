import * as React from 'react';
import { useState, useEffect } from "react"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

export default function Employee() {

    // list for the accordian
    const [list, setList] = useState([])

    // states so we can add jobs to the list of jobs
    const [newJobName, setNewJobName] = useState('')
    const [newJobMonComp, setNewJobMonComp] = useState('')
    const [newJobNonMonComp, setNewJobNonMonComp] = useState('')

    // for the accordian to be expanded
    const [expanded, setExpanded] = React.useState(false);

    // handles the accordian expansion
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

   

    // this generates static 'fake' data to be simulated into the app, Here we would normally want a call to database to get the data
    React.useEffect(() => {
        setList(prevList => {
            return [...prevList, {name: "Engineer", monComp: "£30,000 and 1% company shares", nonMonComp: "Gym Pass, Healthcare", jobInfo: "Full time, React Engineer"}]
        })
        setList(prevList => {
            return [...prevList, {name: "Ui Designer", monComp: "£29,000 and 1.5% company shares", nonMonComp: "Gym Pass, Healthcare", jobInfo: "Required experience 2 years"}]
        })
        setList(prevList => {
            return [...prevList, {name: "Ux Designer", monComp: "£25,000", nonMonComp: "Gym Pass", jobInfo: "Required experience 5 years"}]
        })
        setList(prevList => {
            return [...prevList, {name: "Back-end Dev", monComp: "£35,000 and 1% company shares", nonMonComp: "Gym Pass, Healthcare", jobInfo: "Required experience 1 year"}]
        })
        

    }, [])

    

    return (
       <>
       <h1>Employee</h1>
       <h3>Find a list of your job offers below:</h3>

       <List children={list} sx={{ width: '100%', bgcolor: 'background.paper' }} style={Styles.}>
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
                    <Divider />
                    <Typography>
                        Other: {item.nonMonComp}
                    </Typography>
                    <Divider />
                    <Typography>
                        Job Info: {item.jobInfo}
                    </Typography>
                    </AccordionDetails>
                </Accordion>


                </ListItem>


            )}
        </List>
       </>
    )
}