import TopBar from "../../Layout/topBar"
import { useDispatch, useSelector } from 'react-redux';
import { Startnewchampion } from '../../../redux/actions/newChampion-horde.actions'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'
import { ALLIANCE_LOGO, ALLIANCE_OK, classFactionAlliance, classFactionHorde, HORDE_LOGO, HORDE_OK, TITLE_ALLIANCE, TITLE_HORDE } from './data';
import { START_NEW_ALLIANCE_CHAMPION } from "../../../redux/actions/newChampion-alliance.actions";
import TableChampions from "./TableChampions";
import { useState } from "react";
import * as Yup from "yup";

const Faccion = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const states = useSelector((state: any) => {
        return {
            champion: state.ReducerIndex.FormNewChampion,
            idFaction: state.ReducerIndex.IdFaction.data
        }
    });


    let arrayClassFaction = states.idFaction === 1 ? classFactionAlliance : classFactionHorde;
    const TITLE = states.idFaction === 1 ? TITLE_ALLIANCE : TITLE_HORDE;
    const IMG = states.idFaction === 1 ? ALLIANCE_LOGO : HORDE_LOGO;
    const greetings = states.idFaction === 1 ? ALLIANCE_OK : HORDE_OK;
    const formInputsValidation = Yup.object().shape({
        name: Yup.string()
            .required('*'),
        class: Yup.string()
            .required('*'),
        races: Yup.string()
            .required('*'),
    });

    const handleSubmit = (values: any) => {
        console.log(values)
        /*    if (states.idFaction === 1) {
               dispatch(START_NEW_ALLIANCE_CHAMPION(values))
           } else {
               dispatch(Startnewchampion(values))
           }
           setTimeout(() => {
               Swal.fire({
                   title: TITLE,
                   icon: 'success',
                   allowOutsideClick: false,
               }).then((result) => {
                   navigate('/')
               })
           }, 1000); */
    }

    return (
        <>
            <div className="home">
                <TopBar />
                <div className='container-body'>
                    <div className='form-alliance'>
                        <h1>Welcome Champion!</h1>
                        <img src={IMG} />
                        <h1>{TITLE}</h1>
                        <div className="form-inputs">
                            <Formik
                                initialValues={{ name: '', class: '', race: '' }}
                              /*   validationSchema={formInputsValidation} */
                                onSubmit={(values, { setSubmitting }) => {
                                    if (states.idFaction === 1) {
                                        dispatch(START_NEW_ALLIANCE_CHAMPION(values))
                                    } else {
                                        dispatch(Startnewchampion(values))
                                    }
                                    setTimeout(() => {
                                        Swal.fire({
                                            title: TITLE,
                                            allowOutsideClick: false,
                                            imageUrl: greetings,
                                            imageWidth: 400,
                                            imageHeight: 500,
                                            imageAlt: 'Custom image',
                                        })/* .then((result) => {
                                            navigate('/')
                                        }) */
                                    }, 1000);
                                    setSubmitting(false);
                                }}
                            >
                                {({ isSubmitting, errors }: any) => (
                                    <Form className='form-champions'>
                                        <label id='name'>Champion Name</label> {errors.name && (
                                            <span className="error">{errors.name}</span>
                                        )}
                                        <Field className="formField" type="text" name="name" />
                                        <label id="races">Race</label> {errors.race && (
                                            <span className="error">{errors.race}</span>
                                        )}
                                        <Field className="formField" component="select" name="race" id="race">
                                            <option key={"race"} value=''>{"Select an option..."}</option>
                                            {
                                                arrayClassFaction.map((data: any) => {
                                                    return <option key={data.id} value={data.name}>{data.name}</option>
                                                })
                                            }
                                        </Field>
                                        <label id="class">Class</label> {errors.class && (
                                            <span className="error">{errors.class}</span>
                                        )}
                                        <Field className="formField" component="select" name="class" id="class" >
                                            <option key={"race"} value=''>{"Select an option..."}</option>
                                            <option value="Druid">Druid</option>
                                            <option value="Demon Hunter">Demon hunter</option>
                                            <option value="Dead Knight">Death Knight</option>
                                            <option value="Mage">Mage</option>
                                            <option value="Hunter">Hunter</option>
                                            <option value="Monk">Monk</option>
                                            <option value="Rogue">Rogue</option>
                                            <option value="Shaman">Shaman</option>
                                            <option value="Warrior">Warrior</option>
                                            <option value="Priest">Priest</option>
                                            <option value="Warlock">Warlockt</option>
                                            <option value="Paladin">Paladin</option>
                                        </Field>
                                        <button className="form-button" type='submit' disabled={isSubmitting}>
                                            Accept
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                    <TableChampions />
                </div>
            </div>
        </>
    )
}

export default Faccion
