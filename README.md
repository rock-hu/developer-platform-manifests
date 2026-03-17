# developer-platform-manifests

## core entities

We model software in the Backstage catalogue using these three core entities (further explained below):

- Components are individual pieces of software
- APIs are the boundaries between different components
- Resources are physical or virtual infrastructure needed to operate a component

![](./docs/software-model-core-entities.svg)

## ecosystem modeling

A large catalogue of components, APIs and resources can be highly granular and hard to understand as a whole. It might thus be convenient to further categorize these entities using the following (optional) concepts:

- Systems are a collection of entities that cooperate to perform some function
- Domains relate entities and systems to part of the business

![](./docs/software-model-entities.svg)

## badges

|           action           |                                                          badge                                                           |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------|
| manifests-catalog-entities | ![](https://github.com/rock-hu/developer-platform-manifests/actions/workflows/manifests-catalog-entities.yaml/badge.svg) |
| manifests-components       | ![](https://github.com/rock-hu/developer-platform-manifests/actions/workflows/manifests-components.yaml/badge.svg)       |
| manifests-domains          | ![](https://github.com/rock-hu/developer-platform-manifests/actions/workflows/manifests-domains.yaml/badge.svg)          |
| manifests-groups           | ![](https://github.com/rock-hu/developer-platform-manifests/actions/workflows/manifests-groups.yaml/badge.svg)           |
| manifests-openapis         | ![](https://github.com/rock-hu/developer-platform-manifests/actions/workflows/manifests-openapis.yaml/badge.svg)         |
| manifests-resources        | ![](https://github.com/rock-hu/developer-platform-manifests/actions/workflows/manifests-resources.yaml/badge.svg)        |
| manifests-systems          | ![](https://github.com/rock-hu/developer-platform-manifests/actions/workflows/manifests-systems.yaml/badge.svg)          |
| manifests-templates        | ![](https://github.com/rock-hu/developer-platform-manifests/actions/workflows/manifests-templates.yaml/badge.svg)        |
| manifests-users            | ![](https://github.com/rock-hu/developer-platform-manifests/actions/workflows/manifests-users.yaml/badge.svg)            |

```

yarn backstage:validate-entity

--> Timings:
--> ┌────────────────────────────┬──────────┬───────────┬────────┬─────────────────────────────────────────────────────┐
--> │ name                       │ duration │ exit code │ killed │ command                                             │
--> ├────────────────────────────┼──────────┼───────────┼────────┼─────────────────────────────────────────────────────┤
--> │ manifests-groups           │ 3,130    │ 0         │ false  │ yarn run validate-entity:manifests-groups           │
--> │ manifests-openapis         │ 2,324    │ 0         │ false  │ yarn run validate-entity:manifests-openapis         │
--> │ manifests-resources        │ 2,286    │ 0         │ false  │ yarn run validate-entity:manifests-resources        │
--> │ manifests-templates        │ 2,179    │ 0         │ false  │ yarn run validate-entity:manifests-templates        │
--> │ manifests-users            │ 2,161    │ 0         │ false  │ yarn run validate-entity:manifests-users            │
--> │ manifests-systems          │ 2,006    │ 0         │ false  │ yarn run validate-entity:manifests-systems          │
--> │ manifests-domains           │ 1,802    │ 1         │ false  │ yarn run validate-entity:manifests-domains           │
--> │ manifests-components       │ 1,642    │ 1         │ false  │ yarn run validate-entity:manifests-components       │
--> │ manifests-catalog-entities │ 1,353    │ 0         │ false  │ yarn run validate-entity:manifests-catalog-entities │
--> └────────────────────────────┴──────────┴───────────┴────────┴─────────────────────────────────────────────────────┘
error Command failed with exit code 1.

```

```bash
pip install json-schema-for-humans
```

```bash
generate-schema-doc schemas/*.json schemas --config-file jsfh-conf.yaml
```

```bash

pip install --user yamllint
```

```bash
npm install -g @stoplight/spectral-cli
```

```bash
spectral lint manifests/openapis/openbanking-uk/v3.0.0/*.{json,yml,yaml}
spectral lint manifests/openapis/openbanking-uk/v3.1.10/*.{json,yml,yaml}
spectral lint file.yaml
```

## [backstage-entity-validator](https://github.com/RoadieHQ/backstage-entity-validator)

```bash
npm install --global @roadiehq/backstage-entity-validator
validate-entity ...
```

```bash
npm install --save-dev @roadiehq/backstage-entity-validator

npx validate-entity manifests/catalog-entities.yaml

npx validate-entity manifests/groups.yaml
npx validate-entity manifests/openapis.yaml
npx validate-entity manifests/components.yaml
npx validate-entity manifests/domais.yaml
npx validate-entity manifests/resources.yaml
npx validate-entity manifests/systems.yaml
npx validate-entity manifests/templates.yaml
npx validate-entity manifests/users.yaml
```

## spotless

```bash
mvn spotless:check
mvn spotless:apply
mvn rewrite:run
```

## yamllint

```bash
sudo apt-get install yamllint

yamllint manifests/**/*.yaml

yamllint manifests/groups.yaml
yamllint manifests/openapis.yaml
yamllint manifests/components.yaml

yamllint manifests/components/**/*.yaml

yamllint manifests/domais.yaml
yamllint manifests/resources.yaml
yamllint manifests/systems.yaml
yamllint manifests/templates.yaml
```

```bash
go install github.com/google/yamlfmt/cmd/yamlfmt@latest
```

```bash
yamlfmt manifests/**/*.yaml
```

