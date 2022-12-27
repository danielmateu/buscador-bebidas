import { Image, Modal } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"



export const ModalBebida = () => {

    const { modal, handleModalClick, receta, setReceta, cargando } = useBebidas()

    console.log(receta);

    const mostrarIngredientes = () => {
        let ingredientes = []

        for (let i = 1; i < 16; i++) {
            if (receta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes;
    }
    return (
        !cargando && (
            <Modal show={modal} onHide={() => {
                handleModalClick()
                // setReceta({})
            }}>

                <Image
                    src={receta.strDrinkThumb}
                    alt={`Imagen receta ${receta.strDrink}`}
                />
                <Modal.Header>
                    <Modal.Title>{receta.strDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="p-3">
                        <h3>Instrucciones</h3>
                        {receta.strInstructions}
                        <h4>Ingredientes y cantidades</h4>
                        {mostrarIngredientes()}

                    </div>
                </Modal.Body>

            </Modal>
        )
    )
}
