import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// GLOBAL CUSTOM COMPONENTS
import FlexBetween from "components/flex-box/flex-between";
import ProductCard13 from "components/product-cards/product-card-13";

// API FUNCTIONS
import api from "utils/__api__/medical";
export default async function Section5() {
  const products = await api.getBestSellerProducts();
  return <Container>
      <FlexBetween flexWrap="wrap" gap={2} mt={8} mb={4}>
        <Typography variant="h3" sx={{
        fontSize: {
          sm: 30,
          xs: 27
        }
      }}>
          Best Seller Products
        </Typography>

        <Button variant="contained" color="primary">
          View All
        </Button>
      </FlexBetween>

      <Grid container spacing={3}>
        {products.map(product => <Grid size={{
        lg: 3,
        md: 4,
        sm: 6,
        xs: 12
      }} key={product.id}>
            <ProductCard13 product={product} />
          </Grid>)}
      </Grid>
    </Container>;
}