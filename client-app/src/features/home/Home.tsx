import { Card, CardContent, CardHeader } from '@mui/material';
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Card>
      <CardHeader /> Home Page
      <CardContent>
        <h3>Go to <Link to='/articles'>Articles</Link></h3>
      </CardContent>
    </Card>
  )
}