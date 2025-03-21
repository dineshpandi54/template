import Link from "next/link";

// MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// GLOBAL CUSTOM COMPONENTS
import FlexRowCenter from "components/flex-box/flex-row-center";

// LOCAL CUSTOM COMPONENT
import PageCard from "./page-card";

// STYLED COMPONENTS
import { FilterButton } from "./styles";


// CUSTOM DATA
import demos from "./data/demos";
import shops from "./data/shops";
import users from "./data/users";
import admins from "./data/admins";


// ==================================================================


// ==================================================================

export default function Section3({
  filterDemo,
  setFilterDemo
}) {
  const pages = [...demos, ...shops, ...admins, ...users];
  const filtered = pages.filter(item => filterDemo !== "" ? item.page === filterDemo : true);
  return <Box mb={14} id="demos" sx={{
    background: "url(/assets/images/landing/landing-bg-2.svg) center/contain no-repeat"
  }}>
      <Container id="section-3" sx={{
      position: "relative"
    }}>
        <Box maxWidth="830px" mx="auto" mb="2.5rem" textAlign="center">
          <Typography variant="h1" color="primary" sx={{
          fontSize: 58,
          fontWeight: 700
        }}>
            75+
          </Typography>

          <Typography variant="body1" color="primary" sx={{
          fontSize: 18
        }}>
            Server side rendered
          </Typography>

          <Typography variant="h2" sx={{
          mb: 4,
          fontSize: 28,
          fontWeight: 700,
          textAlign: "center",
          color: "secondary.main",
          textTransform: "uppercase"
        }}>
            Demos & Pages
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid size={12}>
            <FlexRowCenter gap={1} flexWrap="wrap">
              <FilterButton disableRipple onClick={() => setFilterDemo("")} selected={filterDemo === "" ? 1 : 0}>
                All
              </FilterButton>

              <FilterButton disableRipple onClick={() => setFilterDemo("homepage")} selected={filterDemo === "homepage" ? 1 : 0}>
                Homepages
              </FilterButton>

              <FilterButton disableRipple onClick={() => setFilterDemo("shop")} selected={filterDemo === "shop" ? 1 : 0}>
                Shop
              </FilterButton>

              <FilterButton disableRipple onClick={() => setFilterDemo("user")} selected={filterDemo === "user" ? 1 : 0}>
                User Dashboard
              </FilterButton>

              <FilterButton disableRipple onClick={() => setFilterDemo("admin")} selected={filterDemo === "admin" ? 1 : 0}>
                Admin Dashboard
              </FilterButton>
            </FlexRowCenter>
          </Grid>

          {filtered.map((item, i) => <Grid size={{
          lg: 4,
          md: 6,
          xs: 12
        }} key={i}>
              <PageCard {...item} />
            </Grid>)}
        </Grid>

        <FlexRowCenter mt={6}>
          <Button color="primary" variant="contained" LinkComponent={Link} href="https://tinyurl.com/get-bazaar">
            Purchase Now
          </Button>
        </FlexRowCenter>
      </Container>
    </Box>;
}