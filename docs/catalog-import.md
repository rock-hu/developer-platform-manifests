# catalog-import

```
https://github.com/rock-hu/developer-platform-manifests/blob/master/manifests/catalog-entities.yaml
```

```
NotAllowedError: Entity user:default/guest
at url:https://github.com/rock-hu/developer-platform-manifests/tree/master/manifests/users.yaml,
originated at url:https://github.com/rock-hu/developer-platform-manifests/blob/master/manifests/catalog-entities.yaml,
is not of an allowed kind for that location
```

POST `http://localhost:7007/api/catalog/locations?dryRun=true`

```json
{
  "type": "url",
  "target": "https://github.com/rock-hu/developer-platform-manifests/blob/master/manifests/catalog-entities.yaml"
}
```

```json
{
  "error": {
    "name": "InputError",
    "message": "NotAllowedError: Entity user:default/guest at url:https://github.com/rock-hu/developer-platform-manifests/tree/master/manifests/users.yaml, originated at url:https://github.com/rock-hu/developer-platform-manifests/blob/master/manifests/catalog-entities.yaml, is not of an allowed kind for that location",
    "stack": "InputError: NotAllowedError: Entity user:default/guest at url:https://github.com/rock-hu/developer-platform-manifests/tree/master/manifests/users.yaml, originated at url:https://github.com/rock-hu/developer-platform-manifests/blob/master/manifests/catalog-entities.yaml, is not of an allowed kind for that location\n    at DefaultLocationService.processEntities (/home/rock/workspace/dev/node_modules/@backstage/plugin-catalog-backend/src/service/DefaultLocationService.ts:143:15)\n    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at async DefaultLocationService.dryRunCreateLocation (/home/rock/workspace/dev/node_modules/@backstage/plugin-catalog-backend/src/service/DefaultLocationService.ts:181:32)\n    at async <anonymous> (/home/rock/workspace/dev/node_modules/@backstage/plugin-catalog-backend/src/service/createRouter.ts:629:26)"
  },
  "request": {
    "method": "POST",
    "url": "/locations?dryRun=true"
  },
  "response": {
    "statusCode": 400
  }
}
```

```
https://github.com/backstage/backstage/blob/master/catalog-info.yaml
```

```json
{
  "exists": false,
  "location": {
    "type": "url",
    "target": "https://github.com/backstage/backstage/blob/master/catalog-info.yaml",
    "id": "url:https://github.com/backstage/backstage/blob/master/catalog-info.yaml"
  },
  "entities": [
    {
      "metadata": {
        "annotations": {
          "backstage.io/managed-by-location": "url:https://github.com/backstage/backstage/blob/master/catalog-info.yaml",
          "backstage.io/managed-by-origin-location": "url:https://github.com/backstage/backstage/blob/master/catalog-info.yaml",
          "backstage.io/view-url": "https://github.com/backstage/backstage/blob/master/catalog-info.yaml",
          "backstage.io/edit-url": "https://github.com/backstage/backstage/edit/master/catalog-info.yaml",
          "backstage.io/source-location": "url:https://github.com/backstage/backstage/tree/master/"
        },
        "name": "generated-aa2077ff12588d858ceb1a61b6102ec9ea316cfc",
        "namespace": "default"
      },
      "apiVersion": "backstage.io/v1alpha1",
      "kind": "Location",
      "spec": {
        "type": "url",
        "target": "https://github.com/backstage/backstage/blob/master/catalog-info.yaml"
      }
    },
    {
      "metadata": {
        "namespace": "default",
        "annotations": {
          "backstage.io/managed-by-location": "url:https://github.com/backstage/backstage/tree/master/catalog-info.yaml",
          "backstage.io/managed-by-origin-location": "url:https://github.com/backstage/backstage/blob/master/catalog-info.yaml",
          "backstage.io/view-url": "https://github.com/backstage/backstage/tree/master/catalog-info.yaml",
          "backstage.io/edit-url": "https://github.com/backstage/backstage/edit/master/catalog-info.yaml",
          "backstage.io/source-location": "url:https://github.com/backstage/backstage/tree/master/",
          "github.com/project-slug": "backstage/backstage",
          "backstage.io/techdocs-ref": "dir:.",
          "lighthouse.com/website-url": "https://backstage.io"
        },
        "name": "backstage",
        "description": "Backstage is an open-source developer portal that puts the developer experience first.\n",
        "links": [
          {
            "title": "Website",
            "url": "http://backstage.io"
          },
          {
            "title": "Documentation",
            "url": "https://backstage.io/docs"
          },
          {
            "title": "Storybook",
            "url": "https://backstage.io/storybook"
          },
          {
            "title": "Discord Chat",
            "url": "https://discord.com/invite/EBHEGzX"
          }
        ]
      },
      "apiVersion": "backstage.io/v1alpha1",
      "kind": "Component",
      "spec": {
        "type": "library",
        "owner": "CNCF",
        "lifecycle": "production"
      }
    }
  ]
}
```
