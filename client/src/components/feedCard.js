// import style package here with specific style components
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { FIND_ALL } from "../utils/queries";

const FeedCard = () => {
  // space for any variables like useState
  const { loading, error, data } = useQuery(FIND_ALL);
  const useData = data?.findAll || [];
  console.log(error);
  console.log(useData);
  const feedData = useData.map((data) =>
    data.liveFeed.map((feed, i) => feed.createdAt)
  );
  console.log(feedData);
  return (
    <div className="feed-card">
      {useData.map((user) => {
        return (
          <>
            {user.liveFeed.map((feed) => {
              return (
                <div>
                  {feed.problem === true ? (
                    <Card style={{ width: "35rem", backgroundColor: "red" }}>
                      <Card.Body>
                        <Card.Title>
                          Name: {user.firstname} {user.lastname}{" "}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Date: {feed.createdAt}
                        </Card.Subtitle>
                        <Card.Subtitle>Post: {feed.status}</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  ) : (
                    <Card style={{ width: "35rem" }}>
                      <Card.Body>
                        <Card.Title>
                          Name: {user.firstname} {user.lastname}{" "}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Date: {feed.createdAt}
                        </Card.Subtitle>
                        <Card.Subtitle>Post: {feed.status}</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  )}
                </div>
              );
            })}
          </>
        );
      })}
    </div>
  );
};
export default FeedCard;