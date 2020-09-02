# Developing using local k8s cluster

# [Installation](https://skaffold.dev/docs/install/)
Linux and macOS:
```
curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-darwin-amd64 && \
sudo install skaffold /usr/local/bin/
```
With Homebrew
```
brew install skaffold
```

## [Install Kompose](https://kompose.io/installation/)
Linux and macOS:
### Linux
```
curl -L https://github.com/kubernetes/kompose/releases/download/v1.19.0/kompose-linux-amd64 -o kompose
```
### macOS
```
curl -L https://github.com/kubernetes/kompose/releases/download/v1.19.0/kompose-darwin-amd64 -o kompose
```

```
chmod +x kompose
sudo mv ./kompose /usr/local/bin/kompose
```
With Homebrew
```
brew install kompose
```

## Alternatives

* [Draft](https://draft.sh/)
* [Tilt](https://tilt.dev/)
* [Garden](https://garden.io/)
