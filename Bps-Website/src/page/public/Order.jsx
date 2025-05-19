import React, { useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  Typography,
  Paper,
  Container,
  IconButton,
  Box,
  Breadcrumbs,
} from "@mui/material";
import {
  AddCircleOutline,
  RemoveCircleOutline,
  Send,
  LocationOn,
  Person,
  LocalShipping,
  Height,
  Padding,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import contactBanner from "../../assets/image1/contactus.png";
import Readyto from "../Designe/Readyto";

// Reusable styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(3),
  // background: "linear-gradient(145deg,rgb(192, 219, 254),rgb(93, 137, 196))",
  background: "#dbeafe",
  boxShadow: "0 8px 32px rgba(14, 12, 12, 0.1)",
  position: "relative",
  overflow: "hidden",

  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "4px",
    height: "100%",
    background: theme.palette.primary.main,
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.dark,
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  "& svg": { fontSize: "1rem" },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  padding: theme.spacing(1),
  fontSize: "1.1rem",
  transition: "all 0.3s ease",
  background: "linear-gradient(45deg, #1976d2, #2196f3)",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 15px rgba(37, 34, 41, 0.4)",
  },
}));

const ProductBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(3),
  background: "#f8faff",
  borderRadius: theme.spacing(2),
  border: `1px solid ${theme.palette.primary.light}`,
  position: "relative",
  backgroundColor: "#dbeafe",
}));

const RoundedTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: theme.spacing(2),
    backgroundColor: "#F1EFEC",
    "& input": {
      color: "#f8faff",
      paddingTop: "8px",
      paddingBottom: "10px",
    },
    "& textarea": {
      color: "#f8faff",
      paddingTop: "6px",
      paddingBottom: "6px",
    },
  },
  "& .MuiInputLabel-root": {
    width: "100%",
    textAlign: "left",
  },
}));

const AddressSection = ({ title, prefix }) => (
  <>
    <Grid item xs={12}>
      <SectionTitle variant="h6">{title}</SectionTitle>
    </Grid>
    {[
      "First Name",
      "GST No.",
      "Locality/Street",
      "State",
      "City",
      "Pin Code",
    ].map((field, index) => (
      <Grid item xs={12} sm={4} key={field}>
        <RoundedTextField
          fullWidth
          label={field}
          name={`${prefix}_${field.replace(/ /g, "")}`}
          variant="outlined"
        />
      </Grid>
    ))}
  </>
);

const Order = () => {
  const [products, setProducts] = useState([{ id: 1 }]);
  const [stations] = useState(["Station A", "Station B", "Station C"]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  const handleInputChange = (event) => {
    console.log(event.target.name, event.target.value);
  };

  const addProduct = () => {
    setProducts((prev) => [...prev, { id: prev.length + 1 }]);
  };

  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const renderProductFields = (product, index) => (
    <ProductBox key={product.id}>
      <Grid container spacing={2} alignItems="center">
        <Grid
          item
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="subtitle1"
            color="primary"
            sx={{ fontWeight: 600 }}
          >
            Product #{index + 1}
          </Typography>
          <IconButton
            onClick={() => removeProduct(product.id)}
            disabled={products.length === 1}
            sx={{
              color: products.length === 1 ? "text.disabled" : "error.main",
            }}
          >
            <RemoveCircleOutline />
          </IconButton>
        </Grid>

        {["Receipt No.", "Reference No.", "Insurance"].map((field) => (
          <Grid item xs={12} sm={6} md={3} key={field}>
            <RoundedTextField
              fullWidth
              label={field}
              name={`${field.replace(/ /g, "")}_${product.id}`}
            />
          </Grid>
        ))}

        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Payment</InputLabel>
            <Select
              label="Payment"
              name={`payment_${product.id}`}
              sx={{ borderRadius: 2 }}
            >
              <MenuItem value="To Pay">To Pay</MenuItem>
              <MenuItem value="Paid">Paid</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {["VVP Amount", "Weight Kgs.", "Amount"].map((field) => (
          <Grid item xs={12} sm={4} key={field}>
            <RoundedTextField
              fullWidth
              label={field}
              name={field.replace(/ /g, "")}
            />
          </Grid>
        ))}
      </Grid>
    </ProductBox>
  );

  return (
    <div>
      <Box
        sx={{
          mt: 3,

          position: "relative",
          width: "100vw",
          height: { xs: "300px", md: "350px" },
          backgroundImage: `url(${contactBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:after": {
            content: '""',
            position: "absolute",
            top: 10,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.6)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: 800,
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            Make Your Booking
          </Typography>
        </Box>
      </Box>

      <Box backgroundColor="" sx={{ p: { md: 20 }, m: { xs: 1.5 } }}>
        <StyledPaper>
          <Typography
            variant="h4"
            align="center"
            sx={{
              color: "red",
              fontWeight: 800,
              mb: 6,
              textTransform: "uppercase",
              letterSpacing: 1.2,
            }}
          >
            <LocalShipping
              sx={{ fontSize: "2.5rem", mr: 1.5, verticalAlign: "middle" }}
            />
            Create Your Booking
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* Station Section */}
              <Grid item xs={12}>
                <SectionTitle variant="h6">
                  <LocationOn />
                  Station Information
                </SectionTitle>
              </Grid>
              {["Start Station", "Destination Station"].map((label) => (
                <Grid item xs={12} sm={6} key={label}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>{label}</InputLabel>
                    <Select
                      label={label}
                      name={label.replace(/ /g, "")}
                      // sx={{ borderRadius: 2 }}
                    >
                      {stations.map((station) => (
                        <MenuItem key={station} value={station}>
                          {station}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              ))}

              {/* {["Booking Date", "Delivery Date"].map((label) => (
                <Grid item xs={12} sm={6} key={label}>
                  <RoundedTextField
                    fullWidth
                    type="date"
                    label={label}
                    name={label.replace(/ /g, "")}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    placeholder="dd-mm-yyyy"
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      borderRadius: 2,
                      input: {
                        color: "black",
                        padding: "12px",
                        borderRadius: 2,
                        textAlign: "center", // center the text
                      },
                      label: {
                        color: "rgb(60, 53, 53)",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "rgba(52, 30, 30, 0.79)",
                        },
                        "&:hover fieldset": {
                          borderColor: "black",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "primary.main",
                        },
                      },
                    }}
                    onFocus={(e) => e.target.showPicker?.()} // for browser compatibility
                  />
                </Grid>
              ))} */}

              {["Booking Date", "Delivery Date"].map((label) => (
                <Grid item xs={12} sm={6} key={label}>
                  <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                    {label}
                  </Typography>
                  <RoundedTextField
                    fullWidth
                    type="date"
                    name={label.replace(/ /g, "")}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    placeholder="dd-mm-yyyy"
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      borderRadius: 2,
                      input: {
                        color: "black",
                        padding: "12px",
                        borderRadius: 2,
                        textAlign: "center",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "rgba(52, 30, 30, 0.79)",
                        },
                        "&:hover fieldset": {
                          borderColor: "black",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "primary.main",
                        },
                      },
                    }}
                    onFocus={(e) => e.target.showPicker?.()}
                  />
                </Grid>
              ))}

              {/* Customer Section */}
              <Grid item xs={12}>
                <SectionTitle variant="h6">
                  <Person />
                  Customer Information
                </SectionTitle>
              </Grid>
              {["First Name", "Middle Name", "Last Name"].map((field) => (
                <Grid item xs={12} sm={4} key={field}>
                  <RoundedTextField
                    fullWidth
                    label={field}
                    name={field.replace(/ /g, "")}
                  />
                </Grid>
              ))}
              <Grid item xs={12} sm={4}>
                <RoundedTextField
                  fullWidth
                  label="Contact Number"
                  name="ContactNumber"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <RoundedTextField
                  fullWidth
                  label="Email Address"
                  name="Email"
                />
              </Grid>

              {/* Address Sections */}
              <AddressSection title="From Address" prefix="from" />
              <AddressSection title="To Address" prefix="to" />

              {/* Product Section */}
              <Grid item xs={12}>
                <SectionTitle variant="h6">
                  <LocalShipping />
                  Product Details
                </SectionTitle>
                {products.map(renderProductFields)}
                <Button
                  variant="outlined"
                  startIcon={<AddCircleOutline />}
                  onClick={addProduct}
                  sx={{
                    mt: 2,
                    borderRadius: 2,
                    borderWidth: 2,
                    "&:hover": { borderWidth: 2 },
                  }}
                >
                  Add Product
                </Button>
              </Grid>

              {/* Additional Fields */}
              <Grid item xs={12}>
                <RoundedTextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Additional Comments"
                  name="additionalComments"
                />
              </Grid>

              {[
                "FREIGHT",
                "INS/VPP",
                "Bill Total",
                "CGST%",
                "SGST%",
                "IGST%",
                "Grand Total",
              ].map((field) => (
                <Grid item xs={12} sm={6} key={field}>
                  <RoundedTextField
                    fullWidth
                    label={field}
                    name={field.replace(/ /g, "")}
                  />
                </Grid>
              ))}

              {/* Submit Button */}
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <StyledButton
                  type="submit"
                  variant="contained"
                  size="large"
                  startIcon={<Send sx={{ fontSize: "1rem" }} />}
                >
                  Confirm Booking
                </StyledButton>
              </Grid>
            </Grid>
          </form>
        </StyledPaper>
      </Box>
      <Readyto />
    </div>
  );
};

export default Order;
