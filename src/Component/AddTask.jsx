import { useState, useEffect } from "react";
import TaskList from "./TaskList";
const data = [];
const AddTask = () => {
  const [todoData, setTodoData] = useState(data);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [id, setId] = useState("");
  const [completed, setCompleted] = useState(false);
  const [filter, setFilter] = useState("all");
  const [editTodo, setEditTodo] = useState(null);
  const deleteTodo = (id) => {
    console.log(id);
    const temp = todoData.filter((val) => {
      return val.id !== id;
    });
    setTodoData(temp);
    localStorage.setItem("todolistlocal", JSON.stringify(temp));
  };
  const updateForm = (selectedValue, id) => {
    console.log(selectedValue, id);
    setTodoData(
      todoData.map((value) => {
        if (value.id === id) {
          value.status = selectedValue;
        }
        console.log(value);
        return value;
      })
    );
  };
  const handleForm = (e) => {
    e.preventDefault();
    setNewTitle("");
    setNewDescription("");
    if (editTodo) {
      let todoList = [
        {
          title: newTitle,
          description: newDescription,
          id: editTodo,
          status: "notcompleted",
        },
      ];
      let updateTodo = [...todoList];
      // updateTodo.push(todoList);
      updateTodo.map((val) => {
        if (val.id === editTodo) {
          updatingEditTodo([val]);
        }
      });
    } else {
      let id = Date.now();
      let todoList = {
        title: newTitle,
        description: newDescription,
        id: id,
        status: "notcompleted",
      };
      setId(id);
      let updateTodo = [...todoData];
      updateTodo.push(todoList);
      setTodoData(updateTodo);
      localStorage.setItem("todolistlocal", JSON.stringify(updateTodo));
    }
  };

  const handleEdit = (id) => {
    setEditTodo(id);
    const data = todoData.find((val) => val.id === id);
    setNewTitle(data.title);
    setNewDescription(data.description);
  };
  const updatingEditTodo = (todo) => {
    console.log(todo);
    const todoObj = todo.find((val) => val.id === editTodo);
    const index = todoData.findIndex((val) => val.id === editTodo);
    const temp = [...todoData];
    temp[index] = todoObj;
    localStorage.setItem("todolistlocal", JSON.stringify(temp));
    setTodoData(temp);
    setEditTodo(null);
  };
  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todolistlocal"));
    if (todo) {
      setTodoData(todo);
    }
  }, []);
  return (
    <div className="bg-[#1b1b1b] py-4 sm:py-16 lg:py-20">
      <div className="bg-[#373A40] mx-4 sm:mx-16 lg:mx-24">
        <div className="font-bold text-center text-3xl sm:text-4xl ">
          <h1 className="pt-8 text-[#EEEEEE]">My ToDo</h1>
        </div>
        <form
          onSubmit={handleForm}
          className="flex flex-col mx-6 justify-center items-center my-10"
        >
          <input
            type="text"
            required
            className="border border-slate-400 py-2 mb-10 w-full rounded-lg px-2 text-lg bg-slate-200 text-gray-700 font-medium shadow-xl sm:w-[450px] lg:w-[550px] lg:px-3 lg:py-3"
            placeholder="ToDo Name"
            name="todo"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            required
            className="border border-slate-400  py-2 mb-8 w-full rounded-lg px-2 text-lg bg-slate-200  text-gray-700 font-medium shadow-xl sm:w-[450px]  lg:w-[550px] lg:px-3 lg:py-3"
            placeholder="ToDo Description"
            name="description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button
            type="submit"
            className="border border-gray-800 w-26 px-3 py-2 rounded-lg bg-[#DC5F00]  text-black font-bold shadow-2xl hover:bg-black hover:text-[#DC5F00]"
          >
            Add ToDo
          </button>
        </form>

        <div className="flex flex-col mx-auto">
          <div>
            {todoData.length >= 1 && (
              <div className="flex flex-col sm:flex-row sm:justify-between ">
                <h2 className="mx-4 my-4 font-bold text-xl text-[#EEEEEE] sm:mt-5 sm:text-2xl lg:ml-[120px] ">
                  My ToDo's
                </h2>
                <p className="mx-4 text-left my-4 sm:align-middle  lg:mr-[120px] ">
                  <span className="text-[#EEEEEE]  text-[17px] sm:text-xl ">
                    Status filter :
                  </span>
                  <select
                    className="mx-1 px-2 py-2 sm:py-2 rounded-lg bg-gray-800 border-gray-800 text-gray-200 font-bold"
                    onChange={(e) => {
                      setFilter(e.target.value);
                    }}
                  >
                    <option value="all">All</option>
                    <option value="notcompleted">Not Completed</option>
                    <option value="completed">Completed</option>
                  </select>
                </p>
              </div>
            )}
          </div>
          <div className="lg:flex lg:flex-row lg:gap-4 justify-center lg:flex-wrap ">
            {todoData.map((val) => {
              if (val.status === filter || filter === "all") {
                return (
                  <TaskList
                    todo={val.title}
                    description={val.description}
                    key={val.id}
                    id={val.id}
                    deleteTodo={deleteTodo}
                    setCompleted={setCompleted}
                    handleForm={updateForm}
                    status={val.status}
                    handleEdit={handleEdit}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
