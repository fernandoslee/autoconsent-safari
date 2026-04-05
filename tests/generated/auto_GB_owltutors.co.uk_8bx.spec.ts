import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_owltutors.co.uk_8bx', ['https://owltutors.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
