import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schwarz-digits.de_emp', ['https://schwarz-digits.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
