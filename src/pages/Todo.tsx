import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";




const Todo = () => {
    return (
        <>
      
        <Container>
           <p className="font-bold text-3xl text-center">My Todo </p>
           <TodoContainer></TodoContainer>
        </Container>
       
           
        </>
    );
};

export default Todo;