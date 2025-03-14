# @wiser/create-devops

A utility for initializing DevOps scripts in Wiser.

## Usage

```bash
npm init @wiser/devops [site|svc|lib]
```

for more information

```bash
-------------------------------------------------------
Welcome to Wiser's DevOps tooling generator
-------------------------------------------------------

Usage: npm init @wiser/devops@0.0.0 {[site|svc|lib] | (-t|--type) [site|svc|lib]} -- [options...]

Get started building react libraries.

Arguments:
  type                 site|svc|lib

Options:
  --version            output the version number
  --skip-status-check  Skip checking git status in CWD
  --skip-git           Skip making first commit
  -h, --help           display help for command
```

## devops.ini

In order to initialize parameters, you will need to include a `devops.ini` file at runtime in your target project.

### Lib .ini Template

```ini
NODE_VERSION=18.4
```

### Site and SVC .ini Template

```ini
NODE_VERSION=18.4
[cluster]
GITOPS_ORG="wearewiser"
GITOPS_REPO="wiser-cluster"
[alpha]
GOOGLE_PROJECT_ID="wiser-mainframe"
GOOGLE_COMPUTE_ZONE="europe-west1"
GOOGLE_CLUSTER="wiser-cluster"
DEPLOYMENT="hello"
CONTAINER="hello"
NAMESPACE="devl"
GITOPS_DEPLOYMENT_PATH="apps/devl/hello/site-deployment.yaml"
[beta]
GOOGLE_PROJECT_ID="wiser-mainframe"
GOOGLE_COMPUTE_ZONE="europe-west1"
GOOGLE_CLUSTER="wiser-cluster"
DEPLOYMENT="hello"
CONTAINER="hello"
NAMESPACE="test"
GITOPS_DEPLOYMENT_PATH="apps/test/hello/site-deployment.yaml"
[stable]
GOOGLE_PROJECT_ID="wiser-mainframe"
GOOGLE_COMPUTE_ZONE="europe-west1"
GOOGLE_CLUSTER="wiser-cluster"
DEPLOYMENT="hello"
CONTAINER="hello"
NAMESPACE="prod"
GITOPS_DEPLOYMENT_PATH="apps/prod/hello/site-deployment.yaml"
```