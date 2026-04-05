import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_NL_account.flitsmeister.com_31o',
    ['https://account.flitsmeister.com/en/login?consentId=1ed03f22-77c1-4fa8-89cd-13122151bb33'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] },
);
