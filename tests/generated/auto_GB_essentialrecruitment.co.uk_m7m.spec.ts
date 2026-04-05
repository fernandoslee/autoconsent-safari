import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_essentialrecruitment.co.uk_m7m', ['https://www.essentialrecruitment.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
