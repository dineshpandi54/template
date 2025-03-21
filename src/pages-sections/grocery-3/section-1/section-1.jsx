import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { Carousel } from "components/carousel";

// CUSTOM DATA MODEL


// STYLED COMPONENTS
import { COMMON_DOT_STYLES } from "components/carousel/styles";
import { StyledRoot, StyledGrid, StyledButton } from "./styles";

// API FUNCTIONS
import api from "utils/__api__/grocery-3";
export default async function Section1() {
  const carousels = await api.getMainCarousel();
  return <StyledRoot>
      <Container>
        <Carousel dots autoplay arrows={false} spaceBetween={0} slidesToShow={1} dotStyles={COMMON_DOT_STYLES}>
          {carousels.map((item, ind) => <div key={ind}>
              <StyledGrid container spacing={10}>
                <Grid size={{
              sm: 6,
              xs: 12
            }}>
                  <Box pt={{
                sm: 6
              }}>
                    <LazyImage width={800} height={886} alt={item.title} src={item.imgUrl} />
                  </Box>
                </Grid>

                <Grid size={{
              sm: 6,
              xs: 12
            }} className="content">
                  <Typography variant="h1" sx={{
                lineHeight: 1.3,
                fontWeight: 600,
                maxWidth: {
                  md: 500
                },
                paddingTop: {
                  xs: 5,
                  md: 0
                },
                marginBottom: {
                  md: 5,
                  xs: 3
                },
                fontSize: {
                  lg: 50,
                  md: 45,
                  xs: 38
                }
              }}>
                    {item.title}
                  </Typography>

                  <StyledButton variant="contained" color="primary">
                    {item.buttonText}
                  </StyledButton>
                </Grid>
              </StyledGrid>
            </div>)}
        </Carousel>
      </Container>
    </StyledRoot>;
}