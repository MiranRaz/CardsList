import React, { useState } from "react";
// mui
import { Card, Box, Button, CardContent, Typography } from "@mui/material";
// components
import ImageWithBlurhash from "../ImageWithBlurhash";
import MUIModal from "./Modal/MUIModal.tsx";

interface CardProps {
  title: string;
  description: string;
  image: string;
  imageHash: string;
}

const MUICard: React.FC<CardProps> = ({
  title,
  description,
  image,
  imageHash,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <ImageWithBlurhash src={image} hash={imageHash} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Box
          component="div"
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "center", padding: "8px" }}>
        <Button size="small" color="success" onClick={() => setModalOpen(true)}>
          Learn More
        </Button>
      </Box>
      <MUIModal
        open={modalOpen}
        onClose={setModalOpen}
        title={title}
        description={description}
        image={image}
        imageHash={imageHash}
      />
    </Card>
  );
};

export default MUICard;
