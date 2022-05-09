import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";
import styles from '../Glass/Glass.module.css';

const Glass = (props) => { 
    
    return (
       
        <> 
            <Card className={styles.noborder}>
                <Card.Img src={props.glassImage}  className={styles.imgHeight}/>
                <Card.Body className={styles.nopadding}>
                    <Card.Text>{props.waterLevel}</Card.Text>
                </Card.Body>
            </Card>
           
        </>
    );
};

export default Glass;
