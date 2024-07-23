import PropTypes from "prop-types";
import { motion } from "framer-motion";
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
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            delay: 0.2,
            duration: 1,
            type: "spring",
            damping: 10,
            bounce: 2,
            stiffness: 500,
          },
        }}
        whileHover={{
          scale: 1.05,
        }}
        viewport={{
          once: true,
        }}
        className="flex justify-center my-4 "
      >
        <motion.div className=" cursor-pointer w-full mx-2 h-full sm:w-[350px]  bg-[#1b1b1b] flex flex-col gap-4 py-4 sm:gap-6 rounded-lg px-4">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: "easeIn",
              type: "spring",
              stiffness: 60,
            }}
            className="text-[#EEEEEE] font-medium text-lg sm:font-bold sm:text-xl"
          >
            Task-Name : {todo}
          </motion.h1>
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: "easeIn",
              type: "spring",
              stiffness: 60,
            }}
            className="text-[#EEEEEE] font-medium text-lg"
          >
            Description : {description}
          </motion.h2>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              delay: 1.5,
              ease: "easeIn",
              type: "spring",
              stiffness: 60,
            }}
          >
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
          </motion.p>
          <div className="flex justify-end ">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                delay: 1.5,
                ease: "easeIn",
                type: "spring",
                stiffness: 60,
              }}
            >
              <motion.button
                whileTap={{
                  scale: 0.9,
                }}
                className="px-5 py-2 bg-[#DC5F00] mx-3 rounded-lg text-black font-bold shadow-2xl "
                onClick={() => {
                  handleEdit(id);
                }}
              >
                Edit
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                delay: 2,
                ease: "easeIn",
                type: "spring",
                stiffness: 60,
              }}
            >
              <motion.button
                whileTap={{
                  scale: 0.9,
                }}
                className="px-4 py-2 bg-red-800 rounded-lg text-black font-bold shadow-2xl"
                onClick={() => {
                  deleteTodo(id);
                }}
              >
                Delete
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
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
