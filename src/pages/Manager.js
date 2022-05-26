import * as React from 'react';
import { useState } from "react"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Manager() {


    const [list, setList] = useState([])

    const [newJobName, setNewJobName] = useState('')
    const [newJobMonComp, setNewJobMonComp] = useState('')
    const [newJobNonMonComp, setNewJobNonMonComp] = useState('')

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    function addItem(e) {
        setList(prevList => {
            return [...prevList, {name: newJobName, monComp: newJobMonComp, nonMonComp: newJobNonMonComp}]
        })
        setNewJobMonComp('')
        setNewJobName('')
        setNewJobNonMonComp('')
     } 

    return(
        <div>
                <h1>Manager</h1>
            </div>
    )
      
}