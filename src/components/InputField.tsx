import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const onHandleAdd = (event: React.FormEvent) => {
    handleAdd(event);
    inputRef.current?.blur();
  };

  return (
    <form className="input" onSubmit={onHandleAdd}>
      <input
        type="input"
        placeholder="Enter Task"
        className="input__box"
        ref={inputRef}
        value={todo}
        onChange={onTodoChange}
      />
      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
