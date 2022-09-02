import {
  Typography,
  Paper,
  Box,
  IconButton,

} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";

const ReviewCard = ({ title, children, handleEditClick }) => {
  return (
    <Paper variant="outlined" sx={{ p: 2, my: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Typography type="h2" variant="h6">
          {title}
        </Typography>
          <IconButton
            color="primary"
            aria-label="Edit Section"
            sx={{ marginLeft: "auto" }}
            onClick={handleEditClick}
          >
            <EditIcon />
          </IconButton>
      </Box>
      {children}
    </Paper>
  );
};

export default ReviewCard;
