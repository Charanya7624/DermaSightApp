// AsyncStorage utilities for data persistence

import AsyncStorage from '@react-native-async-storage/async-storage';

const HISTORY_KEY = '@dermasight_history';
const SETTINGS_KEY = '@dermasight_settings';

// Save classification to history
export const saveToHistory = async (result) => {
  try {
    const history = await getHistory();
    const newEntry = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...result,
    };
    history.unshift(newEntry); // Add to beginning
    await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 50))); // Keep last 50
    return newEntry;
  } catch (error) {
    console.error('Error saving to history:', error);
    throw error;
  }
};

// Get all history
export const getHistory = async () => {
  try {
    const historyJson = await AsyncStorage.getItem(HISTORY_KEY);
    return historyJson ? JSON.parse(historyJson) : [];
  } catch (error) {
    console.error('Error getting history:', error);
    return [];
  }
};

// Delete specific history item
export const deleteHistoryItem = async (id) => {
  try {
    const history = await getHistory();
    const filtered = history.filter(item => item.id !== id);
    await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error deleting history item:', error);
    throw error;
  }
};

// Clear all history
export const clearHistory = async () => {
  try {
    await AsyncStorage.removeItem(HISTORY_KEY);
  } catch (error) {
    console.error('Error clearing history:', error);
    throw error;
  }
};

// Save app settings
export const saveSettings = async (settings) => {
  try {
    await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (error) {
    console.error('Error saving settings:', error);
    throw error;
  }
};

// Get app settings
export const getSettings = async () => {
  try {
    const settingsJson = await AsyncStorage.getItem(SETTINGS_KEY);
    return settingsJson ? JSON.parse(settingsJson) : { theme: 'light' };
  } catch (error) {
    console.error('Error getting settings:', error);
    return { theme: 'light' };
  }
};
