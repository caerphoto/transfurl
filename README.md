# Transfurl

## Installation

Since the server part is a Node app, you'll need [Node.js](https://nodejs.org)
on the target compouter, to listen for incoming URL requests.

Once you have the repo cloned, run `npm install` to install the two dependencies
(*open* for doing the open-in-browser part, and *validator* for making sure the
requested URL is valid).

# Usage

This is a two-part application that works like this:

* Start the **server**, a Node app, on Computer A with `npm start`.

* Open the **client**, a simple HTML page, on Computer B.

* Enter Computer A's IP address in the *Server* box on this page, and a URL
  to open in the *URL* box, and click *Send*.

* The server, upon receiving for the request from Computer B, will open the URL
  in Computer A's default browser.

That's all there is to it.
