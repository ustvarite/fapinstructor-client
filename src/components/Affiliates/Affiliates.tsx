import { Box, Paper, Typography } from "@material-ui/core";
import styled from "styled-components/macro";

import KiirooLogo from "@/assets/images/kiiroo.png";

const Container = styled(Paper)`
  background-color: #ffff8d;
  &:hover {
    background-color: #ffff1d;
  }
`;

export const KiirooBanner = styled.img.attrs({
  src: KiirooLogo,
  alt: "Opens the Kiiroo partner site within a new tab",
})`
  max-width: 100px;
`;

export function Affiliates() {
  return (
    <a
      href="http://www.kiiroo.com/fapinstructor"
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Container>
        <Box p={2}>
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <div>
              <KiirooBanner />
            </div>
            <div>
              <Typography variant="body1">
                Click here to support this site and save 10% on any purchase
                with our affiliate Kiiroo.
              </Typography>
            </div>
          </div>
        </Box>
      </Container>
    </a>
  );
}
