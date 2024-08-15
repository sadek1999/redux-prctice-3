
import { useAppSelector } from "@/redux/hooks";
import AddFilter from "./AddFilter";
import AddTodoModel from "./AddTodoModel";

import TodoCard from "./TodoCard";
import { useGetTodosQuery } from "@/redux/Api/api";


const TodoContainer = () => {
  const {data,error ,isLoading}=useGetTodosQuery(undefined)
  console.log(data)

  const {todos}=useAppSelector((state)=>state.todo)
  return (
    <div>
      <div className="flex justify-between mb-2 ">
       
        <AddTodoModel/>
        <AddFilter/>
       
       
      </div>
      <div className="bg-primary-gradient rounded-lg w-full h-full p-2 ">
        <div className=" bg-white rounded-lg p-5 ">
        
          {/* {todos?.map((items)=><TodoCard  title={items.title} description={items.description} id={items.id} isCompleted={items.isCompleted} />)} */}
        
          {todos?.map((items)=><TodoCard  {...items} />)}
        
        </div>
        
      </div>
    </div>
  );
};

export default TodoContainer;
