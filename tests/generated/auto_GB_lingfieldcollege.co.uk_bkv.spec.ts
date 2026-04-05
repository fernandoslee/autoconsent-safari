import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lingfieldcollege.co.uk_bkv', ['https://www.lingfieldcollege.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
