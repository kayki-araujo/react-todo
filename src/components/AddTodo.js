import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { nanoid } from "nanoid";

const AddTodo = ({ addTodo }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({ id: nanoid(), body: inputText });
    setInputText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt={8}>
        <Input
          variant="filled"
          placeholder="Tarefa..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button colorScheme="pink" px={8} type="submit">
          Adicionar tarefa
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
