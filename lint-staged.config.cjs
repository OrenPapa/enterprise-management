module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '**/*.{json,css,scss,md}': ['prettier --write'],
  '**/*.{ts,tsx}': () => 'tsc --noEmit --project tsconfig.lint.json',
};
