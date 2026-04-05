import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cap.cloud.sap_1da', ['https://cap.cloud.sap/docs/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
