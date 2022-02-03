import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaTrash, FaPen, FaCheck } from "react-icons/fa";

const TodoList = ({ todos, deleteTodo, modifyTodo }) => {
  if (!todos.length) {
    return (
      <Badge colorScheme="green" p={4} borderRadius="md">
        Nenhuma tarefa !!!
      </Badge>
    );
  }

  const [todosToEdit, setTodosToEdit] = useState([]);

  const isTodoToEdit = (id) => todosToEdit.some((todo) => todo.id === id);

  const handleEditClick = (id, body) => {
    if (!isTodoToEdit(id)) {
      setTodosToEdit([...todosToEdit, { id, body }]);
      return;
    }
    setTodosToEdit(todosToEdit.filter((todo) => todo.id !== id));
    modifyTodo(id, todosToEdit.find((todo) => todo.id === id).body);
  };

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.300"
      borderWidth={0.5}
      borderRadius="lg"
      p={4}
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map(({ id, body }) => (
        <HStack>
          {isTodoToEdit(id) ? (
            <Input
              onChange={(e) =>
                setTodosToEdit(
                  todosToEdit.map((todo) =>
                    todo.id === id ? { id, body: e.target.value } : todo
                  )
                )
              }
              value={todosToEdit.find((todo) => todo.id === id).body}
              variant="flushed"
              placeholder={body}
            />
          ) : (
            <Text>{body}</Text>
          )}
          <Spacer />
          <IconButton
            icon={isTodoToEdit(id) ? <FaCheck /> : <FaPen />}
            isRound={true}
            onClick={() => handleEditClick(id, body)}
          ></IconButton>
          <IconButton
            icon={<FaTrash />}
            isRound={true}
            onClick={() => deleteTodo(id)}
          ></IconButton>
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList;
