import { useEffect, useState } from "react"
import { Alert, Snackbar } from "@mui/material"

export const SnackbarMessage = ({ status }: any) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(true);
  }, [status?.message, setOpen])

  useEffect(() => {
    const timeoutClose = setTimeout(() => {
      setOpen(false);
    }, 5000);
    return () => clearTimeout(timeoutClose);
  }, [setOpen])

  return (
    <Snackbar
      open={open}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
    >
      <Alert
        severity={status?.color}
        variant="filled"
        onClose={() => setOpen(false)}
      >
        {status?.message}
      </Alert>
    </Snackbar>
  )
}