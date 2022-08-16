import { makeStyles } from '@mui/styles';
import typography from '../../../utils/typography';
const useStyles = makeStyles((theme) => ({
    menubar:
    {
        display:'none',
     
        padding:'6px 0',
        '& ul': {
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            '& li': {
                padding: '6px 10px',
                [theme.breakpoints.up('md')]:{
                    padding: '6px 25px',
                } ,
                '& a': {
                    textTransform: 'uppercase',
                    fontSize: typography.sm.fontSize,
                    textDecoration: 'none',
                    color: '#444',
                    fontWeight: 500,
                    fontFamily:typography.fontFamily.MotivaMedium,

                    '& i': {
                        fontSize: '16px',
                        paddingLeft: ' 9px',
                    },
                    [theme.breakpoints.up('md')]:{
                        fontSize: typography.mdsm.fontSize
                    } ,
                }
            }
        },
        [theme.breakpoints.up('xsm')]:{
           display:'block'
        } ,
    },
    menuItem: {
        '& div:nth-child(3)': {
            maxWidth: '920px',
         
            width: '100%',
            boxShadow: 'none',
            border:'1px solid',
            borderRadius:'0px',
            '& ul': {
                width: '100%',
                padding: '0px',
                maxWidth: '230px',
                height: 'auto',
                background: '#f3f3f3',
                '& li':{
                    whiteSpace:'normal',
                    borderBottom:'1px solid #e4e4e4',
                    '&:hover':{
                        color: '#c00',
                        backgroundColor:' #fff',
                }
                }
               
        }
    }
}

}));


export default useStyles;
// @media only screen and (max-width:767px){
//     menubar: 
//     '& barBtn'{
//         position: absolute;
//         top: 68px;
//         left: 10px;
//         display: block;
//     },
//     .menubar{
//         '& ul'{
//             display: 'none',
//         }
//     }
// }