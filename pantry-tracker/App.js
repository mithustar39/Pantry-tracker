// pages/index.js
import React, { useEffect, useState } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import PantryForm from "./components/PantryForm";
import { Container, List, ListItem, ListItemText, Button, Paper, Typography } from "@mui/material";

const Home = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const querySnapshot = await getDocs(collection(db, "pantryItems"));
    setItems(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const addItem = async (item) => {
    await addDoc(collection(db, "pantryItems"), item);
    fetchItems();
  };

  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "pantryItems", id));
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    const now = new Date().toISOString().split("T")[0];
    items.forEach((item) => {
      if (item.quantity < 5) {
        alert(`${item.itemName} is running low on stock!`);
      }
      if (item.expiryDate <= now) {
        alert(`${item.itemName} is expiring soon or already expired!`);
      }
    });
  }, [items]);

  return (
    <Container>
      <Paper style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Pantry Tracker
        </Typography>
        <PantryForm onSubmit={addItem} />
        <List>
          {items.map((item) => (
            <ListItem key={item.id} style={{ marginTop: "10px" }}>
              <ListItemText
                primary={item.itemName}
                secondary={`Quantity: ${item.quantity}, Expiry: ${item.expiryDate}`}
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteItem(item.id)}
              >
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default Home;
