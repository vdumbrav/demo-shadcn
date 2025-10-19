import fs from 'fs';

const FIGMA_TOKEN = fs.readFileSync('.figma-token', 'utf-8').trim();
const FILE_KEY = 'z9nNfdgCnPgPnThMsAKI0C'; // C-Pay Design System

async function fetchFigmaStyles() {
  const response = await fetch(`https://api.figma.com/v1/files/${FILE_KEY}/styles`, {
    headers: {
      'X-Figma-Token': FIGMA_TOKEN,
    },
  });

  if (!response.ok) {
    throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function fetchFigmaFile() {
  const response = await fetch(`https://api.figma.com/v1/files/${FILE_KEY}`, {
    headers: {
      'X-Figma-Token': FIGMA_TOKEN,
    },
  });

  if (!response.ok) {
    throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

function rgbToOklch(r, g, b) {
  // Простая конвертация для демо (для production используйте библиотеку culori)
  // Нормализуем RGB (0-1)
  r = r / 255;
  g = g / 255;
  b = b / 255;

  // Упрощенная формула (для точности используйте culori)
  const l = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  const c = Math.sqrt((r - l) ** 2 + (g - l) ** 2 + (b - l) ** 2);
  const h = Math.atan2(b - l, r - l) * (180 / Math.PI);

  return `oklch(${l.toFixed(3)} ${c.toFixed(3)} ${h.toFixed(3)})`;
}

async function extractTheme() {
  console.log('📦 Fetching Figma file...');
  const fileData = await fetchFigmaFile();
  console.log('📦 Fetching styles...');
  const stylesData = await fetchFigmaStyles();

  console.log('\n🎨 Found styles:', stylesData.meta?.styles?.length || 0);

  // Сохраняем сырые данные для анализа
  fs.writeFileSync('figma-styles.json', JSON.stringify(stylesData, null, 2));

  fs.writeFileSync('figma-file.json', JSON.stringify(fileData, null, 2));

  console.log('\n✅ Данные сохранены в:');
  console.log('  - figma-styles.json');
  console.log('  - figma-file.json');
  console.log('\n📋 Откройте эти файлы для просмотра цветов и токенов');
}

extractTheme().catch(console.error);
