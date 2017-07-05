# TestApp

A tiny Node.js application to test container environments and such.

Small and fast to build with

```shell
npm install
npm start
```

GET returns a message with host name and port; message can be customized via APP_MESSAGE

To build it as docker image

```shell
docker build -t tinytestapp .
docker run --name tinytestapp -p 8080:8080 [-e APP_MESSAGE="another message"] tinytestapp
```