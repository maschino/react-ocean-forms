---
title: Getting started
sidebar_label: Getting started
---

Assuming that you already have an up and running React app, otherwise please follow the create-react-app guideline.

After adding the react-ocean-forms package(s) to your project, you can simply import the components you need.

```jsx
import React from 'react';
import { Form, Input } from 'react-ocean-forms';

class GettingStarted = () => {
  const handleSubmit = (values) => {
    console.log('form submitted with', values);
  }

  return (
    <Form onSubmit={this.handleSubmit}>
      <Input name="myInput" label="Example input" />
      <button type="submit">Submit</button>
    </Form>
  );
}

export default GettingStarted;
```
