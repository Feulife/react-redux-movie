import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import classes from './controls.module.css'
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export const Controls = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  useEffect(() => {
    onSearch(search, type || {});
    console.log(type);
  }, [search, type]);

  return (
    <div className={classes.inputField}>
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Your Movie"
          value={search}
          onChange={(e) => { setSearch(e.target.value) }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <div className={classes.radio}>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            color="primary"
          >
            <FormControlLabel
              value="all"
              control={<Radio />}
              label="All"
              autoComplete="on"
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
            <FormControlLabel
              value="movie"
              control={<Radio />}
              label="Movies"
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
            <FormControlLabel
              value="series"
              control={<Radio />}
              label="Series"
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}
