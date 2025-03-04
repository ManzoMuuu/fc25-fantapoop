import axios from 'axios';

const API_KEY = 'tuo_api_key';  // Sostituisci con la tua chiave

export const searchPlayers = async (searchTerm) => {
  try {
    const response = await axios.get('https://drop-api.ea.com/rating/ea-sports-fc', {
      params: {
        locale: language,
        offset: index,      
        limit: maxNumber,
        search: searchTerm
      }
    });
    return response.data;
  } catch (error) {
    console.error('Errore API:', error);
    return [];
  }
};