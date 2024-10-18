import * as React from 'react';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import TwoSidedLayout from './TwoSidedLayout';
import HubSpotForm from './HubSpotForm';

export default function HeroHome() {
  return (
    <TwoSidedLayout reversed>
      <Chip size="lg" variant="outlined" color="neutral">
        Kubernetes and DevOps the easy way
      </Chip>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 2rem)"
        textColor="neutral.mainChannel"
      >
        Easy-to-navigate space for Kubernetes and DevOps
      </Typography>
      <Typography fontSize="lg" textColor="neutral.mainChannel" lineHeight="lg">
        In K1s, we believe that Kubernetes and DevOps should be easy. K1s
        is in a mission to make them easy for everyone.
        We provide a set of tools and services that help you navigate the
        Kubernetes and DevOps landscape. We help you to learn, build, and
        optimize your Kubernetes and DevOps journey.
      </Typography>
      <HubSpotForm divider={false} />
    </TwoSidedLayout>
  );
}