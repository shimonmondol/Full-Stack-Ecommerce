import { ThemeProvider } from "@/components/theme-provider";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Featherproduct from "./components/Featherproduct";
const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Banner />
      <Categories />
      <Featherproduct />
    </ThemeProvider>
  );
};

export default App;
