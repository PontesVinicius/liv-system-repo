import React from 'react'
import { Link } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import useMediaQuery from '@mui/material/useMediaQuery';

function TabBar() {
    const [value, setValue] = React.useState(0);
    const matches = useMediaQuery('(min-width:600px)');

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            {!matches && (
                <div style={{ position: 'absolute', bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                    <Tabs style={{ display: 'flex', justifyContent: 'center' }} value={value} onChange={handleChange} aria-label="mobile-tabs">
                        <Tab icon={<HomeIcon />} label="HOME" component={Link} to="/" />
                        <Tab icon={<ContactPhoneIcon />} label="CONTATO" component={Link} to='/contact' />
                        <Tab icon={<InfoIcon />} label="SOBRE NÓS" component={Link} to="/about-us" />
                        <Tab icon={<LoginIcon />} label="ENTRAR" component={Link} to="/" disabled />
                    </Tabs>
                </div>
            )}
        </>
    );
}

export default TabBar