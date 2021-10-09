import React from "react";
import Layout from "./Layout";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { gql, useQuery } from "@apollo/client";

const BLOGS = gql`
  query ExampleQuery {
    blogsForClientSide {
      id
      heading
      thumbnail
      length
      blogCount
      author {
        id
        name
        photo
      }
    }
  }
`;

function BoxComponent() {
  const { loading, error, data } = useQuery(BLOGS);

  if (loading) return "Loading...";
  if (error) return `Error: ${error}`;

  return (
    <div>
      {data?.blogsForClientSide?.map((blogData) => (
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Layout key={blogData.id} blogData={blogData} />
            </Grid>
          </Grid>
        </Container>
      ))}
    </div>
  );
}

export default BoxComponent;
