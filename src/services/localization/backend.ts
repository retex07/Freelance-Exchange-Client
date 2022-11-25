import { BackendModule, ReadCallback } from 'i18next';

const Backend: BackendModule = {
  type: 'backend',
  init() {
    /* nothing to do here */
  },
  read(language: string, namespace: string, callback: ReadCallback) {
    const path = namespace
      .split('_')
      .map((pathPortion) => {
        switch (pathPortion) {
          case 'b':
            return '_blocks';
          case 'c':
            return '_components';
          case 'p':
            return '_pages';
          default:
            return pathPortion;
        }
      })
      .join('/');

    import(`/src/constants/localeResources/${path}/${language}.json`)
      .then((resources) => callback(null, resources))
      .catch((error) => callback(error, null));
  },
};

export default Backend;
