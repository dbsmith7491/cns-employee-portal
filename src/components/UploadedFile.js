import { Typography, Box, Icon, IconButton } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import ClearIcon from "@mui/icons-material/Clear";
import { styled } from "@mui/material/styles";

const FileTypeIcon = styled(Icon)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: theme.palette.grey[500],
  fontSize: 40,
}));

const UploadedFile = ({ name, subtitle, borderBottom }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      borderTop={1}
      borderBottom={borderBottom}
      borderColor={"divider"}
      padding={2}
    >
      <FileTypeIcon>
        <ImageIcon fontSize="large" />
      </FileTypeIcon>
      <Box ml={1}>
        <Typography variant="body2" fontWeight={500}>
          {name}
        </Typography>
        <Typography variant="caption">{subtitle}</Typography>
      </Box>

      <IconButton aria-label="delete" sx={{ ml: "auto" }}>
        <ClearIcon />
      </IconButton>
    </Box>
  );
};

export default UploadedFile;
