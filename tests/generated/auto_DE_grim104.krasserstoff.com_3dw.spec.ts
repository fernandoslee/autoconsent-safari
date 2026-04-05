import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_grim104.krasserstoff.com_3dw', ['https://grim104.krasserstoff.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
