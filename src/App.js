import React ,{useState}from 'react';
import Todos from "./components/Todos";
import Header from "./components/Header";
const filters = ['all', 'active', 'completed'];
export default function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
    <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <Todos filter={filter} />
    </>
  );
}

