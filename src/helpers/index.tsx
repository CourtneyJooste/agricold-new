export const encode = (data: any) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export const altText = 'Refrigeration systems, climate control products, blast coolers,' +
  ' high humidity & misting systems, cold rooms, temperature monitoring and post harvest cooling systems.' +
  ' Leading specialists across Africa. Headquarters in South Africa, Zimbabwe and Zambia.';

export * from './yup-helper';
export * from './ga';
