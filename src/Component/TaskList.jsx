import PropTypes from "prop-types";
const TaskList = ({
  todo,
  description,
  deleteTodo,
  id,
  handleForm,
  status,
  handleEdit,
}) => {
  const handleCompleted = (e) => {
    handleForm(e.target.value, id);
  };

  return (
    <>
      <div className="flex justify-center my-4 ">
        <div className="w-full mx-2 h-full sm:w-[350px]  bg-[#1b1b1b] flex flex-col gap-4 py-4 sm:gap-6 rounded-lg px-4">
          <h1 className="text-[#EEEEEE] font-medium text-lg sm:font-bold sm:text-xl">
            Task-Name : {todo}
          </h1>
          <h2 className="text-[#EEEEEE] font-medium text-lg">
            Description : {description}
          </h2>
          <p>
            <select
              className="px-3 py-2 sm:py-2 rounded-lg bg-[#373A40] border-gray-800 text-gray-200 font-bold"
              onChange={handleCompleted}
            >
              {status === "notcompleted"
                ? [
                    <option value="notcompleted" key={"notcompleted"}>
                      Not Completed
                    </option>,
                    <option value="completed" key={"completed"}>
                      Completed
                    </option>,
                  ]
                : [
                    <option value="completed" key={"completed"}>
                      Completed
                    </option>,
                    <option value="notcompleted" key={"notcompleted"}>
                      Not Completed
                    </option>,
                  ]}
            </select>
          </p>
          <div className="flex justify-end ">
            <button
              className="px-5 py-2 bg-[#DC5F00] mx-3 rounded-lg text-black font-bold shadow-2xl "
              onClick={() => {
                handleEdit(id);
              }}
            >
              Edit
            </button>
            <button
              className="px-4 py-2 bg-red-800 rounded-lg text-black font-bold shadow-2xl"
              onClick={() => {
                deleteTodo(id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

TaskList.propTypes = {
  todo: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
  deleteTodo: PropTypes.func,
  handleForm: PropTypes.func,
  status: PropTypes.string,
  handleEdit: PropTypes.func,
};

export default TaskList;
