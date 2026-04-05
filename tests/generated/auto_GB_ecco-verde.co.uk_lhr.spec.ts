import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ecco-verde.co.uk_lhr', ['https://www.ecco-verde.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
