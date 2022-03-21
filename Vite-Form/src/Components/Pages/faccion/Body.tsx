import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import './styles-body.css';
import { useDispatch } from "react-redux";
import { START_INSERT_ID } from "../../../redux/actions/faction_id.actions";

const Inicio = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toFaccion = (id: number) => {
        dispatch(START_INSERT_ID(id))
        navigate('/WELCOME')
    }
    
    return (
        <div className="flex-container">
            <div className="flex-alliance">
                <img className="gif-alliance" src='https://media3.giphy.com/media/1zJExxElqvk2l8ott3/giphy.gif?cid=ecf05e47r9wsksi4isiz93twwk7inko1yswded8rnfsc2ymk&rid=giphy.gif&ct=g' />
                <img className="img-alliance" src='../public/images/alianza.jpeg' />
                <button className="btn-alliance" onClick={() => toFaccion(1)}>Join to the alliance</button>
            </div>
            <div className="flex-horde">
                <img className="gif-horde" src='https://media3.giphy.com/media/8vHSt3vau0pFh0ZemM/giphy.gif?cid=ecf05e47mblqg0scev11cll55po5pkpcmfgvyg8khilvvgxa&rid=giphy.gif&ct=g' />
                <img className="img-horde" src='../public/images/horda.jpeg' />
                <button className="btn-horde" onClick={() => toFaccion(2)}>Join to the horde</button>
            </div>
        </div>
    )
}

export default Inicio;


