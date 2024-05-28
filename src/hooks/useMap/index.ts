import Core from 'services/core';
import { IPlace } from 'types/place';
import { initState, useMapState } from './state';

export const useMap = () => {
  const state = useMapState();

  const toggleExpand = () => {
    if (state.width === initState.width && state.height === initState.height) {
      state.resize({
        width: '80vw',
        height: '80vh'
      });
    } else {
      state.resize({
        width: initState.width,
        height: initState.height
      });
    }
  };

  const viewPlaceId = async (placeId: string) => {
    const response = await Core.Address.detail(placeId);
    viewPlace(response.data.data.result);
  };

  const viewPlace = (place: IPlace) => {
    state.addMarker({
      name: place.metadata.name,
      longitude: place.metadata.geometry.location.lng,
      latitude: place.metadata.geometry.location.lat,
      color: 'primary'
    });

    state.changeViewPort({
      longitude: place.metadata.geometry.location.lng,
      latitude: place.metadata.geometry.location.lat
    });

    if (!state.open) state.toogleOpen();
  };

  return {
    ...state,
    toggleExpand,
    viewPlace,
    viewPlaceId
  };
};
