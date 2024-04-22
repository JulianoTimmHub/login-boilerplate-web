import { CircularProgress } from "@mui/material"

export const Loading = ({ }) => {
  return (
    <CircularProgress
      size={70}
      color="primary"
      className="position-absolute top-50 start-50 translate-middle"
    />
  )
}
