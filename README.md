# TestApp

A tiny Node.js application to test container environments and such.

Small and fast to build with

```shell
npm install
npm start

# or within a container
docker run --rm --name tinytestapp -p 8080:8080 -e "yet another greeting from inside a container" tinytestapp
```

GET returns a message with host name and port; message can be customized via APP_MESSAGE

To build it as docker image

```shell
docker build -t tinytestapp .
docker tag tinytestapp:latest thomdo/tinytestapp:latest
docker push thomdo/tinytestapp:latest
```
