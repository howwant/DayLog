import AsyncStorage from '@react-native-community/async-storage';

const key = 'logs';

const logsStorage = {
  async get() {
    try {
      const raw = await AsyncStorage.getItem(key);
      const parsed = JSON.parse(raw);
      return parsed;
    } catch (e) {
      throw new Error('Failed to load logs');
    }
  },
  async set(date) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(date));
    } catch (e) {
      throw new Error('Failed to load logs');
    }
  },
};

export default logsStorage;
