import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const TodoList = ({ todos, deleteTodo }) => {
  if (!todos.length) {
    return (
      <Badge colorScheme="green" p={4} borderRadius="md">
        Nenhuma tarefa !!!
      </Badge>
    );
  }

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
      {todos.map((todo) => (
        <HStack>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound={true}
            onClick={() => deleteTodo(todo.id)}
          ></IconButton>
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList;
