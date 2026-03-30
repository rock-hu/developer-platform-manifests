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

| action                     | badge                                                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
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
cat components.csv | sort | uniq -c
```

```
      1 location-data-management
      3 management
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


yamllint manifests/components/**/*.yaml

yamllint manifests/domais.yaml
yamllint manifests/resources.yaml
yamllint manifests/systems.yaml
yamllint manifests/templates.yaml
```

```bash
java -jar yj-schema-validator-2.0.2.jar manifests/*.yaml --schema=schemas/Location.v1alpha1.schema.json --report-type=text --report-file-name=reports/locations.xml

java -jar yj-schema-validator-2.0.2.jar --files=manifests/components/*.yaml,manifests/components/**/*.yaml --schema=schemas/Component.v1alpha1.schema.json --report-type=text --report-file-name=reports/components.xml
java -jar yj-schema-validator-2.0.2.jar --files=manifests/domains/*.yaml,manifests/domains/**/*.yaml --schema=schemas/Domain.v1alpha1.schema.json --report-type=text --report-file-name=reports/domains.xml
java -jar yj-schema-validator-2.0.2.jar --files=manifests/groups/*.yaml,manifests/groups/**/*.yaml --schema=schemas/Group.v1alpha1.schema.json --report-type=text --report-file-name=reports/groups.xml
java -jar yj-schema-validator-2.0.2.jar --files=manifests/openapis/*.yaml,manifests/openapis/**/*.yaml --schema=schemas/API.v1alpha1.schema.json --report-type=text --report-file-name=reports/openapis.xml
java -jar yj-schema-validator-2.0.2.jar --files=manifests/resources/*.yaml,manifests/resources/**/*.yaml --schema=schemas/Resource.v1alpha1.schema.json --report-type=text --report-file-name=reports/resources.xml
java -jar yj-schema-validator-2.0.2.jar --files=manifests/systems/*.yaml,manifests/systems/**/*.yaml --schema=schemas/System.v1alpha1.schema.json --report-type=text --report-file-name=reports/systems.xml
java -jar yj-schema-validator-2.0.2.jar --files=manifests/users/*.yaml,manifests/users/**/*.yaml --schema=schemas/User.v1alpha1.schema.json --report-type=text --report-file-name=reports/users.xml
```

```bash
go install github.com/google/yamlfmt/cmd/yamlfmt@latest
```

```bash
yamlfmt manifests/**/*.yaml
```


```
   - backstage:validate-entity
      concurrently --timings --max-processes 10 --kill-others false 'yarn:validate-entity:*'
   - config:check
      backstage-cli config:check --strict --deprecated --config app-config.koyeb.yaml
   - config:docs
      backstage-cli config:docs
   - config:print
      backstage-cli config:print --config app-config.koyeb.yaml
   - config:schema
      backstage-cli config:schema
   - http-server
      http-server ./manifests --port 8080 -d 
   - plop
      plop
   - validate-entity
      validate-entity -q
   - validate-entity:manifests-catalog-entities
      validate-entity manifests/catalog-entities.yaml
   - validate-entity:manifests-components
      validate-entity manifests/components.yaml && validate-entity manifests/components/**/*.yaml
   - validate-entity:manifests-domains
      validate-entity manifests/domains.yaml && validate-entity manifests/domains/**/*.yaml
   - validate-entity:manifests-groups
      validate-entity manifests/groups.yaml && validate-entity manifests/groups/**/*.yaml
   - validate-entity:manifests-openapis
      validate-entity manifests/openapis.yaml && validate-entity manifests/openapis/**/*.yaml
   - validate-entity:manifests-resources
      validate-entity manifests/resources.yaml && validate-entity manifests/resources/**/*.yaml
   - validate-entity:manifests-systems
      validate-entity manifests/systems.yaml && validate-entity manifests/systems/**/*.yaml
   - validate-entity:manifests-templates
      validate-entity manifests/templates.yaml && validate-entity manifests/templates/**/*.yaml
   - validate-entity:manifests-users
      validate-entity manifests/users.yaml && validate-entity manifests/users/**/*.yaml
```