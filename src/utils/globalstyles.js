import typography from './typography';
import { createStyles,makeStyles} from '@mui/styles';
import color from './color';
const useStyles = makeStyles((theme) =>
    createStyles({
        '@global': {
            '*': {
                boxSizing: 'border-box',
                margin: 0,
                padding: 0,
                
                    wordBreak: 'break-word',
            },
            html: {
              
                height: '100%',
                width: '100%'
            },
            body: {
                height: '100%',
                width: '100%',
                wordBreak: 'break-word',
                lineHeight:'normal',
                letterSpacing:'normal',
                color:color.palette.common.dark,
                fontFamily:typography.fontFamily.MotivaRegular
            },
            img: {
                maxWidth: '100%',
                objectFit:'cover',
                height:'100%',
                
            },
            
        },
    })
);
const GlobalStyles = () => {
    useStyles();
    return null;
};

export default GlobalStyles;