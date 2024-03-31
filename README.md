# sse-test

## Description

First try on Server-Sent Events.

When it comes to bidirectional communicaion, people usually first think of WebSocket. However, if the application only need a one-way message push, SSE might be a good way to implement.
Unlike the way of WebSocket to establish session with sending upgrading protocols to server and returning status code 101,  SSE uses a regular HTTP request to establish the connection.
Then, the server responds with the official SSE MIME type (text/event-stream) and streams event data to the client.

SSE is simple, lightweight, and suitable for scenarios where real-time updates are needed without the need for bidirectional communication, for example, ChatGPT, market index timely broadcasting...etc.
