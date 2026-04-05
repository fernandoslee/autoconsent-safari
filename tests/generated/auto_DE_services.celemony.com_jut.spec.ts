import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_services.celemony.com_jut', ['https://services.celemony.com/en/start'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
