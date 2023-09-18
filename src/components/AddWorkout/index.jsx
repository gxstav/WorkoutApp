import * as React from 'react';
import { Text, Pressable } from "react-native";
import styles from "./styles";

import AddIcon from '@mui/icons-material/Add';
import { Grid, Icon, IconButton, SvgIcon, Stack, Button } from "@mui/material";


export default function AddWorkout() {

  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}

