import { useQuery } from "urql";

const TodosQuery = `
  query {
    tasks {
      id
      title
    }
  }
`;

type Task = {
  id: number;
  title: string;
};

export const Todos = () => {
  const [result] = useQuery({ query: TodosQuery });

  if (result.fetching) return <p>Loading...</p>;
  if (result.error) return <p>Oh no... {result.error.message}</p>;

  return (
    <ul>
      {result.data.tasks.map(({ id, title }: Task) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};

export default Todos;
