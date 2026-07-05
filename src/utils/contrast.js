/**
 * Convertir une couleur hex en RGB
 */
export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

/**
 * Extraire RGB d'une couleur rgb() ou rgba()
 */
export const rgbStringToRgb = (rgbString) => {
  const match = rgbString.match(/\d+/g);
  if (!match || match.length < 3) return null;
  return {
    r: parseInt(match[0]),
    g: parseInt(match[1]),
    b: parseInt(match[2])
  };
};

/**
 * Calculer la luminance relative d'une couleur
 * Basé sur la formule WCAG
 */
export const getLuminance = (rgb) => {
  if (!rgb) return 0.5;
  
  const { r, g, b } = rgb;
  
  // Normaliser les valeurs entre 0 et 1
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;
  
  // Appliquer la formule de sRGB
  const rLinear = rNorm <= 0.03928 ? rNorm / 12.92 : Math.pow((rNorm + 0.055) / 1.055, 2.4);
  const gLinear = gNorm <= 0.03928 ? gNorm / 12.92 : Math.pow((gNorm + 0.055) / 1.055, 2.4);
  const bLinear = bNorm <= 0.03928 ? bNorm / 12.92 : Math.pow((bNorm + 0.055) / 1.055, 2.4);
  
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
};

/**
 * Déterminer la couleur du texte (blanc ou noir) en fonction du contraste
 */
export const getContrastColor = (backgroundColor) => {
  if (!backgroundColor) return '#000000';
  
  let rgb;
  
  // Gérer différents formats de couleur
  if (backgroundColor.startsWith('#')) {
    rgb = hexToRgb(backgroundColor);
  } else if (backgroundColor.startsWith('rgb')) {
    rgb = rgbStringToRgb(backgroundColor);
  } else {
    return '#000000'; // Défaut
  }
  
  const luminance = getLuminance(rgb);
  
  // Seuil : si luminance > 0.5, le fond est clair, utiliser du texte noir
  // Sinon, utiliser du texte blanc
  return luminance > 0.5 ? '#000000' : '#ffffff';
};
