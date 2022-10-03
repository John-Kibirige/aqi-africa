const countryCoordinates = [
  {
    country: 'Algeria',
    capital: 'Algiers',
    latitude: 36.753769,
    longitude: 3.058756,
  },
  {
    country: 'Angola',
    capital: 'Luanda',
    latitude: -8.8383,
    longitude: 13.2344,
  },
  {
    country: 'Benin',
    capital: 'Porto-Novo',
    latitude: 6.4833,
    longitude: 2.6167,
  },
  {
    country: 'Botswana',
    capital: 'Gaborone',
    latitude: -24.6569,
    longitude: 25.9086,
  },
  {
    country: 'Burkina Faso',
    capital: 'Ouagadougou',
    latitude: 12.3572,
    longitude: -1.5353,
  },
  {
    country: 'Burundi',
    capital: 'Bujumbura',
    latitude: -3.3825,
    longitude: 29.3611,
  },
  {
    country: 'Cameroon',
    capital: 'Yaounde',
    latitude: 3.8578,
    longitude: 11.5181,
  },
  {
    country: 'Cape Verde',
    capital: 'Praia',
    latitude: 14.9177,
    longitude: -23.5092,
  },
  {
    country: 'Central African Republic',
    capital: 'Bangui',
    latitude: 4.3732,
    longitude: 18.5628,
  },
  {
    country: 'Chad',
    capital: "N'Djamena",
    latitude: 12.11,
    longitude: 15.05,
  },
  {
    country: 'Comoros\t',
    capital: 'Moroni',
    latitude: -11.7036,
    longitude: 43.2536,
  },
  {
    country: 'Congo',
    capital: 'Brazzaville',
    latitude: -4.2667,
    longitude: 15.2833,
  },
  {
    country: "Ivory Coast (Cote d'Ivoire)",
    capital: 'Yamoussoukro',
    latitude: 6.8161,
    longitude: -5.2742,
  },
  {
    country: 'Djibouti',
    capital: 'Djibouti',
    latitude: 11.595,
    longitude: 43.1481,
  },
  {
    country: 'Egypt',
    capital: 'Cairo',
    latitude: 30.0561,
    longitude: 31.2394,
  },
  {
    country: 'Equatorial Guinea',
    capital: 'Malabo',
    latitude: 3.7521,
    longitude: 8.7737,
  },
  {
    country: 'Eritrea',
    capital: 'Asmara',
    latitude: 15.3333,
    longitude: 38.9167,
  },
  {
    country: 'Ethiopia',
    capital: 'Addis Ababa',
    latitude: 9.0272,
    longitude: 38.7369,
  },
  {
    country: 'Gabon',
    capital: 'Libreville',
    latitude: 0.3901,
    longitude: 9.4544,
  },
  {
    country: 'Gambia',
    capital: 'Banjul',
    latitude: 13.4531,
    longitude: -16.5775,
  },
  {
    country: 'Ghana',
    capital: 'Accra',
    latitude: 5.6037,
    longitude: -0.187,
  },
  {
    country: 'Guinea',
    capital: 'Conakry',
    latitude: 9.5092,
    longitude: -13.7122,
  },
  {
    country: 'Guinea-Bissau',
    capital: 'Bissau',
    latitude: 11.8592,
    longitude: -15.5956,
  },
  {
    country: 'Ivory Coast',
    capital: 'Abidjan and Yamoussoukro',
    latitude: 5.345317,
    longitude: -4.024429,
  },
  {
    country: 'Kenya',
    capital: 'Nairobi',
    latitude: -1.2864,
    longitude: 36.8172,
  },
  {
    country: 'Lesotho',
    capital: 'Maseru',
    latitude: -29.31,
    longitude: 27.48,
  },
  {
    country: 'Liberia',
    capital: 'Monrovia',
    latitude: 6.3106,
    longitude: -10.8047,
  },
  {
    country: 'Libya',
    capital: 'Tripoli',
    latitude: 32.8752,
    longitude: 13.1875,
  },
  {
    country: 'Madagascar',
    capital: 'Antananarivo',
    latitude: -18.9386,
    longitude: 47.5214,
  },
  {
    country: 'Malawi',
    capital: 'Lilongwe',
    latitude: -13.9833,
    longitude: 33.7833,
  },
  {
    country: 'Mali',
    capital: 'Bamako',
    latitude: 12.6458,
    longitude: -7.9922,
  },
  {
    country: 'Mauritania',
    capital: 'Nouakchott',
    latitude: 18.0858,
    longitude: -15.9785,
  },
  {
    country: 'Mauritius',
    capital: 'Port Louis',
    latitude: -20.1667,
    longitude: 57.5,
  },
  {
    country: 'Mayotte',
    capital: 'Dzaoudzi and Mamoudzou',
    latitude: -12.7871,
    longitude: 45.275,
  },
  {
    country: 'Morocco',
    capital: 'Rabat',
    latitude: 34.0253,
    longitude: -6.8361,
  },
  {
    country: 'Mozambique',
    capital: 'Maputo',
    latitude: -25.9153,
    longitude: 32.5764,
  },
  {
    country: 'Namibia',
    capital: 'Windhoek',
    latitude: -22.57,
    longitude: 17.0836,
  },
  {
    country: 'Niger',
    capital: 'Niamey',
    latitude: 13.5086,
    longitude: 2.1111,
  },
  {
    country: 'Nigeria',
    capital: 'Abuja',
    latitude: 9.0556,
    longitude: 7.4914,
  },
  {
    country: 'Reunion',
    capital: 'Saint-Denis',
    latitude: -20.8789,
    longitude: 55.4481,
  },
  {
    country: 'Rwanda',
    capital: 'Kigali',
    latitude: -1.9536,
    longitude: 30.0606,
  },
  {
    country: 'Sao Tome and Principe',
    capital: 'Sao Tome',
    latitude: 0.3333,
    longitude: 6.7333,
  },
  {
    country: 'Senegal',
    capital: 'Dakar',
    latitude: 14.7319,
    longitude: -17.4572,
  },
  {
    country: 'Seychelles',
    capital: 'Victoria',
    latitude: -4.6236,
    longitude: 55.4544,
  },
  {
    country: 'Sierre Leone',
    capital: 'Freetown',
    latitude: 8.4833,
    longitude: -13.2331,
  },
  {
    country: 'Somalia',
    capital: 'Mogadishu',
    latitude: 2.0408,
    longitude: 45.3425,
  },
  {
    country: 'South Africa\t',
    capital: 'Cape Town (Legislative)',
    latitude: -33.925,
    longitude: 18.425,
  },
  {
    country: 'St. Helena',
    capital: 'Jamestown',
    latitude: -15.9251,
    longitude: -5.7179,
  },
  {
    country: 'Swaziland',
    capital: 'Mbabane and Lobamba',
    latitude: -26.3208,
    longitude: 31.1617,
  },
  {
    country: 'Tanzania',
    capital: 'Dar es Salaam',
    latitude: -6.8,
    longitude: 39.2833,
  },
  {
    country: 'Togo',
    capital: 'Lome',
    latitude: 6.1319,
    longitude: 1.2228,
  },
  {
    country: 'Tunisia',
    capital: 'Tunis',
    latitude: 36.8008,
    longitude: 10.18,
  },
  {
    country: 'Uganda',
    capital: 'Kampala',
    latitude: 0.31569,
    longitude: 32.57811,
  },
  {
    country: 'Zambia',
    capital: 'Lusaka',
    latitude: -15.4167,
    longitude: 28.2833,
  },
  {
    country: 'Zimbabwe',
    capital: 'Harare',
    latitude: -17.8292,
    longitude: 31.0522,
  },
];

export default countryCoordinates;
