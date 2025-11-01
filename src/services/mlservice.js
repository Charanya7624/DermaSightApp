// Machine Learning classification service
// This simulates ML predictions - replace with actual API in production

const DISEASES = [
  'Melanoma',
  'Basal Cell Carcinoma',
  'Actinic Keratosis',
  'Benign',
  'Eczema',
  'Psoriasis',
];

// Simulate ML classification (replace with real API call)
export const classifyImage = async (imageUri) => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      // Generate random prediction for demo
      const randomIndex = Math.floor(Math.random() * DISEASES.length);
      const primaryDisease = DISEASES[randomIndex];
      const confidence = (Math.random() * 30 + 65).toFixed(1); // 65-95%

      // Generate alternative predictions
      const alternatives = DISEASES
        .filter(d => d !== primaryDisease)
        .slice(0, 2)
        .map(disease => ({
          disease,
          confidence: (Math.random() * 20 + 5).toFixed(1) + '%',
        }));

      resolve({
        primaryDisease,
        confidence: confidence + '%',
        alternatives,
        imageUri,
        timestamp: new Date().toISOString(),
      });
    }, 2000); // 2 second delay to simulate API call
  });
};

// TODO: Replace above with actual API call:
/*
export const classifyImage = async (imageUri) => {
  const formData = new FormData();
  formData.append('image', {
    uri: imageUri,
    type: 'image/jpeg',
    name: 'skin_image.jpg',
  });

  const response = await fetch('YOUR_ML_API_ENDPOINT', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  });

  return await response.json();
};
*/
