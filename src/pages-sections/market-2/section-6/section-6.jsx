import Grid from "@mui/material/Grid2";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "lib";

// STYLED COMPONENT
import { BannerBox } from "./styles";
export default function Section6() {
  return <Container className="mt-4 mb-4">
      <Grid container spacing={3}>
        {/* FINAL REDUCTION BANNER */}
        <Grid size={{
        sm: 6,
        xs: 12
      }}>
          <BannerBox img="/assets/images/banners/banner-21.jpg">
            <p className="subtitle">Final Reduction</p>
            <h3 className="title">Sale up to 20% Off</h3>
            <Divider />

            <p className="price">
              Only From <span>{currency(270)}</span>
            </p>
          </BannerBox>
        </Grid>

        {/* WEEKEND SALE BANNER */}
        <Grid size={{
        sm: 6,
        xs: 12
      }}>
          <BannerBox className="text-white" img="/assets/images/banners/banner-22.jpg">
            <p className="subtitle">Weekend Sale</p>
            <h3 className="title">Fine Smart Speaker</h3>
            <Divider />
            <p className="price">
              Starting at <span>{currency(185)}</span>
            </p>
          </BannerBox>
        </Grid>
      </Grid>
    </Container>;
}