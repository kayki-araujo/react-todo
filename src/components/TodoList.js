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
          {todosToEdit.includes(id) ? (
            <Input
              onChange={(e) => modifyTodo(id, e.target.value)}
              value={body}
              variant="flushed"
              placeholder={body}
            />
          ) : (
            <Text>{body}</Text>
          )}
          <Spacer />
          <IconButton
            icon={todosToEdit.includes(id) ? <FaCheck /> : <FaPen />}
            isRound={true}
            onClick={() =>
              todosToEdit.includes(id)
                ? setTodosToEdit(todosToEdit.filter((todo) => todo !== id))
                : setTodosToEdit([...todosToEdit, id])
            }
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
