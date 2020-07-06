import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}<Link color="inherit" href="https://prashant.work" target='_blank'>grandeur{' '}
            {(new Date().getFullYear())-1} -
            {new Date().getFullYear()} all right reserved.</Link>
        </Typography>
    );
}
export default Copyright
