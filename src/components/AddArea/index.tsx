import {useState, KeyboardEvent} from 'react'
import { AddAreas,AppContainer} from "./styles";

type Props = {
    onEnter: (taskName: string) => void;
}

const AddArea = ({onEnter}:Props) => {
    const [input, setInput] = useState('')

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.keyCode === 13) {
            onEnter(input)
            setInput('')
        }
    }
  return (
    <AppContainer>
        <div className='image'> + </div>
        <AddAreas>
            <input type="text" placeholder="Add a new item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={handleKeyUp}
            />
        </AddAreas>

    </AppContainer>
  )
}

export default AddArea