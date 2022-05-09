import React, { useEffect, useLayoutEffect, useState } from 'react';
import {Row, Col, Container } from "react-bootstrap";
import emptyGlass from '../../images/emptyGlass.png';
import filledGlass from '../../images/filledGlass.png';
import less50Glass from '../../images/less50Glass.png';
import over50Glass from '../../images/over50Glass.png';
import styles from '../GlassStack/GlassStack.module.css';
import Glass from '../Glass/Glass';

const GlassStack = (props) => {
   
    const [searchResult, setSearchResult] = useState(props.searchResult);
    const [glassStack, setGlassStack] = useState([]);
    const [waterLevel, setWaterLevel] = useState(props.searchResult.waterLevel);
    
    useLayoutEffect(() => {
        const glassItems = searchResult.glassStack.items
        const glassStackGrid = []
        const rowCount = glassItems.length
        for(let i = 0; i < rowCount; i++){ 
            const rowGlasses= []
            for(let j = 0; j < rowCount; j++) {
                const glass = {
                    waterLevel: -1,
                    img: null
                }
                rowGlasses.push(glass)
            }
            
            for(let j = 0; j < glassItems[i].length; j++) {
                const wl = parseFloat(glassItems[i][j].waterLevel).toFixed(2)
                const cap = parseFloat(glassItems[i][j].capacity).toFixed(2)
                const halfOfCap = parseFloat(cap / 2).toFixed(2);
               
                let img = emptyGlass
                
                if(wl === cap) {
                    img = filledGlass
                } 
                else if(parseFloat(wl) < parseFloat(halfOfCap) && wl != 0.00) {
                    img = less50Glass
                }
                else if(wl > halfOfCap) {
                    img = over50Glass
                }
               
                const glass = {
                    waterLevel: wl,
                    capacity: cap,
                    glassImage: img
                }
                rowGlasses.push(glass)
               
            }
            glassStackGrid.push(rowGlasses)
            
            setGlassStack(
                glassStackGrid
            )
        }
       
        
        
    }, [searchResult])



    return (

        <>
            <div className={styles.glassStack}>
                <div>
                    <div>
                    <h1 className="h3 mb-4 text-muted">Glass Stack</h1>
                    </div>
                    <Container>
                    {glassStack.map((row, r) => (
                        <Row  key={r} className={styles.center}>
                            {row.map((glass, c) => (
                                <Col key={r+c} className='col-2' sm={2} md={2} lg={2} >
                                    {
                                        glass.waterLevel != -1 ?
                                        <Glass glassImage={glass.glassImage} waterLevel={glass.waterLevel} />
                                        :
                                       null  
                                    }
                                    
                                </Col>
                                 ))}
                        </Row>
                         ))}
                    </Container>
                </div>
                <div className="mt-4">
                    <h3 className="h3 mb-4 text-muted">The Glass Water Level for the Identified Row and Column is: <span class="badge badge-success text-md-left">{waterLevel}</span> </h3>
                    </div>
            </div>
        </>
    );
};

export default GlassStack;
