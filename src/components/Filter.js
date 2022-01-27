import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { useState } from "react";
import Rate from "./Rate";
export default function Filter({ setsearch }) {
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <i class="fas fa-search"></i>
        </InputGroup.Text>
        <FormControl
          placeholder="search by title..."
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => setsearch(e.target.value)}
        />
      </InputGroup>

    </div>
  );
}
