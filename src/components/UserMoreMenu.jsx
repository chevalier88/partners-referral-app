import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
// component
import Iconify from './Iconify.jsx';
import axios from 'axios';

// ----------------------------------------------------------------------

export default function UserMoreMenu({targetRow, allRequests, setAllRequests}) {
  
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen(e){
    e.preventDefault();
    setIsOpen(true);
    console.log('using delete popup to check allRequests...');
    console.log(allRequests);
    };
  

  function handleDeleteButtonClick(e){
    e.preventDefault();
    console.log(`delete button was clicked for ${Number(targetRow)}`);
    console.log(targetRow);

    setIsOpen(false);
    
    console.log(targetRow);

    const targetIndexOfObjectToDelete = allRequests.findIndex(object => {
      return object.id === targetRow;
    })

    console.log('acquiring Object index for deletion...');
    console.log(targetIndexOfObjectToDelete);
    
    const newAllRequests = [...allRequests];
    newAllRequests.splice(targetIndexOfObjectToDelete, 1);
    console.log(newAllRequests);

    axios.delete(`./request/${targetRow}`)
    .then((response)=> {
      console.log(response);
      }
    )
    
    setAllRequests(newAllRequests);
  }

  return (
    <>
      <IconButton ref={ref} onClick={(handleOpen)}>
        <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem sx={{ color: 'text.secondary' }} onClick = {handleDeleteButtonClick}>
          <ListItemIcon>
            <Iconify icon="eva:trash-2-outline" width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
      </Menu>
    </>
  );
}
