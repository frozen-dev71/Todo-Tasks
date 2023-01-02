import {
  VStack,
  HStack,
  Input,
  Button,
  useToast,
  Textarea,
  Box,
  useColorMode,
  Checkbox,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { EditTodo } from "../App";

export default function AddTodo({ handleAddTodo, handleUpdateTodo }) {
  // global state
  const [editTodo] = useContext(EditTodo);

  // all state
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [priority, setPriority] = useState(false);

  //chakra ui
  const { colorMode } = useColorMode();
  const toast = useToast();

  // edit data
  useEffect(() => {
    setTitle(editTodo.title);
    setDetail(editTodo.detail);
    setPriority(editTodo.priority || false);
  }, [editTodo]);

  // Form submit
  const onSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!title) {
      toast({
        position: "bottom",
        title: "No task",
        status: "error",
        duration: 2000,
        isClosable: true,
      });

      return;
    }

    // create todo
    const todo = {
      id: !Object.keys(editTodo).length ? nanoid() : editTodo.id,
      title,
      detail,
      priority,
    };

    // add or update
    if (!Object.keys(editTodo).length) {
      handleAddTodo(todo);
    } else {
      handleUpdateTodo(todo);
    }

    // reset
    setTitle("");
    setDetail("");
    setPriority(false);
  };

  return (
    <Box
      p="4"
      marginBottom="1.2rem !important"
      w="100%"
      borderRadius="xl"
      boxShadow="md"
      border="2px"
      borderColor={colorMode === "light" ? "gray.100" : "gray.600"}
    >
      <form onSubmit={onSubmit}>
        <VStack my="4">
          <Input
            type="text"
            variant="filled"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            variant="filled"
            placeholder="Task description"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
          <HStack w="100%" justifyContent="space-between">
            <Checkbox
              color="red.500"
              colorScheme="red"
              fontWeight="bold"
              isChecked={priority || false}
              onChange={(e) => setPriority(e.target.checked)}
            >
              High Priority
            </Checkbox>
            <Button
              type="submit"
              size="sm"
              colorScheme={!Object.keys(editTodo).length ? "teal" : "green"}
              alignSelf="flex-end"
            >
              {!Object.keys(editTodo).length ? "Add Task" : "Update Task"}
            </Button>
          </HStack>
        </VStack>
      </form>
    </Box>
  );
}
