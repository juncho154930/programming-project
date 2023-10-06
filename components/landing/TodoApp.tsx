import React, { useState } from "react";

interface ToDoItem {
  id: number;
  value: string;
  completed: boolean;
}

const ToDo: React.FC = () => {
  const [items, setItems] = useState<ToDoItem[]>([
    { id: 0, value: "Write a React app", completed: false },
    { id: 1, value: "Publish some content", completed: false },
  ]);
  const [newItem, setNewItem] = useState<string>("");

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem) {
      const newItemObject: ToDoItem = {
        id: items.length,
        value: newItem,
        completed: false,
      };
      setItems([...items, newItemObject]);
      setNewItem("");
    }
  };

  const completeItem = (id: number) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, completed: true } : item
    );
    setItems(updatedItems);
  };

  const removeItem = (id: number) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-8">
      <h1 className="text text-lg font-bold mb-4">React To-Do App</h1>

      <div className="bg-white shadow-md rounded overflow-hidden">
        <div className="px-6 pt-6">
          <div className="mb-6">
            <h2 className="text-gray-700 text-sm font-bold mb-2">
              To-Do Items
            </h2>
            <ul>
              {items.map((item) => (
                <li
                  key={item.id}
                  className="border-t border-t-1 border-grey-600 py-4 flex items-center justify-between"
                >
                  <span className="block mr-auto">{item.value}</span>
                  {!item.completed && (
                    <button
                      className="bg-green-500 hover:bg-green-700 border border-green-500 hover:border-green-700 text-white rounded px-1 ml-auto ml-1 py-1 flex"
                      onClick={() => completeItem(item.id)}
                    >
                      Mark as Completed
                    </button>
                  )}
                  <button
                    className="bg-red-500 hover:bg-red-700 border border-red-500 hover:border-red-700 text-white rounded px-1 py-1 ml-1 flex"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove Item
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form
          onSubmit={addItem}
          className="bg-gray-100 border-t border-t-1 border-color-grey mt-6 px-6 pt-6 pb-8"
        >
          <label
            htmlFor="item"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Add To-Do Item
          </label>

          <div className="flex">
            <input
              type="text"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="item"
              name="item"
              placeholder="Pick up groceries"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <input
              type="submit"
              value="Add Item"
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 ml-2 rounded"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ToDo;
