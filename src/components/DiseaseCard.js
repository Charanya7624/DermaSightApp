import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, DISEASE_INFO } from '../utils/constants';

const DiseaseCard = ({ disease, confidence }) => {
  const info = DISEASE_INFO[disease] || {};
  const severityColor = 
    info.severity === 'HIGH' ? COLORS.danger :
    info.severity === 'MEDIUM' ? COLORS.warning :
    COLORS.success;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.disease}>{disease}</Text>
        <View style={[styles.badge, { backgroundColor: severityColor }]}>
          <Text style={styles.badgeText}>{info.severity || 'N/A'}</Text>
        </View>
      </View>
      
      <Text style={styles.confidence}>Confidence: {confidence}</Text>
      
      {info.description && (
        <>
          <Text style={styles.sectionTitle}>Description:</Text>
          <Text style={styles.text}>{info.description}</Text>
        </>
      )}
      
      {info.symptoms && (
        <>
          <Text style={styles.sectionTitle}>Symptoms:</Text>
          <Text style={styles.text}>{info.symptoms}</Text>
        </>
      )}
      
      {info.recommendation && (
        <>
          <Text style={styles.sectionTitle}>Recommendation:</Text>
          <Text style={styles.text}>{info.recommendation}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  disease: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    flex: 1,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  confidence: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: '600',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: 12,
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
});

export default DiseaseCard;
