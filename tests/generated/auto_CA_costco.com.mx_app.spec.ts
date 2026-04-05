import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_costco.com.mx_app', ['https://www.costco.com.mx/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
