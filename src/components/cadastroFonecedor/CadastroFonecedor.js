import React, { useState, useCallback, useEffect } from 'react';
import { Row, Form, FormGroup, Label, Input, Col, Button,} from 'reactstrap';
import './CadastroFonecedor.css'
//import api from '../../api';
import axios from 'axios';
import MenuSuperior from '../menuSuperior/MenuSuperior.js';

const CadastroFornecedor = (props) => {
  
    console.log('teste');
    //const [inserts, setInsert] = useState(null);
    

    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);
    const [value4, setValue4] = useState(null);
    const [value5, setValue5] = useState(null);
    const [value6, setValue6] = useState(null);
    const [value7, setValue7] = useState(null);
    const [value8, setValue8] = useState(null);
    const [value9, setValue9] = useState(null);
    const [value10, setValue10] = useState(null);
    const [value11, setValue11] = useState(null);
    const [value12, setValue12] = useState(null);
    const [value13, setValue13] = useState(null);

    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive9, setIsActive9] = useState(false);
    const [isActive10, setIsActive10] = useState(false);
    const [isActive11, setIsActive11] = useState(false);


    function onChange1(ev) {
        const {name, value} = ev.target;
        setValue1(value)
        if (ev !== '') {
            setIsActive1(true);
          } else {
            setIsActive1(false);
          }
    }
    
    function onChange2(ev) {
        const {name, value} = ev.target;
        setValue2(value)
        if (ev !== '') {
            setIsActive2(true);
          } else {
            setIsActive2(false);
          }
    }

    function onChange3(ev) {
        const {name, value} = ev.target;
        setValue3(value)
        if (ev !== '') {
            setIsActive3(true);
          } else {
            setIsActive3(false);
          }
    }

    function onChange4(ev) {
        const {name, value} = ev.target;
        setValue4(value)
        if (ev !== '') {
            setIsActive4(true);
          } else {
            setIsActive4(false);
          }
    }
    
    function onChange5(ev) {
        const {name, value} = ev.target;
        setValue5(value)
    }

    function onChange6(ev) {
        const {name, value} = ev.target;
        setValue6(value)
    }

    function onChange7(ev) {
        const {name, value} = ev.target;
        setValue7(value)
    }
    
    function onChange8(ev) {
        const {name, value} = ev.target;
        setValue8(value)
    }
    

    function onChange9(ev) {
        const {name, value} = ev.target;
        setValue9(value)
        if (ev !== '') {
            setIsActive9(true);
          } else {
            setIsActive9(false);
          }
    }

    function onChange10(ev) {
        const {name, value} = ev.target;
        setValue10(value)
        if (ev !== '') {
            setIsActive10(true);
          } else {
            setIsActive10(false);
          }
    }
    
    function onChange11(ev) {
        const {name, value} = ev.target.value;
        setValue11(value);
        if (ev !== '') {
            setIsActive11(true);
          } else {
            setIsActive11(false);
          }
    }

    function onChange12(ev) {
        const {name, value} = ev.target;
        setValue12(value)
    }

    function onChange13(ev) {
        const {name, value} = ev.target;
        setValue13(value)
    }


    
    const insertFornecedor = useCallback(() => {
            /*api.post(`insert/${value1}/${value2}/${value3}/${value4}/${value5}/${value6}/${value7}/${value8}/${value9}/${value10}/${value11}/${value12}/${value13}`).then(response => {
                setInsert(response.data)
                
            }).catch(error => console.log(error));
            console.log(api)*/
            
           axios.post('http://192.168.0.62:3333/insert/'+value1+'/'+value2+'/'+value3+'/'+value4+'/'+value5+'/'+value6+'/'+value7+'/'+value8+'/'+value9+'/'+value10+'/'+value11+'/'+value12+'/'+value13+'')
            .then(response => console.log(response))
            .catch(err => alert('Cadastro Não Realizado'));
    }, 
    [value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13]);
    //console.log([value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13])
    
    const [selectrevista, setSelectrevista] = useState([])

    useEffect(() => {
        axios.get('http://192.168.0.62:3333/selectrevista/')
        .then(response => { setSelectrevista(response.data)
        })   
    }, 
    []);

    
    return (
        <React.Fragment>
        <div>
        <MenuSuperior />            
        </div>
        <div className="cadastro">
            <h1 className="titulo">Cadastro de Fornecedores ERP</h1>
            <Form>
                <Row>
                    <Col sm={2}>
                        <FormGroup className="codigo">
                            <Label for="codigo" className={ isActive1 ? "Active" : ""} >Código</Label>
                            <Input type="text" id="codigo" onChange={onChange1}/>
                        </FormGroup>
                    </Col> 
                    <Col sm={6}>
                        <FormGroup className="nome">
                            <Label for="nome" className="labelnome" className={ isActive2 ? "Active" : ""} >Nome</Label>
                            <Input type="text" id="nome"  onChange={onChange2} />
                        </FormGroup>
                    </Col> 
                    <Col sm={4}>
                        <FormGroup className="prinome">
                            <Label for="prinome" className={ isActive3 ? "Active" : ""} >Primeiro Nome</Label>
                            <Input type="text" id="prinome"   onChange={onChange3} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <FormGroup className="comissao">
                            <Label for="comissao" className={ isActive4 ? "Active" : ""} >Comissão</Label>
                            <Input type="text" id="comissao"   onChange={onChange4} />
                        </FormGroup>
                    </Col>
                    <Col sm={2}>
                        <FormGroup className="seguimento">
                            <Label for="seguimento" className="seguimento">Seguimento</Label>
                            <Input type="select" id="seguimento" onChange={onChange5}>
                                <option value='0'>SELECIONE OPÇÃO</option>
                                <option value='1'>MODINHA</option>
                                <option value='2'>PLUS SIZE</option>
                                <option value='10'>INFANTIL</option>
                            </Input>
                        </FormGroup >
                    </Col>
                    <Col sm={2}>
                        <FormGroup className="seguimentogestao">
                            <Label for="seguimentogestao" className="seguimentogestao">Seguimento Gestão</Label>
                            <Input type="select" id="seguimentogestao" onChange={onChange6}>
                                <option value='0'>SELECIONE OPÇÃO</option>
                                <option value='1'>MODINHA</option>
                                <option value='2'>PLUS SIZES</option>
                                <option value='3'>JEANS</option>
                                <option value='4'>ACESSORIOS</option>
                                <option value='5'>CAMISARIA</option>
                                <option value='6'>FITNESS</option>
                                <option value='7'>PROMOÇÃO</option>
                                <option value='8'>BRINDE</option>
                                <option value='10'>INFANTIL</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col sm={2}>
                        <FormGroup className="revistaparalelo">
                            <Label for="revistaparalelo" className="revistaparalelo">Revista/Paralelo</Label>
                            <Input type="select" id="revistaparalelo" onChange={onChange7}>
                                <option value=''>SELECIONE OPÇÃO</option>
                                <option value='0'>REVISTA</option>
                                <option value='1'>PARALELO</option>
                            </Input>
                            
                        </FormGroup>
                    </Col>
                    <Col sm={2}>
                        <FormGroup className="revista">
                            <Label for="revista" className="revista">Revista</Label>
                            <Input type="select" id="revista"  onChange={onChange8}>
                                <option value='0'>SELECIONE OPÇÃO</option>
                            {selectrevista.map(selectrevista => (
                            
                                <option key={selectrevista.rev_num_rev} value={selectrevista.rev_num_rev} > {selectrevista.rev_nom}  </option>
                            
                            ))} 
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col sm={2}>
                        <FormGroup className="acrescimo">
                            <Label for="acrescimo" className={ isActive9 ? "Active" : ""} >Acrescimo</Label>
                            <Input type="text" id="acrescimo"   onChange={onChange9} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <FormGroup className="vinculo">
                            <Label for="vinculo" className={ isActive10 ? "Active" : ""} >Vinculo</Label>
                            <Input type="text" id="vinculo"  onChange={onChange10} />
                        </FormGroup>
                    </Col>
                    <Col sm={2}>
                        <FormGroup className="cpfcnpj">
                            <Label for="cpfcnpj" className={ isActive11 ? "Active" : ""} >CPF/CNPJ</Label>
                            <Input id="cpfcnpj"  placeholder=" " onChange={onChange11} />
                        </FormGroup>
                    </Col>
                    <Col sm={2}>                 
                        <FormGroup className="Grupo">
                            <Label for="grupo" className="grupo">Grupo</Label>
                            <Input type="select" id="grupo" onChange={onChange12}>
                                <option value='0'>SELECIONE OPÇÃO</option>
                                <option value='2'>OUTROS</option>
                                <option value='1'>FASHION CLUB</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={1}>
                        <FormGroup check className="Ativo">
                            <Label check>
                                <Input type="checkbox" value={1} onChange={onChange13} />{' '}
                                    ATIVO
                            </Label>
                        </FormGroup>
                    </Col>
                </Row> 
                <Row>
                    <Col sm={3}>
                        <Button id="salvar" className="Salvar" onClick={insertFornecedor} type="submit">Salvar</Button>
                    </Col>
                </Row>
            </Form>
        </div>
        </React.Fragment>
    );
}

export default CadastroFornecedor;