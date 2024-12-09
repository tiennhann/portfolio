import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles'; // Use styled API
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Styled components
const Root = styled('div')(({ theme }) => ({
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 300,
}));

const TabsContainer = styled(Tabs)(({ theme }) => ({
    borderRight: `1px solid ${theme.palette.divider}`,
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`tab-panel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const JobList = () => {
    const [value, setValue] = useState(0);

    const experienceItems = {
        NMSU_ASSISTANT: {
            jobTitle: 'Computer Science Teacher Assistant',
            duration: 'August 2023 - Present',
            desc: [
                'Worked as the Teaching Assistant, providing valuable assistance to students with their queries.',
                'Demonstrated strong communication skills, effective time management, and a solid grasp of foundational course concepts',
            ],
        },
        NMSU_PROCTOR: {
            jobTitle: 'Computer Science Teacher Proctor',
            duration: 'August 2023 - Present',
            desc: [
                'Led CS tutoring sessions in the lab for students. Helped students with their courses like Introduction to Computer Science, Data Structures, Object Oriented Programming, etc.',
                'Ensured all students fully comprehended the weekly curriculum and provided additional support to students who required extra tutoring. Diagnosed computer and software problems using Linux troubleshooting techniques.',
            ],
        },
        NMSU_RESEARCHER: {
            jobTitle: 'Undergraduate Researcher',
            duration: 'August 2023 - Present',
            desc: [
                'Contributed to developing a research project that evaluates the different predictive models in Smart Homes to elicit user preferences.',
                'Developed the activity prediction algorithm to generate all preferences from devices. This outperforms existing approaches by at least 10%.',
            ],
        },
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Root>
            <TabsContainer
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
            >
                {Object.keys(experienceItems).map((key, i) => (
                    <Tab key={key} label={key} />
                ))}
            </TabsContainer>
            {Object.keys(experienceItems).map((key, i) => (
                <TabPanel value={value} index={i} key={key}>
                    <span className="joblist-job-title">
                        {experienceItems[key]["jobTitle"] + " "}
                    </span>
                    <span className="joblist-job-company">{key}</span>
                    <div className="joblist-duration">
                        {experienceItems[key]["duration"]}
                    </div>
                    <ul className="job-description">
                        {experienceItems[key]["desc"].map((descItem, i) => (
                            <li key={i}>{descItem}</li>
                        ))}
                    </ul>
                </TabPanel>
            ))}
        </Root>
    );
};

export default JobList;