export const theme = {
	colors: {
		black: '#000',
		white: '#fafafa',
		text: '#2a2a2a',
		background: '#fff',
        divider: '#fafafb', 

        primary: '#22262A',
        secondary: '#262626',
        success: '#40BFFF',
        danger : '#FF4858',
        warning : '#FB7181',
        info : '#33A0FF',
        light: '#BCDDFE',
        dark: '#385C8E',
	},
	space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
	fonts: {
		body: 'Poppins, sans-serif',
		raleway: 'Raleway, sans-serif',
	},
	fontSizes: {
		xs: '12px',
		s: '14px',
		m: '16px',
		l: '32px',
		xl: '64px',
	},
	fontWeights: {
		normal: 400,
        medium: 500,
        SemiBold: 600,
		bold: 700,
        ExtraBold: 800,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.2,
	},
	borders: {
		none: 'none',
		normal: '1px solid',
	},
	boxShadow: {
		primary:
			'0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)',
		accent: '1px 1px 2px rgba(200, 101, 247, 0.219), 2px 3px 4px rgba(200, 101, 247, 0.219)',
	},
    transition: {
        primary: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }
};
