import {
    Dialog,
    DialogContent,
    DialogDescription,
    
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";

const AddTodoModel = () => {
 const [task,setTesk]=useState('')
 const [description,setDescription]=useState('')
 const onSubmit=(e:FormEvent)=>{
    e.preventDefault()
    const taskDetails={
      title:task,
      description

    }
    console.log()
 }

 
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
            onBlur={(e)=>setTesk(e.target.value)}
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
            onBlur={(e)=>setDescription(e.target.value)}
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
       
        <DialogClose asChild>
          <Button type="submit">Save changes</Button>
        </DialogClose>
        </form>
      </DialogContent>

    </Dialog>
  );
};

export default AddTodoModel;
