import {ComponentType} from 'react';

import Map from '../components/map/map';

import {City, Location, Locations} from '../types/offers';

type HOCProps = {
  renderMap: (
    city: City,
    locations: Locations,
    selectedLocation: Location | undefined,
    className: string,
  ) => void
};

function withMap<T>(Component: ComponentType<T>): ComponentType<Omit<T, keyof HOCProps>> {
  type ComponentProps = Omit<T, keyof HOCProps>;

  function WithMap(props: ComponentProps): JSX.Element {

    return (
      <Component
        {...props as T}
        renderMap={(
          city: City,
          locations: Locations,
          selectedLocation: Location | undefined,
          className: string,
        ) => (
          <Map
            city={city}
            locations={locations}
            selectedLocation={selectedLocation}
            className={className}
          />
        )}
      />
    );
  }

  return WithMap;
}

export default withMap;
