import algeriaImg from '../assets/algeria.svg';
import angolaImg from '../assets/angola.svg';
import beninImg from '../assets/benin.svg';
import botswanaImg from '../assets/botswana.svg';
import burkinaFusoImg from '../assets/burkina-fuso.svg';
import burundiImg from '../assets/burundi.svg';
import cameroonImg from '../assets/cameroon.svg';
import centralRepublicImg from '../assets/central-african-republic.svg';
import chadImg from '../assets/chad.svg';
import comorosImg from '../assets/comoros.svg';
import congoDrImg from '../assets/congo-dr.svg';
import congoImg from '../assets/congo.svg';
import coteDevoireImg from '../assets/cote-devoire.svg';
import djiboutiImg from '../assets/djibouti.svg';
import egyptImg from '../assets/egypt-svg.svg';
import equatorialGuineaImg from '../assets/equatorial-guinea.svg';
import guineaImg from '../assets/guinea.svg';
import eritreaImg from '../assets/eritrea.svg';
import ethiopiaImg from '../assets/ethiopia.svg';
import gabonImg from '../assets/gabon.svg';
import gambiaImg from '../assets/gambia.svg';
import ghanaImg from '../assets/ghana.svg';
import guineaBissauImg from '../assets/guinea-bissau.svg';
import kenyaImg from '../assets/kenya.svg';
import lesothoImg from '../assets/lesotho.svg';
import liberiaImg from '../assets/liberia.svg';
import libyaImg from '../assets/libya.svg';
import madagascarImg from '../assets/madagascar.svg';
import malawiImg from '../assets/malawi.svg';
import maliImg from '../assets/mali.svg';
import mauritaniaImg from '../assets/mauritania.svg';
import mauritiusImg from '../assets/mauritius.png';
import morroccoImg from '../assets/morrocco.svg';
import mozambiqueImg from '../assets/mozambique.svg';
import namibiaImg from '../assets/namibia.svg';
import nigerImg from '../assets/niger.svg';
import nigeriaImg from '../assets/nigeria.svg';
import rwandaImg from '../assets/rwanda.svg';
import saotaoImg from '../assets/saotao.png';
import senegalImg from '../assets/senegal.png';
import seychellesImg from '../assets/seychelles.svg';
import sierraLeoneImg from '../assets/sierra-leone.svg';
import somaliaImg from '../assets/somalia.svg';
import southAfricaImg from '../assets/south-africa.svg';
import sudanImg from '../assets/sudan.svg';
import tanzaniaImg from '../assets/tanzania.svg';
import togoImg from '../assets/togo.svg';
import tunisiaImg from '../assets/tunisia.svg';
import ugandaImg from '../assets/uganda.svg';
import zambiaImg from '../assets/zambia.svg';
import zimbabweImg from '../assets/zimbabwe.svg';
import capeVerdeImg from '../assets/cape-verde.svg';

const countryCoordinates = [
  {
    country: 'Algeria',
    capital: 'Algiers',
    latitude: 36.753769,
    longitude: 3.058756,
    imgUrl: algeriaImg,
  },
  {
    country: 'Angola',
    capital: 'Luanda',
    latitude: -8.8383,
    longitude: 13.2344,
    imgUrl: angolaImg,
  },
  {
    country: 'Benin',
    capital: 'Porto-Novo',
    latitude: 6.4833,
    longitude: 2.6167,
    imgUrl: beninImg,
  },
  {
    country: 'Botswana',
    capital: 'Gaborone',
    latitude: -24.6569,
    longitude: 25.9086,
    imgUrl: botswanaImg,
  },
  {
    country: 'Burkina Faso',
    capital: 'Ouagadougou',
    latitude: 12.3572,
    longitude: -1.5353,
    imgUrl: burkinaFusoImg,
  },
  {
    country: 'Burundi',
    capital: 'Bujumbura',
    latitude: -3.3825,
    longitude: 29.3611,
    imgUrl: burundiImg,
  },
  {
    country: 'Cameroon',
    capital: 'Yaounde',
    latitude: 3.8578,
    longitude: 11.5181,
    imgUrl: cameroonImg,
  },
  {
    country: 'Cape Verde',
    capital: 'Praia',
    latitude: 14.9177,
    longitude: -23.5092,
    imgUrl: capeVerdeImg,
  },
  {
    country: 'Central African Republic',
    capital: 'Bangui',
    latitude: 4.3732,
    longitude: 18.5628,
    imgUrl: centralRepublicImg,
  },
  {
    country: 'Chad',
    capital: "N'Djamena",
    latitude: 12.11,
    longitude: 15.05,
    imgUrl: chadImg,
  },
  {
    country: 'Comoros',
    capital: 'Moroni',
    latitude: -11.7036,
    longitude: 43.2536,
    imgUrl: comorosImg,
  },
  {
    country: 'Congo',
    capital: 'Brazzaville',
    latitude: -4.2667,
    longitude: 15.2833,
    imgUrl: congoImg,
  },
  {
    country: "Ivory Coast (Cote d'Ivoire)",
    capital: 'Yamoussoukro',
    latitude: 6.8161,
    longitude: -5.2742,
    imgUrl: coteDevoireImg,
  },
  {
    country: 'Djibouti',
    capital: 'Djibouti',
    latitude: 11.595,
    longitude: 43.1481,
    imgUrl: djiboutiImg,
  },
  {
    country: 'Egypt',
    capital: 'Cairo',
    latitude: 30.0561,
    longitude: 31.2394,
    imgUrl: egyptImg,
  },
  {
    country: 'Equatorial Guinea',
    capital: 'Malabo',
    latitude: 3.7521,
    longitude: 8.7737,
    imgUrl: equatorialGuineaImg,
  },
  {
    country: 'Eritrea',
    capital: 'Asmara',
    latitude: 15.3333,
    longitude: 38.9167,
    imgUrl: eritreaImg,
  },
  {
    country: 'Ethiopia',
    capital: 'Addis Ababa',
    latitude: 9.0272,
    longitude: 38.7369,
    imgUrl: ethiopiaImg,
  },
  {
    country: 'Gabon',
    capital: 'Libreville',
    latitude: 0.3901,
    longitude: 9.4544,
    imgUrl: gabonImg,
  },
  {
    country: 'Gambia',
    capital: 'Banjul',
    latitude: 13.4531,
    longitude: -16.5775,
    imgUrl: gambiaImg,
  },
  {
    country: 'Ghana',
    capital: 'Accra',
    latitude: 5.6037,
    longitude: -0.187,
    imgUrl: ghanaImg,
  },
  {
    country: 'Guinea',
    capital: 'Conakry',
    latitude: 9.5092,
    longitude: -13.7122,
    imgUrl: guineaImg,
  },
  {
    country: 'Guinea-Bissau',
    capital: 'Bissau',
    latitude: 11.8592,
    longitude: -15.5956,
    imgUrl: guineaBissauImg,
  },
  {
    country: 'Kenya',
    capital: 'Nairobi',
    latitude: -1.2864,
    longitude: 36.8172,
    imgUrl: kenyaImg,
  },
  {
    country: 'Lesotho',
    capital: 'Maseru',
    latitude: -29.31,
    longitude: 27.48,
    imgUrl: lesothoImg,
  },
  {
    country: 'Liberia',
    capital: 'Monrovia',
    latitude: 6.3106,
    longitude: -10.8047,
    imgUrl: liberiaImg,
  },
  {
    country: 'Libya',
    capital: 'Tripoli',
    latitude: 32.8752,
    longitude: 13.1875,
    imgUrl: libyaImg,
  },
  {
    country: 'Madagascar',
    capital: 'Antananarivo',
    latitude: -18.9386,
    longitude: 47.5214,
    imgUrl: madagascarImg,
  },
  {
    country: 'Malawi',
    capital: 'Lilongwe',
    latitude: -13.9833,
    longitude: 33.7833,
    imgUrl: malawiImg,
  },
  {
    country: 'Mali',
    capital: 'Bamako',
    latitude: 12.6458,
    longitude: -7.9922,
    imgUrl: maliImg,
  },
  {
    country: 'Mauritania',
    capital: 'Nouakchott',
    latitude: 18.0858,
    longitude: -15.9785,
    imgUrl: mauritaniaImg,
  },
  {
    country: 'Mauritius',
    capital: 'Port Louis',
    latitude: -20.1667,
    longitude: 57.5,
    imgUrl: mauritiusImg,
  },
  {
    country: 'Morocco',
    capital: 'Rabat',
    latitude: 34.0253,
    longitude: -6.8361,
    imgUrl: morroccoImg,
  },
  {
    country: 'Mozambique',
    capital: 'Maputo',
    latitude: -25.9153,
    longitude: 32.5764,
    imgUrl: mozambiqueImg,
  },
  {
    country: 'Namibia',
    capital: 'Windhoek',
    latitude: -22.57,
    longitude: 17.0836,
    imgUrl: namibiaImg,
  },
  {
    country: 'Niger',
    capital: 'Niamey',
    latitude: 13.5086,
    longitude: 2.1111,
    imgUrl: nigerImg,
  },
  {
    country: 'Nigeria',
    capital: 'Abuja',
    latitude: 9.0556,
    longitude: 7.4914,
    imgUrl: nigeriaImg,
  },
  {
    country: 'Rwanda',
    capital: 'Kigali',
    latitude: -1.9536,
    longitude: 30.0606,
    imgUrl: rwandaImg,
  },
  {
    country: 'Sao Tome and Principe',
    capital: 'Sao Tome',
    latitude: 0.3333,
    longitude: 6.7333,
    imgUrl: saotaoImg,
  },
  {
    country: 'Senegal',
    capital: 'Dakar',
    latitude: 14.7319,
    longitude: -17.4572,
    imgUrl: senegalImg,
  },
  {
    country: 'Seychelles',
    capital: 'Victoria',
    latitude: -4.6236,
    longitude: 55.4544,
    imgUrl: seychellesImg,
  },
  {
    country: 'Sierre Leone',
    capital: 'Freetown',
    latitude: 8.4833,
    longitude: -13.2331,
    imgUrl: sierraLeoneImg,
  },
  {
    country: 'Somalia',
    capital: 'Mogadishu',
    latitude: 2.0408,
    longitude: 45.3425,
    imgUrl: somaliaImg,
  },
  {
    country: 'South Africa',
    capital: 'Cape Town (Legislative)',
    latitude: -33.925,
    longitude: 18.425,
    imgUrl: southAfricaImg,
  },
  {
    country: 'Tanzania',
    capital: 'Dar es Salaam',
    latitude: -6.8,
    longitude: 39.2833,
    imgUrl: tanzaniaImg,
  },
  {
    country: 'Togo',
    capital: 'Lome',
    latitude: 6.1319,
    longitude: 1.2228,
    imgUrl: togoImg,
  },
  {
    country: 'Tunisia',
    capital: 'Tunis',
    latitude: 36.8008,
    longitude: 10.18,
    imgUrl: tunisiaImg,
  },
  {
    country: 'Uganda',
    capital: 'Kampala',
    latitude: 0.31569,
    longitude: 32.57811,
    imgUrl: ugandaImg,
  },
  {
    country: 'Zambia',
    capital: 'Lusaka',
    latitude: -15.4167,
    longitude: 28.2833,
    imgUrl: zambiaImg,
  },
  {
    country: 'Zimbabwe',
    capital: 'Harare',
    latitude: -17.8292,
    longitude: 31.0522,
    imgUrl: zimbabweImg,
  },
  {
    country: 'Sudan',
    capital: 'Khartoum',
    latitude: 12.8628,
    longitude: 30.2176,
    imgUrl: sudanImg,
  },
];

export default countryCoordinates;
