import { useState } from "react";
import useSWR from "swr";

import { MyButton, MyInput } from "@/components/ui";
import { TrashIcon } from "@heroicons/react/24/solid";

import * as todoServices from "@/_features/elements/services/todos.service";
import { http } from "@/http/http";

const Page = () => {
  const { data, isLoading, error, mutate } = useSWR("/todos");
  const [title, setTitle] = useState("");
  const [random, setRandom] = useState("");

  const dragStartHandler = (e: React.DragEvent, _id: string) => {
    e.dataTransfer.setData("_id", _id);
  };

  const dragOverHandler = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const dropHandler = async (e: React.DragEvent) => {
    e.preventDefault();
    const _id = e.dataTransfer.getData("_id");

    const todo = data.todos.find((t: any) => t._id === _id);
    todo.completed = true;
    setRandom(Math.random().toString());

    try {
      await http.patch("/api/v1/todos/" + _id, {
        title: todo.title,
        completed: true
      });
    } catch (error) {
      setTimeout(() => {
        todo.completed = false;
        setRandom(Math.random().toString());
      }, 500);
    }
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const newTodo = { _id: Date.now(), title, completed: false };
      setTitle("");

      await mutate(todoServices.addTodo(newTodo), {});
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodoHandler = async (id: number) => {
    try {
      await mutate(todoServices.deleteTodo(id));
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-full  w-full items-center justify-center">
        <span className="text-xl text-red-800">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full  w-full items-center justify-center">
        <span className="text-xl text-red-800">Error!</span>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full gap-5 p-5">
      <div className="flex flex-col">
        <form onSubmit={submitHandler}>
          <div className="flex flex-col gap-5">
            <MyInput
              id="title"
              label="todo:"
              placeholder="add todo..."
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <MyButton type="submit">add</MyButton>
          </div>
        </form>
      </div>
      <div className="flex flex-1 flex-col gap-5 border-2 border-dashed px-4 py-4">
        {data?.todos
          ?.filter((t: any) => !t.completed)
          .map((todo: any) => (
            <div
              draggable
              onDragStart={(e) => dragStartHandler(e, todo._id)}
              className="flex items-center justify-between border px-3 py-3 shadow-light"
              key={todo._id}>
              <span>{todo.title}</span>
              <button onClick={() => deleteTodoHandler(todo._id)}>
                <TrashIcon className="h-4 w-4 text-blue-500" />
              </button>
            </div>
          ))}
      </div>
      <div
        className="flex flex-1 flex-col gap-5 border-2 border-dashed px-4 py-4"
        onDragOver={dragOverHandler}
        onDrop={dropHandler}>
        {data?.todos
          ?.filter((t: any) => t.completed)
          .map((todo: any) => (
            <div
              draggable
              onDragStart={(e) => dragStartHandler(e, todo._id)}
              className="flex items-center justify-between border px-3 py-3 shadow-light"
              key={todo._id}>
              <span>{todo.title}</span>
              <button onClick={() => deleteTodoHandler(todo._id)}>
                <TrashIcon className="h-4 w-4 text-blue-500" />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page;
