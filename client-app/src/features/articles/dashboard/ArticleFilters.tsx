import { Menu, MenuItem } from "@mui/material";
import React from "react";

export default function ArticleFilters() {
  return (
    <>
      <Menu style={{ width: '100%' }} open>
        <MenuItem>All Articles</MenuItem>
        <MenuItem>All Comments</MenuItem>
        <MenuItem>My Articles</MenuItem>
      </Menu>
    </>
  )
}