/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function ProductRating({ rating }) {
  const rate = (parseInt(rating) * 5) / 100;
  return (
    <Box sx={{ "& > legend": { mt: 2, fontSize: 2 } }}>
      <Rating
        name="half-rating-read"
        size="small"
        defaultValue={0}
        precision={0.2}
        value={rate}
        readOnly
      />
    </Box>
  );
}
