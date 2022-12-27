import { Button, Card, Col } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"



export const Bebida = ({bebida}) => {

    const {handleModalClick} = useBebidas()
    return (
        <Col 
        md={6} lg={3}
        >
            <Card className='mb-4'>
                <Card.Img
                    variant="top"
                    src={bebida.strDrinkThumb}
                    alt={`Imagen de bebida ${bebida.strDrink}`}
                />

                <Card.Body>
                    <Card.Title>{bebida.strDrink}</Card.Title>
                    {/* <Card.Text>Algo más</Card.Text> */}
                    <Button
                        className="w-100"
                        variant="info"
                        onClick={() => {
                            handleModalClick()
                        }}
                    >Ver receta</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
