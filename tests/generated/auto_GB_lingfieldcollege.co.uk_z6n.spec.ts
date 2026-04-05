import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lingfieldcollege.co.uk_z6n', ['https://www.lingfieldcollege.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
