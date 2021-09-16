import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as H from './index.styled';
export default function HomeLayout() {
  // const [bgp, setbgp] = useState(0);
  const [bgp, setBgp] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgp(bgp => bgp + 0.5);
    }, 50);
    return () => clearInterval(interval);
  }, []);
  return (
    <H.HomeWrapper bgp={bgp}>
      <h1>I GIF</h1>
      <H.LinksWrapper>
        <Link to="/login">Sign In</Link>
        <Link to="/register">Sign Up</Link>
      </H.LinksWrapper>
    </H.HomeWrapper>
  );
}
