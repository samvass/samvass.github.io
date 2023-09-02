import React from 'react';
import style from './Education.module.css';
import 'aos/dist/aos.css';
import mcgill from '../../images/McGill_University_CoA.svg.png'
import dawson from '../../images/dawson.png'
import {Box, ListItem, ListItemButton, ListItemText} from '@mui/material';
import { FixedSizeList } from 'react-window';
import { RiStickyNoteLine } from 'react-icons/ri';
import Item from '../Item';


const Education = () => {

    return (
        <div className={style.education}>

        <div data-aos='slide-right' style={{ fontSize: '40px', fontWeight: 'bolder', marginBottom: '50px'}}>Education</div>

        <div data-aos='slide-right' style={{display:'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '100px'}}>

            <Item image={mcgill} imageLink="https://www.mcgill.ca/engineering/" h1="Bachelor of Software Engineering" h2="McGill University" h3="September 2020 - May 2024" h4="Montreal, Canada" h5="GPA: 3.95/4.0" />

            <div style={{marginBottom: '70px'}}>
                <div style={{ marginBottom: '15px' , fontSize: '25px', fontWeight: '500'}}>Courses Taken</div>
                    <Box
                    sx={{ width: '100%', height: 200, maxWidth: 360, color: 'white'}}>
                        <FixedSizeList height={200} width={360} itemSize={46} itemCount={9} overscanCount={5}>
                            {renderRow}
                        </FixedSizeList>
                    </Box>
            </div>

            </div>

            <div data-aos='slide-right' style={{display:'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '100px'}}>

              <Item image={dawson} imageLink="" h1="DEC of Health Sciences" h2="Dawson College" h3="September 2018 - May 2020" h4="Montreal, Canada" h5="R-Score: 36.4" />

              </div>



        </div>
    )
}

function renderRow(props) {
    const { index, style } = props;

    const courses = ['Artificial Intelligence', 'Algorithm Design', 'Algorithms and Data Structures', 'Model-Based Programming', 'Prog. Languages & Paradigms', 'Operating Systems', 'Requirements Engineering', 'Software Validation', 'Discrete Structures']

    const bg = index %2 == 0 ? '#2e455f' : '#456990'
  
    return (
      <ListItem style={{...style, backgroundColor: bg}} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={courses[index]} />
        </ListItemButton>
      </ListItem>
    );
  }

export default Education

