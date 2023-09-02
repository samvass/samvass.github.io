import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#456990',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'white'
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {btnText, header, content} = props

  return (
    <div>
      <Button onClick={handleOpen} variant='contained' style={{backgroundColor: '#456990', width: '200px', height: '100px', fontSize: '20px'}}>{btnText}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="4" component="h1">
          {header}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3, fontSize: '20px' }}>
            {content}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
