import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { COLORS, APP_CONFIG } from '../utils/constants';

const AboutScreen = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      {/* App Header */}
      <View style={styles.header}>
        <Text style={styles.emoji}>👁️</Text>
        <Text style={styles.appName}>{APP_CONFIG.name}</Text>
        <Text style={styles.version}>Version {APP_CONFIG.version}</Text>
      </View>

      {/* Mission Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎯 Our Mission</Text>
        <Text style={styles.text}>
          To provide accessible, AI-powered skin disease detection to help people 
          identify potential skin conditions early and seek appropriate medical care.
        </Text>
      </View>

      {/* Technology Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔬 Technology</Text>
        <Text style={styles.text}>
          Our AI model is trained on thousands of dermatological images to recognize 
          multiple skin conditions with {APP_CONFIG.accuracy} accuracy. The system uses 
          advanced deep learning algorithms to provide instant analysis.
        </Text>
      </View>

      {/* Features Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✨ Features</Text>
        <View style={styles.featureItem}>
          <Text style={styles.featureBullet}>•</Text>
          <Text style={styles.featureText}>Instant AI-powered skin analysis</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureBullet}>•</Text>
          <Text style={styles.featureText}>Camera and gallery integration</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureBullet}>•</Text>
          <Text style={styles.featureText}>Classification history tracking</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureBullet}>•</Text>
          <Text style={styles.featureText}>AI chatbot for medical Q&A</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureBullet}>•</Text>
          <Text style={styles.featureText}>Comprehensive disease information</Text>
        </View>
      </View>

      {/* Medical Disclaimer */}
      <View style={styles.disclaimer}>
        <Text style={styles.disclaimerTitle}>⚕️ Medical Disclaimer</Text>
        <Text style={styles.disclaimerText}>
          DermaSight is not a substitute for professional medical advice, diagnosis, 
          or treatment. Always consult with a qualified dermatologist for accurate 
          diagnosis and treatment recommendations. This app is intended for educational 
          and informational purposes only.
        </Text>
      </View>

      {/* Contact Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📧 Contact & Support</Text>
        <TouchableOpacity 
          style={styles.linkButton}
          onPress={() => openLink('mailto:support@dermasight.com')}
        >
          <Text style={styles.linkText}>Email: support@dermasight.com</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.linkButton}
          onPress={() => openLink('https://dermasight.com')}
        >
          <Text style={styles.linkText}>Website: www.dermasight.com</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 DermaSight</Text>
        <Text style={styles.footerSubtext}>Made with ❤️ for early detection</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.primary,
    padding: 40,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 60,
    marginBottom: 15,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 5,
  },
  version: {
    fontSize: 14,
    color: COLORS.white,
    opacity: 0.9,
  },
  section: {
    padding: 20,
    backgroundColor: COLORS.white,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 15,
  },
  text: {
    fontSize: 15,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },
  featureItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  featureBullet: {
    fontSize: 18,
    color: COLORS.primary,
    marginRight: 10,
    fontWeight: 'bold',
  },
  featureText: {
    flex: 1,
    fontSize: 15,
    color: COLORS.textSecondary,
    lineHeight: 22,
  },
  disclaimer: {
    backgroundColor: '#FEE2E2',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.danger,
  },
  disclaimerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#991B1B',
    marginBottom: 10,
  },
  disclaimerText: {
    fontSize: 14,
    color: '#991B1B',
    lineHeight: 22,
  },
  linkButton: {
    paddingVertical: 10,
  },
  linkText: {
    fontSize: 15,
    color: COLORS.primary,
    textDecorationLine: 'underline',
  },
  footer: {
    alignItems: 'center',
    padding: 30,
  },
  footerText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 5,
  },
  footerSubtext: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
});

export default AboutScreen;
