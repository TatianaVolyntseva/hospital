import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const DeleteWindow = (props) => {
  const { whatEdit, 
    openDialogDelete, 
    setOpenDialogDelete,
    getAppoints 
  } = props;

  const handleClose = () => {
    setOpenDialogDelete(false);
  };

  const handleDelete = async () => {
    await axios.delete(`http://localhost:8000/deleteAppoint?_id=${whatEdit._id}`)
      .then(res => getAppoints() )
      .catch(err => console.log('что-то пошло не так'));
    setOpenDialogDelete(false);
  };

  return (
    <div>
      <Dialog open={openDialogDelete}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Удалить прием</DialogTitle>
        <DialogContent>
          <DialogContentText>Вы действительно хотите удалить прием?</DialogContentText>
          <DialogActions>
            <Button
              onClick={() => handleClose()}
              color="primary">
              Cancel
            </Button>
            <Button onClick={() => handleDelete()} color="primary">
              Delete
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteWindow;