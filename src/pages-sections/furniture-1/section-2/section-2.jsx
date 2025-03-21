import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";

// LOCAL CUSTOM COMPONENTS
import Card1 from "./components/card-1";
import Card2 from "./components/card-2";
import Card3 from "./components/card-3";
import Card4 from "./components/card-4";
import Card5 from "./components/card-5";
export default function Section2() {
  return <Grid container spacing={3} className="mb-3">
      {/* BIG SALE BANNER CARD */}
      <Grid size={{
      sm: 6,
      xs: 12
    }}>
        <Card1 />
      </Grid>

      {/* UPTO 60% OFF BANNER CARD */}
      <Grid size={{
      sm: 6,
      xs: 12
    }}>
        <Card2 />
      </Grid>

      {/* WINTER OFFER 50% OFF BANNER CARD */}
      <Grid size={{
      sm: 6,
      xs: 12
    }}>
        <Card3 />
      </Grid>

      {/* SOFA & CHAIR COLLECTION BANNER CARDS */}
      <Grid size={{
      sm: 6,
      xs: 12
    }}>
        <Stack height="100%" spacing={3}>
          {/* CHAR COLLECTION BANNER CARD */}
          <Card4 />

          {/* SOFA CHAIR BANNER CARD */}
          <Card5 />
        </Stack>
      </Grid>
    </Grid>;
}