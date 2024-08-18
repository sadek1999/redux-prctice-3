import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { useAppDispatch } from "@/redux/hooks";
import { addTodo } from "@/redux/fetures/todoSlice";
import { useAddTodosMutation } from "@/redux/Api/api";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";

const AddTodoModel = () => {
  const [task, setTesk] = useState("");
  const [Priority,setPriority]=useState('')
  const [description, setDescription] = useState("");

  //  const dispatch =useAppDispatch()
  const [addTodo, { data, isLoading, isError }] = useAddTodosMutation();
  console.log(data, isLoading, isError);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // const randomString = Math.random().toString(36).substring(2, 7);

    const taskDetails = {
      title: task,
      description,
      isCompleted: false,
      Priority,
    };
    addTodo(taskDetails);
    // dispatch(addTodo(taskDetails))
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient ">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Todo
              </Label>
              <Input
                onBlur={(e) => setTesk(e.target.value)}
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
            <div className="">
            <Label htmlFor="username" className="text-right">
               Priority 
              </Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select " />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
              <div className="flex justify-end ">
              <DialogClose asChild >
            <Button type="submit">Save changes</Button>
          </DialogClose>
              </div>
         
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModel;
