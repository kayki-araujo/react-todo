import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { AddTodo, TodoList } from "./components";

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const { colorMode, toggleColorMode } = useColorMode();

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const modifyTodo = (id, body) => {
    setTodos(todos.map((todo) => (todo.id === id ? { id, body } : todo)));
  };

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        aria-label="Color Mode Toggle"
        isRound={true}
        size="lg"
        alignSelf="end"
        onClick={toggleColorMode}
      />
      <Heading
        pb={4}
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Tarefas
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} modifyTodo={modifyTodo}/>
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
};

export default App;
