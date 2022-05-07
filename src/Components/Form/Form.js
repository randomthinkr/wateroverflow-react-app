import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import styles from '../Form/Form.module.css';



const Form = (props) => {

    const paramsInitialState = {
        rows: 5,
        row: 4,
        column: 1,
        capacity: 250,
        water: 3000
    };
    const [params, setParams] = useState(paramsInitialState);

    useEffect(() => {
        props.searchCriteria({
            ...params
        });
    }, [params])

    const handleFieldOnChange = (event) => {
       
        setParams({
            ...params,
            [event.target.id]: event.target.value
        });

    };

   
    return (
        <div className={styles.form}>
            <div>
                <div>
                </div>
                <form >
                    <h1 className="h1 mb-4"><span class="badge badge-secondary text-sm-left">Welcome to WaterOverflow!</span></h1>
                    <img className="mb-4" src={logo} alt="" width="100" ></img>
                    <h1 className="h3 mb-4 text-muted">Trigger Overflow!</h1>
                    <label className="sr-only">Rows</label>
                    <span>Max Rows: </span><input type="number" id="rows" onChange={(event) => handleFieldOnChange(event)} value={params.rows} className="form-control mb-2" placeholder="Please input a value"></input>
                    <span>Glass Row: </span><input type="number" id="row" onChange={(event) => handleFieldOnChange(event)} value={params.row} className="form-control mb-2" placeholder="Please input a value" ></input>
                    <span>Glass Column: </span><input type="number" id="column" onChange={(event) => handleFieldOnChange(event)}  value={params.column} className="form-control mb-2" placeholder="Please input a value" ></input>
                    <span>Glass Capacity: </span><input type="number" id="capacity" onChange={(event) => handleFieldOnChange(event)} value={params.capacity} className="form-control mb-2" placeholder="Please input a value" ></input>
                    <span>Total Water: </span><input type="number" id="water" onChange={(event) => handleFieldOnChange(event)} value={params.water} className="form-control mb-2" placeholder="Please input a value" ></input>
                   <div className="mt-4">
                        <input type="button" onClick={(event) => {
                                props.handleSearch(event)
                            }} className="btn btn-lg btn-primary btn-block" value="Calculate"></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;