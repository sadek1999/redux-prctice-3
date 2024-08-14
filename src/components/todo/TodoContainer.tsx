
import AddFilter from "./AddFilter";
import AddTodoModel from "./AddTodoModel";

import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-2 ">
       
        <AddTodoModel/>
        <AddFilter/>
       
       
      </div>
      <div className="bg-primary-gradient rounded-lg w-full h-full p-2 ">
        <div className=" bg-white rounded-lg">
        <TodoCard/>
        <TodoCard/>
        <TodoCard/>
        </div>
        
      </div>
    </div>
  );
};

export default TodoContainer;
