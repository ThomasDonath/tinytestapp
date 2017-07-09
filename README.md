# TestApp

A tiny Node.js application to test container environments and such stuff.

<http://localhost:8080/> returns a greeting message with hostname and port.

```shell
curl -f http://localhost:8080/
```

Message can be customized via $APP_MESSAGE.

The Conatiner uses this URL also as healthcheck.

put <http://localhost:8080/mute> toggles a flag so the server responses to the greeting-URL succuessfully or with http-500, so you can simulate a non working server.

```shell
curl -X POST http://localhost:8080/mute
```

Small and fast to build with

```shell
npm install
npm start

# or within a container
docker run --rm --name tinytestapp -p 8080:8080 -e APP_MESSAGE="yet another greeting from inside a container" tinytestapp
```

To build it as docker image

```shell
docker build -t tinytestapp .
docker tag tinytestapp:latest thomdo/tinytestapp:latest
docker push thomdo/tinytestapp:latest
```
