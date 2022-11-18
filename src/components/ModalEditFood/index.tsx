import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { useRef } from 'react';
import { FoodAttributes } from '../Food';

interface ModalEditFoodProps {
  setIsOpen: () => void;
  handleUpdateFood: (food: FoodAttributes) => void;
  isOpen: boolean;
  editingFood?: FoodAttributes  
}

export default function ModalEditFood (props: ModalEditFoodProps) {  

  const {handleUpdateFood, setIsOpen, isOpen, editingFood} = props

  const handleSubmit = async (food: FoodAttributes) => {    

    handleUpdateFood(food);
    setIsOpen();
  };

  const formRef = useRef(null)

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
          <h1>Editar Prato</h1>
          <Input name="image" placeholder="Cole o link aqui"/>

          <Input name="name" placeholder="Ex: Moda Italiana"/>
          <Input name="price" placeholder="Ex: 19.90"/>

          <Input name="description" placeholder="Descrição"/>

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
  )
}