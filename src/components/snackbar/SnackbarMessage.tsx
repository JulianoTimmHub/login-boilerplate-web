import { useEffect, useState } from "react"
import { Alert, Snackbar } from "@mui/material"

export const SnackbarMessage = ({ status, resetStatus }: any) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (status.message) 
      setOpen(true);
  }, [status.message, setOpen])
  
  const closeSnackbar = (): void => {
    setOpen(false);
    resetStatus();
  }

  return (
    <Snackbar
      open={open}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      onClose={() => closeSnackbar()}
      autoHideDuration={4000}
    >
      <Alert
        severity={status.color}
        variant="filled"
        onClose={() => closeSnackbar()}
      >
        {status.message}
      </Alert>
    </Snackbar>
  )
}