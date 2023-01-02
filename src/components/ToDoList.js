import { EditTodo } from "../App";
import { useContext } from "react";
import {
  Box,
  VStack,
  HStack,
  Stack,
  Text,
  IconButton,
  Badge,
  Divider,
} from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function TodoList({ todos, handleRemoveTodo }) {
  const [, setEditTodo] = useContext(EditTodo); // global state

  // get data for edit
  const handleEditTodo = (id) => {
    setEditTodo(todos.find((todo) => todo.id === id) || {});
  };

  //if there is no task
  if (!todos.length) {
    return (
      <Badge p="5" colorScheme="green" borderRadius="lg">
        No Task Available!!!
      </Badge>
    );
  }

  return (
    <Box minW="100%" overflowY="auto" className="editScrollY">
      <VStack p="1" minW="100%" alignItems="stretch" maxH="55vh">
        {todos.map(function (todo) {
          return (
            <Stack
              key={todo.id}
              p="1"
              borderRadius="lg"
              border="1px"
              borderColor={todo.priority ? "red.300" : "gray.300"}
            >
              <Text
                as="h3"
                fontWeight="bold"
                textTransform="capitalize"
                color={todo.priority ? "red.500" : ""}
              >
                {todo.title}
              </Text>
              {todo.detail && (
                <Divider marginTop="4px !important" borderColor="gray.300" />
              )}
              <Text marginTop="4px !important">{todo.detail}</Text>
              <HStack
                marginTop="0px !important"
                textAlign="right"
                borderRadius="lg"
                padding="1"
                w="100%"
                justifyContent="space-between"
              >
                <Badge
                  colorScheme={todo.priority ? "red" : "gray"}
                  px="1"
                  borderRadius="md"
                >
                  {todo.priority ? "High" : "Normal"}
                </Badge>
                <HStack spacing="1">
                  <IconButton
                    color="blue.500"
                    icon={<FaEdit />}
                    onClick={() => handleEditTodo(todo.id)}
                    size="sm"
                  />
                  <IconButton
                    color="red.600"
                    icon={<FaTrash />}
                    onClick={() => handleRemoveTodo(todo.id)}
                    size="sm"
                  />
                </HStack>
              </HStack>
            </Stack>
          );
        })}
      </VStack>
    </Box>
  );
}
