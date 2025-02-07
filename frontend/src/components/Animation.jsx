import { TypeAnimation } from 'react-type-animation';

const Animation = () => {
    return (
                      <TypeAnimation
                          sequence={[
                            
                              'Your Dream Job, One Click Away!',
                              1000, 
                              'Connecting Talent with Opportunity!',
                              1000,
                              'Find. Apply. Succeed!',
                              1000,
                              'Unlock Your Career Potential!',
                              1000,
                              'Jobs That Match Your Ambition!',
                              1000
                          ]}
                          wrapper="span"
                          speed={50}
                          style={{ fontSize: '1.5em', display: 'inline-block' }}
                          repeat={Infinity}
                      />
                      );
  };
  export default Animation