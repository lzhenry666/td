import { useState } from 'react';
import { Container } from './styles';
import { Item } from '../../types/Item';

type Props = {
    item: Item;
    setList: (list: Item[] | ((currentList: Item[]) => Item[])) => void; // Ajuste aqui
};

const ListItem = ({ item, setList }: Props) => {
    const { id, title, done } = item;
    const [isChecked, setIsChecked] = useState(done);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDoneValue = e.target.checked;
        setIsChecked(newDoneValue);

        // Atualiza a lista no componente pai
        setList((currentList: Item[]) => // Ajuste aqui
            currentList.map((listItem: Item) =>
                listItem.id === id ? { ...listItem, done: newDoneValue } : listItem
            )
        );
    };

    return (
        <Container done={isChecked}>
            <div key={id}>
                <label htmlFor="done">{title} - {done.toString()}</label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleOnChange}
                />
            </div>
        </Container>
    );
};

export default ListItem;
