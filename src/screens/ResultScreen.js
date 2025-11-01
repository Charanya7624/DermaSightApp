import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { COLORS } from '../utils/constants';
import { classifyImage } from '../services/mlservice';
import { saveToHistory } from '../utils/storage';
import DiseaseCard from '../components/DiseaseCard';

const ResultScreen = ({ route, navigation }) => {
  const { imageUri } = route.params;
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);

  useEffect(() => {
    analyzeImage();
  }, []);

  const analyzeImage = async () => {
    try {
      setLoading(true);
      const classification = await classifyImage(imageUri);
      setResult(classification);
      
      // Save to history
      await saveToHistory(classification);
    } catch (error) {
      Alert.alert('Error', 'Failed to analyze image. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.loadingText}>Analyzing image...</Text>
        <Text style={styles.loadingSubtext}>This may take a few seconds</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Image Preview */}
      <Image source={{ uri: imageUri }} style={styles.image} resizeMode="cover" />

      {/* Primary Result */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Analysis Results</Text>
        <DiseaseCard 
          disease={result.primaryDisease} 
          confidence={result.confidence}
        />
      </View>

      {/* Alternative Predictions */}
      {result.alternatives && result.alternatives.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Alternative Possibilities</Text>
          {result.alternatives.map((alt, index) => (
            <View key={index} style={styles.altCard}>
              <Text style={styles.altDisease}>{alt.disease}</Text>
              <Text style={styles.altConfidence}>{alt.confidence}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity 
          style={[styles.actionButton, styles.primaryAction]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.actionButtonText}>New Analysis</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.actionButton, styles.secondaryAction]}
          onPress={() => navigation.navigate('Chatbot')}
        >
          <Text style={[styles.actionButtonText, { color: COLORS.primary }]}>Ask AI</Text>
        </TouchableOpacity>
      </View>

      {/* Medical Disclaimer */}
      <View style={styles.disclaimer}>
        <Text style={styles.disclaimerTitle}>⚠️ Important</Text>
        <Text style={styles.disclaimerText}>
          This is an AI-assisted preliminary analysis and should not replace professional 
          medical diagnosis. Please consult a dermatologist for accurate diagnosis and treatment.
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  loadingText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: 20,
  },
  loadingSubtext: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 8,
  },
  image: {
    width: '100%',
    height: 300,
    backgroundColor: COLORS.border,
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
  altCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  altDisease: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
  },
  altConfidence: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  primaryAction: {
    backgroundColor: COLORS.primary,
  },
  secondaryAction: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  disclaimer: {
    backgroundColor: '#FEE2E2',
    margin: 20,
    padding: 15,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.danger,
  },
  disclaimerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#991B1B',
    marginBottom: 8,
  },
  disclaimerText: {
    fontSize: 13,
    color: '#991B1B',
    lineHeight: 20,
  },
});

export default ResultScreen;
