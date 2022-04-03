import TodoList from "./components/todoList";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./style.css";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        {" "}
        <TodoList />
      </ChakraProvider>
    </Provider>
  );
}
export default App;
