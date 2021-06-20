import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useQuery } from "urql";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    newTodoField: {
      flex: "1",
    },
  })
);

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
  const classes = useStyles();
  const [result] = useQuery({ query: TodosQuery });

  if (result.fetching) return <p>Loading...</p>;
  if (result.error) return <p>Oh no... {result.error.message}</p>;

  return (
    <>
      <List className={classes.root} disablePadding={true}>
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem key={value} role={undefined} button>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
        <ListItem>
          <Box pr={2} className={classes.newTodoField}>
            <TextField id="standard-basic" label="New Todo" fullWidth />
          </Box>
          <Button variant="contained" color="primary">
            作成
          </Button>
        </ListItem>
      </List>
      <ul>
        {result.data.tasks.map(({ id, title }: Task) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
