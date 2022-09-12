import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material';

export default function FormModal({ children, title, dialogActions, open, onClose, fullWidth, maxWidth, onSubmit }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
    

    return (
        <form onSubmit={onSubmit}>
            <Dialog open={open} onClose={onClose} scroll="paper" fullScreen={fullScreen} fullWidth={fullWidth} maxWidth={maxWidth} >
                <DialogTitle sx={{borderBottom: "1px solid", borderColor: "divider"}}>{title}</DialogTitle>
                <DialogContent dividers>
                    {children}
                </DialogContent>
                <DialogActions>
                        {dialogActions}
                </DialogActions> 
            </Dialog>
        </form>
    );
}
