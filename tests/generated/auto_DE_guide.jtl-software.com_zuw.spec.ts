import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_guide.jtl-software.com_zuw', ['https://guide.jtl-software.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
