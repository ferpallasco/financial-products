import { apiBancoPinchincha } from '../../../../environments/environment.prod';

export const ApiBancoPinchinchaEnv = {
  baseUrl: apiBancoPinchincha.hasOwnProperty('baseUrl')
    ? apiBancoPinchincha.baseUrl
    : null,
};
