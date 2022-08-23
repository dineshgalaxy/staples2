const Accordion = {
    MuiAccordion: {
        styleOverrides: {
            root: {
                backgroundColor: 'transparent',
                boxShadow: 'none',
                '&::before': {
                    height: '0px'
                },
                '& .Mui-expanded': {
                    minHeight: '0!important',
                    },
            },
           
            

        },

    },
    MuiAccordionSummary: {
        styleOverrides: {
            root: {
                minHeight: '0!important',
                padding:'0px',
                justifyContent:'flex-start',
                '& .Mui-expanded': {
                    margin: '0!important',
                   
                    },
            },
            content: {
                flexGrow:'0',
                margin: 0,
            },
           
            expandIconWrapper: {
                '& svg': {
                    // color: 'white'
                }
            }
        }

    },
  
};
export default Accordion;
