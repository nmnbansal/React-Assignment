import React, { useEffect } from 'react';

export function ScrollEvent() {

  const handleScroll = () => {
    console.log("Scrollingg");
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      console.log("Removingg");
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  return (
    <div>
      <br/><br/>
      <h4>EventListener</h4>
      <p>Please Scroll</p>
      <p style={{marginTop:"800px"}}>--I'm Here--</p>
    </div>
  );
}
