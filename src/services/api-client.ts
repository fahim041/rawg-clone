import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5ca9fd7682794cab838ad08dce7a50c2',
  },
});
