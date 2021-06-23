import { useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useQuery } from "urql";
import TodoContext from "./contexts/TodoContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    newTodoField: {
      flex: "1",
    },
    loading: {
      position: "absolute",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      margin: "auto",
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
  const { isEdited } = useContext(TodoContext);

  if (result.fetching) return <CircularProgress className={classes.loading} />;
  if (result.error) return <p>Oh no... {result.error.message}</p>;

  return (
    <>
      <List className={classes.root} disablePadding={true}>
        {result.data.tasks.map((task: Task) => {
          const labelId = `checkbox-list-label-${task.id}`;

          return (
            <ListItem key={task.id} role={undefined} button>
              <ListItemText id={labelId} primary={task.title} />
              {(() => {
                if (isEdited) {
                  return (
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="comments">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  );
                }
              })()}
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
    </>
  );
};

export default Todos;
