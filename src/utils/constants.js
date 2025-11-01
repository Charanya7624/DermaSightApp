// App-wide constants and configuration

export const COLORS = {
  primary: '#21808D',
  secondary: '#10B981',
  danger: '#EF4444',
  warning: '#F59E0B',
  background: '#F9FAFB',
  darkBackground: '#1F2937',
  white: '#FFFFFF',
  text: '#1F2937',
  textSecondary: '#6B7280',
  success: '#10B981',
  border: '#E5E7EB',
};

export const SIZES = {
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
};

export const DISEASE_INFO = {
  'Melanoma': {
    description: 'A serious form of skin cancer that develops in melanocytes.',
    symptoms: 'Irregular borders, multiple colors, asymmetrical shape',
    recommendation: 'See a dermatologist immediately',
    severity: 'HIGH',
  },
  'Basal Cell Carcinoma': {
    description: 'Most common type of skin cancer, grows slowly.',
    symptoms: 'Pearly bump, flat scar-like area, bleeding sore',
    recommendation: 'Consult dermatologist within 1-2 weeks',
    severity: 'MEDIUM',
  },
  'Actinic Keratosis': {
    description: 'Precancerous skin growth caused by sun exposure.',
    symptoms: 'Rough, scaly patches on sun-exposed areas',
    recommendation: 'Schedule dermatologist appointment',
    severity: 'MEDIUM',
  },
  'Benign': {
    description: 'Non-cancerous growth or lesion.',
    symptoms: 'Stable size, regular borders, single color',
    recommendation: 'Monitor for changes, routine checkup',
    severity: 'LOW',
  },
  'Eczema': {
    description: 'Inflammatory skin condition causing itchy, red patches.',
    symptoms: 'Dry, itchy, inflamed skin',
    recommendation: 'Use moisturizers, avoid triggers',
    severity: 'LOW',
  },
  'Psoriasis': {
    description: 'Autoimmune condition causing rapid skin cell buildup.',
    symptoms: 'Red patches with silvery scales',
    recommendation: 'Dermatologist for treatment options',
    severity: 'MEDIUM',
  },
};

export const APP_CONFIG = {
  name: 'DermaSight',
  version: '1.0.0',
  description: 'AI-Powered Skin Disease Detection',
  accuracy: '87%',
};
