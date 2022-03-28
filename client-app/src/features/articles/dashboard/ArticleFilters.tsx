import { Card, CardHeader, MenuItem } from "@mui/material";
import React from "react";

export default function ArticleFilters() {
  return (
    <>
      <Card>
        <div className="Container">
        <h2>Filters</h2>
        </div>

        <MenuItem>All Articles</MenuItem>
        <MenuItem>All Comments</MenuItem>
        <MenuItem>My Articles</MenuItem>
      </Card>
    </>
  )
}