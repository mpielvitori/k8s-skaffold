# Developing using local k8s cluster

## [Install Skaffold](https://skaffold.dev/docs/install/)
#### Linux and macOS:
```
curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-darwin-amd64 && \
sudo install skaffold /usr/local/bin/
```
#### With Homebrew
```
brew install skaffold
```

## [Install Kompose](https://kompose.io/installation/)
Linux and macOS:
#### Linux
```
curl -L https://github.com/kubernetes/kompose/releases/download/v1.19.0/kompose-linux-amd64 -o kompose
```
#### macOS
```
curl -L https://github.com/kubernetes/kompose/releases/download/v1.19.0/kompose-darwin-amd64 -o kompose
```
Give executable permissions
```
chmod +x kompose
sudo mv ./kompose /usr/local/bin/kompose
```
#### With Homebrew
```
brew install kompose
```

## [Install K8s for docker-desktop](https://www.docker.com/products/kubernetes)
The easy way, just enable Kubernetes on your docker-desktop

## Install MiniKube
#### [Hyperkit](https://minikube.sigs.k8s.io/docs/drivers/hyperkit/)
```
brew install hyperkit
```
#### [MiniKube](https://kubernetes.io/es/docs/tasks/tools/install-minikube/)
```
brew install minikube
```

## Skaffolding k8s config(just the first time)
```
skaffold init --compose-file docker-compose.yml
```

## Usage

### Start MiniKube
```
minikube start --driver=hyperkit
```

### Run project with hot reload
```
skaffold dev --port-forward -p minikube
```

### For monitoring use [Lens](https://k8slens.dev/) or run the following command
```
minikube dashboard
```

## K8s Skaffold alternatives

* [Draft](https://draft.sh/)
* [Tilt](https://tilt.dev/)
* [Garden](https://garden.io/)
