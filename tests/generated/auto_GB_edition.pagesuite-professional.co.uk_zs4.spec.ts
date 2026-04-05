import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_edition.pagesuite-professional.co.uk_zs4', ['https://www.pagesuite.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
