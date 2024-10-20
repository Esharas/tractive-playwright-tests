module.exports = {
    timeout: 60000,
    retries: 2,
    use: {
      headless: false,  // Set to true for headless browser tests
      viewport: { width: 1280, height: 720 },
      actionTimeout: 10000,
    },
    
    globalSetup: require.resolve('./global-setup.js'),
    
 
  
  };
  