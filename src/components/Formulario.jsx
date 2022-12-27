import { Button, Col, Form, Row } from "react-bootstrap"
import useCategorias from "../hooks/useCategorias"


export const Formulario = () => {

    const {categorias} = useCategorias();

    return (
        <Form>
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="nombre">Nombre Bebidas</Form.Label>
                        <Form.Control
                            id="nombre"
                            type="text"
                            placeholder="Ej: Tequila, Vodka, etc"
                            name="nombre"></Form.Control>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Categoria Bebida</Form.Label>
                        <Form.Select
                            id="categoria"
                            name="categoria">
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
                        className="w-100"
                    >
                        Buscar Bebidas
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}
