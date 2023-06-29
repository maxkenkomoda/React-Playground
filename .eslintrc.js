module.exports = {
  extends: [
    "@cybozu/eslint-config/presets/node",
    "@cybozu/eslint-config/presets/node-prettier",
    "@cybozu/eslint-config/presets/typescript",
    "@cybozu/eslint-config/presets/typescript-prettier",
    "@cybozu/eslint-config/presets/react-typescript",
    "@cybozu/eslint-config/presets/react-typescript-prettier",
  ],
  rules: {
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] },
    ],
  },
};
