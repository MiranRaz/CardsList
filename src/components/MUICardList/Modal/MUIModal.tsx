import React, { Dispatch, SetStateAction } from "react";
// mui
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
// components
import ImageWithBlurhash from "../../ImageWithBlurhash.tsx";

interface MUIModalProps {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  title: string;
  description: string;
  image: string;
  imageHash: string;
}

const MUIModal: React.FC<MUIModalProps> = ({
  open,
  onClose,
  title,
  description,
  image,
  imageHash,
}) => {
  const handleClose = () => {
    onClose(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <ImageWithBlurhash src={image} hash={imageHash} />
          <DialogContentText sx={{ pt: 2 }}>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MUIModal;
