import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {deposite,withdraw,collectinterst,deleteamount} from '../actions/BankingActions.js'
const Banking = () => {

    const [amount, setAmount] = useState('');
    const dispatch = useDispatch();

    const handleDeposite = () => {
        dispatch(deposite(amount))
    }
    const handlewithdraw = () => {
        dispatch(withdraw(amount))

    }
    const handleinterest = () => {
        dispatch(collectinterst())

    }
    const handledelete = () => {
        dispatch(deleteamount())

    }
    const handleChangestatus = () => {
        dispatch({type:"DEPOSITE",amount:parseInt(amount)})

    }
    return (
        <div className="form-group">
            <input onChange={e => setAmount(e.target.value)} type="text" className="form-control" />
            <button onClick={handleDeposite} className="btn btn-success">Deposite</button>
            <button onClick={handlewithdraw} className="btn btn-warning">withdraw</button>
            <button onClick={handleinterest} className="btn btn-info">interest</button>
            <button onClick={handledelete} className="btn btn-success">delete account</button>
            <button onClick={handleChangestatus} className="btn btn-danger">Change accout type</button>
        </div>
    )
}

export default Banking
