import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_siphoxhealth.com_5rs', ['https://siphoxhealth.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
