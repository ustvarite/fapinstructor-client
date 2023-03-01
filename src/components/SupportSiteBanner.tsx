import { Box, Paper, Typography } from "@material-ui/core";
import styled from "styled-components/macro";

const Container = styled(Paper)`
  background-color: #ffff8d;
  margin-top: 2rem;
`;

export function SupportSiteBanner() {
  return (
    <Container elevation={3}>
      <Box p={2}>
        <Typography variant="subtitle2">
          If you enjoy the game, please consider supporting us by checking out
          my{" "}
          <a
            href="https://www.patreon.com/bePatron?u=29098019"
            target="_blank"
            rel="noreferrer"
          >
            Patreon
          </a>
        </Typography>
      </Box>
    </Container>
  );
}
