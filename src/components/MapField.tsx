import { Autocomplete, Box, CircularProgress, IconButton, TextField, TextFieldProps, Typography } from '@mui/material';
import { useAddress } from 'hooks/useAddress';
import { useMap } from 'hooks/useMap';
import React, { useState } from 'react';
import { ISearchAddress } from 'types/address';

export type MapFieldProps = TextFieldProps & {};

export const MapField: React.FC<TextFieldProps> = (props) => {
  const { query, setInput } = useAddress();
  const { viewPlaceId } = useMap();
  const [placeholder, setPlaceholder] = useState('Search location ...');

  return (
    <Autocomplete<ISearchAddress>
      loading={query.isLoading}
      loadingText={
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress />
        </Box>
      }
      options={query.data?.result || []}
      getOptionLabel={(option) => option.structured_formatting.main_text}
      renderOption={(props, option) => {
        return (
          <Box
            component="li"
            {...props}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingX: 1,
              width: '100%'
            }}
          >
            <Box>
              <Typography color="text.primary" variant="body2">
                {option.structured_formatting.main_text}
              </Typography>
              <Typography color="text.secondary" variant="caption">
                {option.structured_formatting.secondary_text}
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }} />
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                viewPlaceId(option.place_id);
              }}
            >
              {/* <LocationOn color="primary" /> */}
            </IconButton>
          </Box>
        );
      }}
      renderInput={(params) => {
        return (
          <TextField
            placeholder={placeholder}
            onChange={(e) => {
              setInput(e.target.value);
              setPlaceholder(e.target.value);
            }}
            name={undefined}
            {...params}
            {...props}
          />
        );
      }}
    />
  );
};
