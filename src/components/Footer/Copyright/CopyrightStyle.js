import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
    copyright: {
        padding: '34px 0',
        "& ul": {
            display: 'flex',
            justifyContent:'center',
            flexWrap:'wrap',
            '& li': {
                '& + li:before ': {
                    padding: '8px',
                    color:'white',
                    content: "'|' ",
                    fontSize: '13px',
            }
        },
        [theme.breakpoints.up('sm')]:{
            flexWrap:'nowrap'
        }
    }
}
}));


export default useStyles;