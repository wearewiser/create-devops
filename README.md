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
# runtime
NODE_VERSION=18.4
```

### Site and SVC .ini Template

```ini
# runtime
NODE_VERSION=18.4
# cluster info
GITOPS_ORG="wearewiser"
GITOPS_REPO="wiser-cluster"
# alpha
GOOGLE_PROJECT_ID_ALPHA="wiser-mainframe"
GOOGLE_COMPUTE_ZONE_ALPHA="europe-west1"
GOOGLE_CLUSTER_ALPHA="wiser-cluster"
DEPLOYMENT_ALPHA="hello"
CONTAINER_ALPHA="hello"
NAMESPACE_ALPHA="devl"
GITOPS_ALPHA_DEPLOYMENT_PATH="apps/devl/hello/site-deployment.yaml"
# beta
GOOGLE_PROJECT_ID_BETA="wiser-mainframe"
GOOGLE_COMPUTE_ZONE_BETA="europe-west1"
GOOGLE_CLUSTER_BETA="wiser-cluster"
DEPLOYMENT_BETA="hello"
CONTAINER_BETA="hello"
NAMESPACE_BETA="test"
GITOPS_BETA_DEPLOYMENT_PATH="apps/test/hello/site-deployment.yaml"
# stable
GOOGLE_PROJECT_ID_STABLE="wiser-mainframe"
GOOGLE_COMPUTE_ZONE_STABLE="europe-west1"
GOOGLE_CLUSTER_STABLE="wiser-cluster"
DEPLOYMENT_STABLE="hello"
CONTAINER_STABLE="hello"
NAMESPACE_STABLE="prod"
GITOPS_STABLE_DEPLOYMENT_PATH="apps/prod/hello/site-deployment.yaml"
```