import React, { useState } from "react";

export const Index = () => {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState({
    text: "",
    id: "",
  });
  const [editingItem, seteditingItem] = useState({
    id: "",
    isEditing: false,
  });
  const changeMessage = (e) => {
    setMessage({
      ...message,
      text: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      text: message.text,
      id: new Date().getTime().toString(),
    };
    setList([...list, newTodo]);
    setMessage({
      text: "",
      id: "",
    });
  };
  const handleDelete = (id) => {
    let newTodos = list.filter((eachItem) => {
      return eachItem.id !== id;
    });
    setList(newTodos);
  };
  const changeEditState = (id) => {
    seteditingItem({
      ...editingItem,
      id: id,
      isEditing: true,
    });
    let editableItem = list.find((eachItem) => eachItem.id === id);
    setMessage({
      ...message,
      text: editableItem.text,
      id: editableItem.id,
    });
  };
  const handleEdit = (e) => {
    e.preventDefault();
    let newTodos = list.map((eachItem) => {
      if (eachItem.id === editingItem.id) {
        return {
          text: message.text,
          id: editingItem.id,
        };
      } else {
        return eachItem;
      }
    });
    setList(newTodos);
    setMessage({
      text: "",
      id: "",
    });
    seteditingItem({
      id: "",
      isEditing: false,
    });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="massage"
          id="message"
          placeholder="enter some text"
          value={message.text}
          onChange={changeMessage}
        />
        {editingItem.isEditing ? (
          <button type="submit" onClick={handleEdit}>
            Edit
          </button>
        ) : (
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
        )}
      </form>
      {list.length === 0 && <h4>There is no items in the list</h4>}
      <div className="items">
        <ul>
          {list.map((eachItem) => {
            const { text, id } = eachItem;
            return (
              <li key={id}>
                <span>{text}</span>
                <button onClick={() => changeEditState(id)}>Edit</button>
                <button onClick={() => handleDelete(id)}>delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Index;
