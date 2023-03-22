import React, { useEffect, useRef, useState } from 'react'
import Todo from './models/todo.model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

import "./styles.css";


type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo:React.FC<Props> = ({todo, todos, setTodos}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])

  const handleDone = (id: number) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone } : todo))
  }

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((item) => item.id !== id))
  }

  const handleEdit = () => {
    if(!edit && !todo.isDone) {
      setEdit(!edit);
    }
  }

  const onChangeTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodo(event.target.value)
  }

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    setTodos((prev) => prev.map((item) => item.id === todo.id ? {...item, todo: editTodo} : item))


    //next line is not really needed!!
    //it was jus to test
    inputRef.current?.blur();
    setEdit(false);

    
  } 

  return (
    <form className='todos__single' onSubmit={submitHandler}>
      {
        edit ?  (
          <input className='todos__single--text' value={editTodo} 
          onChange={onChangeTodo} ref={inputRef}
          />
        ) : 
        (
          todo.isDone ? (<s className='todos__single--text'>{todo.todo}</s>) : 
          (<span className='todos__single--text'>{todo.todo}</span>)
          
        )
      }
    
      <div>
        <span className="icon" onClick={() => handleEdit()}>
        <AiFillEdit/>
        </span>
        <span className="icon">
        <AiFillDelete onClick={() => handleDelete(todo.id)}/>
        </span>
        <span className="icon">
          <MdDone onClick={() => handleDone(todo.id)}/>
        </span>
      </div>
    </form>
  )
}

export default SingleTodo