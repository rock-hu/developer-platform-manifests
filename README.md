# developer-platform-manifests

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

## yamllint	
```bash
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