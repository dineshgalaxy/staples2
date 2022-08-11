const Accordion = {
    MuiAccordion: {
        styleOverrides: {
            root: {
                backgroundColor: 'transparent',
                boxShadow: 'none',
                '&::before': {
                    height: '0px'
                }
            },
           


        },

    },
    MuiAccordionSummary: {
        styleOverrides: {
            root: {
                justifyContent: 'flex-start'
            },
            content: {
                flexGrow: 0,
                margin: 0
            },
           
            expandIconWrapper: {
                '& svg': {
                    color: 'white'
                }
            }
        }

    }
};
export default Accordion;
