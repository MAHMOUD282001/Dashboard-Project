import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import MainHeader from "../../components/MainHeader";

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regPhone = /^(?:\+20|0)?1[0125]\d{8}$/;

const roles = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

export default function Form() {
  const [open, setOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    handleClick();
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <MainHeader title={"Create User"} subTitle={"Welcome To Create User"} />
      <Stack
        sx={{
          gap: 2,
          mt: 2
        }}
        direction={"row"}
      >
        <TextField
          error={errors.firstName}
          helperText={`${errors.firstName ? "This Feild Is Required" : ""}`}
          {...register("firstName", { required: true, maxLength: 20 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
          error={errors.firstName}
          helperText={`${errors.lastName ? "This Feild Is Required" : ""}`}
          {...register("lastName", { required: true, maxLength: 20 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>
      <TextField
        error={errors.email}
        helperText={`${errors.email ? "Enter Valid Email" : ""}`}
        {...register("email", { required: true, pattern: regEmail })}
        sx={{ flex: 1 }}
        label="Email"
        variant="filled"
      />
      <TextField
        error={errors.phone}
        helperText={`${errors.phone ? "Enter Valid Phone" : ""}`}
        {...register("phone", { required: true, pattern: regPhone })}
        sx={{ flex: 1 }}
        label="Contact Number"
        variant="filled"
      />
      <TextField
        error={errors.address}
        helperText={`${errors.address ? "This Feild Is Required" : ""}`}
        {...register("address", { required: true, maxLength: 20 })}
        sx={{ flex: 1 }}
        label="Address"
        variant="filled"
      />
      <TextField
        select
        label="Select"
        defaultValue="User"
        helperText="Please Select Your Role"
        variant="filled"
      >
        {roles.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button type="submit" variant="contained">
          Create New User
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Account Created Successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
