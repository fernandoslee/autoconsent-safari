import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_airportmap.de_7dl', ['https://airportmap.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
