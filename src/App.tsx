import { AppContainer,Area,Header } from "./App.styles";
import { useState } from "react";
import { Item } from "./types/Item";
import ListItem from "./components/ListItem";
import AddArea from "./components/AddArea";
function App() {
  const[list, setList] = useState<Item[]>([
    {id: 1, title: 'Buy bread', done: false},
    {id: 2, title: 'Buy butter', done: true}

  ]);
  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      title: taskName,
      done: false
    });
    setList(newList);
  }


  return (
    <AppContainer>
      <Area>
        <Header>
          Welcome to the ToDoList
        </Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} setList={setList} />
        ))}

      </Area>
    </AppContainer>
  );
}

export default App;
