import { makeStyles } from '@material-ui/core/styles' 

export default makeStyles( () => ({
    root: {
        width: '100%',
      },
    logo: {
        color:"#fff",
        textDecoration:"none",
        cursor: "pointer",
        display:'flex',
        alignItems:'center',
    
        '&:hover': {
           color: '#c5cae9',
          }
    },
    logoPartOne: {
        color: "#00332d",
        fontWeight:"700",
        fontSize:"24px",
        '&:hover': {
            color: '#001a17',
           }
    },
    author:{
        color:"#00332d",
        display:"flex",
        justifyContent:"space-around",
        fontFamily:"monospace",
        fontSize:"14px",
        marginTop:"30px"
    },
    navbar: {
        backgroundColor:'#00695c'
    },
    container: {
        maxHeight: 600,
    },
    termsContainer: {
        margin: "70px auto 0 auto"
    },
    termsCell: {
        cursor: "pointer"
    },

    singleTermWrapper: {
        margin: "80px auto 0 auto"
    },
    headings: {
        width:'fit-content',
        margin: "0 auto 20px auto",
        display: "flex",
        alignItems: "center"
    }
    
}));