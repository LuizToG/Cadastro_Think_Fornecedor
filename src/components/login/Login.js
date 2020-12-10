import React, { useState } from "react";
import {  useHistory } from 'react-router-dom';
import "./Login.css";
import axios from 'axios'
import { Input, Button, Label, Media, FormGroup, Row, Col, Form} from 'reactstrap';
import think from '../img/logo_branca.png'


const Login = (props) => {
   
    const [usu_login, setLogin] = useState('');
    const [usu_senha, setSenha] = useState('');

    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);

    function onChange1(ev) {
        const {nome, value} = ev.target;
        setLogin(value)
        if (ev !== '') {
            setIsActive1(true);
          } else {
            setIsActive1(false);
          }
    }

    function onChange2(ev) {
        const {name, value} = ev.target;
        setSenha(value)
        if (ev !== '') {
            setIsActive2(true);
          } else {
            setIsActive2(false);
          }
    }
   
    const history = useHistory();
    

   async function handleLogin(e){
        e.preventDefault();

        try {
    const response = await axios.get(`http://192.168.0.62:3333/usuarios/${usu_login}/${usu_senha}`);
    //console.log(response.data[0].codigofab[0].for_cod) 

    /*
    localStorage.setItem('usu_login', response.data[0].usu_login)
    localStorage.setItem('usu_senha', response.data[0].usu_senha)
    */

    history.push('/cadastrofornecedor')
    } catch (err) {
    alert('falha')
            }
            
        }

    
    return (
    <div className="root2">
        <Form id="loginSistem" onSubmit={handleLogin}>
            <Row className="row">
                <Col sm={6}>
                    <FormGroup className="title">  
                        <h2 id="title-text" className="text">THINK ERP</h2>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <FormGroup className="login">
                        <Input className="form" type="text" placeholder=" " id="login" value={usu_login} onChange={onChange1}></Input>
                        <Label className={ isActive1 ? "Active" : ""}><i className="material-icons left">person</i>Usuário:</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <FormGroup className="senha">
                        <Input className="form" type="text" placeholder=" " id="senha" value={usu_senha} onChange={onChange2}></Input>
                        <Label  className={ isActive2 ? "Active" : ""}><i className="material-icons left">lock</i>Senha:</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <FormGroup>
                        <Button id="buttonlogin" className="efeito efeito-1" type="submit">LOGIN<i className="material-icons left">login</i></Button>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
        <Row className="logo">
                <Media id="thinklogo" src={think} />
        </Row>  
    </div>
    )
}

export default Login;