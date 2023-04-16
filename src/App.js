import React ,{useState}from 'react';
import Todos from "./components/Todos";
import Header from "./components/Header";
import {  DarkModeProvider } from "./context/DarkModeContext";
const filters = ['all', 'active', 'completed'];
export default function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <DarkModeProvider>
        <Header filters={filters} filter={filter} onFilterChange={setFilter} />
        <Todos filter={filter} />
      </DarkModeProvider>
    </>
  );
}

