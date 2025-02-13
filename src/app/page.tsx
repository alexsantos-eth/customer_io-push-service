"use client";

import type React from "react";
import { useState } from "react";

import {
  Box,
  Button,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Logo from "../assets/logo.png";
import Image from "next/image";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    image: "",
    link: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = () => {
    const newForm: Record<string, string> = { ...formData };
    Object.keys(newForm).forEach(
      (key) => newForm[key] === "" && delete newForm[key]
    );

    const data = {
      message: {
        notification: {
          ...newForm,
        },

        apns: {
          headers: {
            "apns-priority": "5",
            "apns-push-type": "background",
          },

          payload: {
            aps: {
              "content-available": 1,
            },
          },
        },
      },
    };

    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setOpenSnackbar(true);
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      height="100dvh"
      width="100dvw"
      bgcolor="#f5f5f5"
    >
      <Paper elevation={3} sx={{ p: 4, width: "80%", maxWidth: 400 }}>
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Image src={Logo} alt="Logo" width={60} height={60} />

          <Stack spacing={0} sx={{ borderLeft: "1px solid black" }} px={2}>
            <Typography
              fontWeight="bold"
              variant="h1"
              fontSize={20}
              component="h1"
              gutterBottom
              lineHeight={1}
            >
              Customer.io
            </Typography>
            <Typography lineHeight={1}>envió de notificaciones</Typography>
          </Stack>
        </Stack>

        <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Titulo"
            name="title"
            value={formData.title}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Mensaje"
            name="body"
            value={formData.body}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={4}
          />
          <TextField
            fullWidth
            label="URL de imagen"
            name="image"
            value={formData.image}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Deep Link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleCopy}
          >
            Copiar al portapapeles
          </Button>
        </Box>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          onClose={() => setOpenSnackbar(false)}
          message="Datos copiados al portapapeles"
        />
      </Paper>
    </Stack>
  );
}
