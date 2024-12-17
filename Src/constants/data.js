export const COUNTRY_CODES = [
    {
        index: 0,
        country: 'Denmark',
        code: '+45',
        icon: require('../assets/icons/flags/Denmark.png')
    },
    {
        index: 1,
        country: 'Sweden',
        code: '+46',
        icon: require('../assets/icons/flags/Sweden.png')
    },
    {
        index: 2,
        country: 'Norway',
        code: '+47',
        icon: require('../assets/icons/flags/Norway.png')
    },
    {
        index: 3,
        country: 'Finland',
        code: '+358',
        icon: require('../assets/icons/flags/Finland.png')
    },
    {
        index: 4,
        country: 'Holland', // Netherlands
        code: '+31',
        icon: require('../assets/icons/flags/Holland.png')
    },
    {
        index: 5,
        country: 'UK',
        code: '+44',
        icon: require('../assets/icons/flags/UK.png')
    },
    {
        index: 6,
        country: 'Spain',
        code: '+34',
        icon: require('../assets/icons/flags/Spain.png')
    },
    {
        index: 7,
        country: 'Deutschland', // Germany
        code: '+49',
        icon: require('../assets/icons/flags/Germany.png')
    },
    {
        index: 8,
        country: 'Belgium',
        code: '+32',
        icon: require('../assets/icons/flags/Belgium.png')
    },
    {
        index: 9,
        country: 'France',
        code: '+33',
        icon: require('../assets/icons/flags/France.png')
    },
    {
        index: 10,
        country: 'Italy',
        code: '+39',
        icon: require('../assets/icons/flags/Italy.png')
    },
    {
        index: 11,
        country: 'Greece',
        code: '+30',
        icon: require('../assets/icons/flags/Greece.png')
    },
    {
        index: 12,
        country: 'Iceland',
        code: '+354',
        icon: require('../assets/icons/flags/Iceland.png')
    },
    {
        index: 13,
        country: 'Ireland',
        code: '+353',
        icon: require('../assets/icons/flags/Ireland.png')
    },
    {
        index: 14,
        country: 'Croatia',
        code: '+385',
        icon: require('../assets/icons/flags/Croatia.png')
    },
    {
        index: 15,
        country: 'Portugal',
        code: '+351',
        icon: require('../assets/icons/flags/Portugal.png')
    }
]

export const PHONE_REGEX = {
    '+45': {
        placeholder: '0000-0000',
        regex: /^\d{4}\-?\d{4}$/
    },
    '+46': {
        placeholder: '000-000-000',
        regex: /^\d{3}\-?\d{3}\-?\d{3}$/
    },
    '+47': {
        placeholder: '00-00-00-00',
        regex: /^\d{2}\-?\d{2}\-?\d{2}\-?\d{2}$/
    },
    '+358': {
        placeholder: '00-000-00-00',
        regex: /^\d{2}\-?\d{3}\-?\d{2}\-?\d{2}$/
    },
    '+31': {
        placeholder: '00-0000000',
        regex: /^\d{2}\-?\d{7}$/
    },
    '+44': {
        placeholder: '0000-000000',
        regex: /^\d{4}\-?\d{6}$/
    },
    '+34': {
        placeholder: '00-0000000',
        regex: /^\d{2}\-?\d{7}$/
    },
    '+49': {
        placeholder: '00-0000-0000',
        regex: /^\d{2}\-?\d{4}\-?\d{4}$/
    },
    '+32': {
        placeholder: '0-000-0000',
        regex: /^\d{1}\-?\d{3}\-?\d{4}$/
    },
    '+33': {
        placeholder: '0-00-00-00-00',
        regex: /^\d{1}\-?\d{2}\-?\d{2}\-?\d{2}\-?\d{2}$/
    },
    '+39': {
        placeholder: '00-00000000',
        regex: /^\d{2}\-?\d{8}$/
    },
    '+30': {
        placeholder: '0000000000',
        regex: /^\d{10}$/
    },
    '+354': {
        placeholder: '0000000',
        regex: /^\d{7}$/
    },
    '+353': {
        placeholder: '00000000',
        regex: /^\d{8}$/
    },
    '+385': {
        placeholder: '0-00-000-000',
        regex: /^\d{1}\-?\d{2}\-?\d{3}\-?\d{3}$/
    },
    '+351': {
        placeholder: '00-000-0000',
        regex: /^\d{2}\-?\d{3}\-?\d{4}$/
    },
}