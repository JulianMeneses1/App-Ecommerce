import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";
import { useCart } from "../hooks/useCart";

export const PayPalUI = ({total}, props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const { handlerResetCart } = useCart();

    return (
        <>
            <button onClick={handleShow} className="btn btn-success btn-lg">Finalizar Compra</button> 
            <Modal 
            show={show} 
            onHide={handleClose}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header>
                <Modal.Title style={{ textAlign: 'center', margin: 'auto' }}>Medios de Pago</Modal.Title>
            </Modal.Header>        
                <Modal.Body>           
                    <PayPalScriptProvider options={{"client-id":import.meta.env.VITE_API_PAYPAL_CLIENT_ID}}>
                        <PayPalButtons
                            createOrder={(data,actions)=> {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                value: total
                                            }
                                        }
                                    ]
                                })                            
                            }}
                            onApprove={(data, actions)=> {
                                return actions.order.capture().then(function (details) {
                                    sessionStorage.removeItem('cart');
                                    handlerResetCart();
                                    handleClose();
                                    Swal.fire(                
                                        'Pago confirmado',
                                        details.payer.name.given_name + ' tu transacción por el pago de $' +  total + 
                                        ' ha sido completada con éxito',
                                        'success'
                                    );
                                })
                            }}
                        />
                    </PayPalScriptProvider>       
                </Modal.Body>
                <Modal.Footer style={{ justifyContent: 'center'}}>
                <button id="resetBtn" type="button" className="btn btn-secondary btn-lg" onClick={handleClose}>Cerrar</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}