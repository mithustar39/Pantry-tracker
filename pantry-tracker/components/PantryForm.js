// components/PantryForm.js
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const PantryForm = ({ onSubmit }) => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [expiryDate, setExpiryDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ itemName, quantity, expiryDate });
    setItemName("");
    setQuantity(0);
    setExpiryDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Quantity"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Expiry Date"
        type="date"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        required
        InputLabelProps={{ shrink: true }}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Item
      </Button>
    </form>
  );
};

export default PantryForm;
