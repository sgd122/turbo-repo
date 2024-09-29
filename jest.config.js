module.exports = {
  setupFilesAfterEnv: ["<rootDir>/../../jest.setup.ts"],
  testPathIgnorePatterns: ["node_modules"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["/node_modules/", "\\.svg"],
};
