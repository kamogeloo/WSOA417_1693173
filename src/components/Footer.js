import React, { Component } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';


export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className= 'socialMedia'>
                <p>&copy; 2021-Student 1693173, University of the Witwatersrand, Johannesburg.</p>
                <a href='https://www.instagram.com/kamo_mafaesa/'> <InstagramIcon/> </a>
                <a href= 'https://www.facebook.com/kamo.jasmine'> <FacebookIcon/> </a>
                <a href='www.linkedin.com/in/kamogelo-mafaesa-93a1681b5'> <LinkedInIcon/></a>
                 
                 
                
                </div>
                
            </div>
        )
    }
}
