import "./MaxCoinsDialog.css";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";
import { JSX } from "react";
import { selectedCoinsActions } from "../../../Redux/SelectedCoinsSlice";
import { notify } from "../../../Utils/Notify";

interface MaxCoinsDialogProps {
  open: boolean;          // controls dialog visibility
  pendingCoinSymbol: string; // the coin symbol that was clicked
  onClose: () => void;    // function to close the dialog
}

export function MaxCoinsDialog(props: MaxCoinsDialogProps): JSX.Element {

  const dispatch = useDispatch();

  // Read selected coins from Redux (global state)
  const selectedCoins = useSelector(
    (state: AppState) => state.selectedCoins
  );
  // Remove and Replace coin
    function handleReplace(coinIdToRemove: string): void {
      // First remove the chosen coin
      dispatch(selectedCoinsActions.removeSelectedCoin(coinIdToRemove));
      // Then immediately add the coin the user wanted
      dispatch(selectedCoinsActions.addSelectedCoin(props.pendingCoinSymbol));
      
      notify.success(`${props.pendingCoinSymbol} is now added successfully!`);
      
      props.onClose();
    }
  return (
    <Dialog open={props.open} onClose={() => {}}>
      {/* We disable default close behavior to enforce coin removal */}

      <DialogTitle>
        Maximum Coins Reached (5)
      </DialogTitle>

      <DialogContent>
        <p>
          You can select up to 5 coins for comparison.
          To add a new coin, please remove one:
        </p>

        <List>
          {selectedCoins.map(coin => (
            <ListItem
              key={coin}
              secondaryAction={
                <IconButton
                  edge="end"
                  onClick={() => handleReplace(coin)}
                >
                  <CloseIcon />
                </IconButton>
              }
            >
              <ListItemText primary={coin.toUpperCase()} />
            </ListItem>
          ))}
        </List>
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          color="error"
          onClick={props.onClose}
        >
          CLOSE
        </Button>
      </DialogActions>
    </Dialog>
  );
}
