import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { COLORS } from '../utils/constants';

const HomeScreen = ({ navigation }) => {
  // Request camera permissions
  const requestCameraPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Camera permission is required to take photos.');
      return false;
    }
    return true;
  };

  // Handle camera capture
  const handleCamera = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) return;

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      navigation.navigate('Result', { imageUri: result.assets[0].uri });
    }
  };

  // Handle gallery selection
  const handleGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      navigation.navigate('Result', { imageUri: result.assets[0].uri });
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.emoji}>👁️</Text>
        <Text style={styles.title}>DermaSight</Text>
        <Text style={styles.subtitle}>AI-Powered Skin Disease Detection</Text>
        <Text style={styles.description}>
          Upload or capture an image for instant AI-powered analysis of skin conditions
        </Text>
      </View>

      {/* Upload Options */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Get Started</Text>
        
        <TouchableOpacity 
          style={[styles.button, styles.primaryButton]} 
          onPress={handleCamera}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonIcon}>📷</Text>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonTitle}>Take Photo</Text>
            <Text style={styles.buttonSubtitle}>Use camera to capture</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.secondaryButton]} 
          onPress={handleGallery}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonIcon}>🖼️</Text>
          <View style={styles.buttonTextContainer}>
            <Text style={[styles.buttonTitle, styles.secondaryText]}>Choose from Gallery</Text>
            <Text style={[styles.buttonSubtitle, styles.secondaryText]}>Select existing image</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>87%</Text>
          <Text style={styles.statLabel}>Accuracy</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>6+</Text>
          <Text style={styles.statLabel}>Conditions</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{'<2s'}</Text>
          <Text style={styles.statLabel}>Response</Text>
        </View>
      </View>

      {/* Tips Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📝 Photo Tips</Text>
        <View style={styles.tipsCard}>
          <Text style={styles.tip}>• Use good lighting (natural light preferred)</Text>
          <Text style={styles.tip}>• Focus clearly on the affected area</Text>
          <Text style={styles.tip}>• Avoid shadows and reflections</Text>
          <Text style={styles.tip}>• Keep the camera steady</Text>
          <Text style={styles.tip}>• Fill the frame with the skin condition</Text>
        </View>
      </View>

      {/* Disclaimer */}
      <View style={styles.disclaimer}>
        <Text style={styles.disclaimerIcon}>⚕️</Text>
        <Text style={styles.disclaimerText}>
          This app provides AI-assisted analysis only. Always consult a qualified 
          dermatologist for professional medical advice and diagnosis.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  hero: {
    backgroundColor: COLORS.primary,
    padding: 30,
    paddingTop: 40,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 70,
    marginBottom: 15,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: '600',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: COLORS.white,
    textAlign: 'center',
    opacity: 0.95,
    paddingHorizontal: 20,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 15,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
  },
  secondaryButton: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  buttonIcon: {
    fontSize: 40,
    marginRight: 15,
  },
  buttonTextContainer: {
    flex: 1,
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  buttonSubtitle: {
    fontSize: 14,
    color: COLORS.white,
    opacity: 0.9,
  },
  secondaryText: {
    color: COLORS.primary,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 2,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  tipsCard: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 12,
    elevation: 2,
  },
  tip: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 10,
    lineHeight: 20,
  },
  disclaimer: {
    flexDirection: 'row',
    backgroundColor: '#FEF3C7',
    margin: 20,
    padding: 15,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.warning,
  },
  disclaimerIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  disclaimerText: {
    flex: 1,
    fontSize: 12,
    color: '#92400E',
    lineHeight: 18,
  },
});

export default HomeScreen;
