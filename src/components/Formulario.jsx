import { useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas";
import useCategorias from "../hooks/useCategorias"


export const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const [alerta, setAlerta] = useState('');

    const {categorias} = useCategorias();

    const {consultarBebida} = useBebidas();

    const handleSubmit = (event) => {
        event.preventDefault();

        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios');
            return
        }

        setAlerta('')
        consultarBebida(busqueda)

    }

    

    return (
        <Form
            onSubmit={handleSubmit}
        >
            {
                alerta && <Alert variant="danger" className="text-center">{alerta}</Alert>
            }
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="nombre">Nombre Bebidas</Form.Label>
                        <Form.Control
                            id="nombre"
                            type="text"
                            placeholder="Ej: Tequila, Vodka, etc"
                            name="nombre"
                            value={busqueda.nombre}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name] : e.target.value
                            })}
                        >
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Categoria Bebida</Form.Label>
                        <Form.Select
                            id="categoria"
                            name="categoria"
                            value={busqueda.categoria}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name] : e.target.value
                            })}    
                        >
                                <option value="">--Selecciona Categoria--</option>
                                {
                                    categorias.map(categoria => (
                                        <option
                                            key={categoria.strCategory}
                                            value={categoria.strCategory}
                                        >{categoria.strCategory}
                                        </option>
                                    ))
                                }
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="justify-content-end">
                <Col md={3}>
                    <Button
                        variant='danger'
                        className="w-100 mb-4"
                        type="submit"
                    >
                        Buscar Bebidas
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}
