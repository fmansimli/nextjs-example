import { useState } from "react";

import useSWR from "swr";
import useSWRMutation from "swr/mutation";

import { MyButton, MyInput } from "@/components/ui";
import { TrashIcon } from "@heroicons/react/24/solid";

import * as todoServices from "@/_features/elements/services/todos.service";

const Page = () => {
  const { data, isLoading, error, mutate } = useSWR("/api/v1/todos");
  const { trigger } = useSWRMutation("/api/v1/todos", todoServices.createTodo);
  const [title, setTitle] = useState("");

  const dragStartHandler = (e: React.DragEvent) => {};

  const dragOverHandler = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const dropHandler = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const newTodo = { _id: Date.now(), title, completed: false };
    setTitle("");

    try {
      await trigger(newTodo, {
        revalidate: false,
        optimisticData: [...data.todos, newTodo],
        rollbackOnError: true,
        populateCache: true
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodoHandler = async (id: number) => {
    try {
      const _data = await mutate(todoServices.deleteTodo(id));
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
        {data.todos?.map((todo: any) => (
          <div
            draggable
            onDragStart={dragStartHandler}
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
        className="flex-1 border-2 border-dashed"
        onDragOver={dragOverHandler}
        onDrop={dropHandler}></div>
    </div>
  );
};

export default Page;
